const weatherOutput = document.getElementById("weather-output");
const cityName = document.getElementById("city-name");
const weatherType = document.getElementById("weather-type");
const temp = document.getElementById("temp");
const minTemp = document.getElementById("min-temp");
const maxTemp = document.getElementById("max-temp");

const cityInput = "london";

const url = `https://open-weather13.p.rapidapi.com/city/${cityInput}`;

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '36c33dd655msh49450f347a382eap1eb8a8jsn67fb98c27d80',
    'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
  }
};

const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data.name);

    //Update the HTML elements with weather data here
    cityName.textContent = data.name;
    weatherType.textContent = data.weather[0].description;
    temp.textContent = `${data.main.temp}°C`;
    minTemp.textContent = `${data.main.temp_min}°C`;
    maxTemp.textContent = `${data.main.temp_max}°C`;
  } catch (error) {
    console.error(error);
  }
};

fetchData(url, options);




// const url = 'https://open-weather13.p.rapidapi.com/city/london';
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '36c33dd655msh49450f347a382eap1eb8a8jsn67fb98c27d80',
//     'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com',
//   },
// };

// try {
//   const response = await fetch(url, options);

//   // Check if the response status code is OK (200)
//   if (response.status === 200) {
//     const result = await response.json(); // Parse JSON response
//     console.log(data);
//   } else {
//     console.error('Request failed with status:', response.status);
//   }
// } catch (error) {
//   console.error('An error occurred:', error);
// }
