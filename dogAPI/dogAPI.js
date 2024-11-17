hello = "Hello world"
console.log(hello)

const a = (1 + 6)
console.log(a)

// const demo = document.getElementById("demo")
// demo.innerHTML = a




// https://dog.ceo/api/breads/image/random
// .then is talk about promises
const changeImage = document.getElementById("changeImage")
const dogImage = document.getElementById("dogImage")


const getNewDog = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
  .then(response => response.json())
  .then(json => {
       dogImage.innerHTML = `<img src="${json.message}" height=500 width=700>`
  });
}

changeImage.onclick = () => getNewDog()
















  const person = {
    firstName: "Noah",
    lastName: "Beatitude",
    age: 50,
    eyeColor: "blue",
    fullName: function() {
      return this.firstName + " " + this.lastName
    }
  };

  
  //  const demo = document.getElementById("demo")
  //  demo.innerHTML = ` My name is ${person.fullName()} `


localStorage.setItem('userDetails', JSON.stringify(person));

const babaNla = localStorage.getItem('userDetails');

// const demo = document.getElementById("demo")
// demo.innerHTML = JSON.parse(babaNla);