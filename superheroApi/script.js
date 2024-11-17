// 148866258264719
// https://superheroapi.com/api/access-token


const searchButton= document.getElementById("searchButton")
const textInput = document.getElementById("searchInput")
const result = document.getElementById("results")
const heroName = document.getElementById("heroName")

const combat = document.getElementById("combat")
const intelligence = document.getElementById("intelligence")
const power = document.getElementById("power")
const speed = document.getElementById("speed")
const strength = document.getElementById("strength")
const powerstatContainer = document.querySelector(".powerstat-container")

const getRandomHero = document.getElementById("getRandomHero")


searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default form submission
        searchButton.click(); // Simulate a click on the search button
    }
});


searchButton.onclick = () => {
    const text = searchInput.value.trim();
    getSuperHero(text);

    searchInput.value = "";
       // Show the powerstat container
       powerstatContainer.style.display = 'block';
}

const randomHero = ()  => {
    const numberOfHero = 731

    return Math.floor(Math.random() * numberOfHero) + 1
   
}

getRandomHero.onclick = () => {

    getSuperHero(randomHero())

     // Show the powerstat container
     powerstatContainer.style.display = 'block';
}

const accessToken = `148866258264719`;
const link = `https://superheroapi.com/api.php/${accessToken}`;
const displayHero = document.getElementById("displayHero");

const getSuperHero = (id, name) => {
    fetch(`${link}/${id}`)
    .then(response => response.json())
    .then(json => {
        console.log(json);
        combat.innerHTML = json.powerstats.combat
        intelligence.innerHTML = json.powerstats.intelligence
        power.innerHTML = json.powerstats.power
        speed.innerHTML = json.powerstats.speed
        strength.innerHTML = json.powerstats.strength
        heroName.innerHTML = json.name
        result.innerHTML = `<img src="${json.image.url}" height=640 width=480>`;
    })
    .catch(error => {
        console.error("Error fetching superhero data:", error);
    });
};



 