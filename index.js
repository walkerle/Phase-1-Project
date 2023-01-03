// Globals
const baseUrl = "https://goweather.herokuapp.com/weather/"

// DOM Selectors
const currentCity = document.querySelector('#current-city');
const threeDayForecast = document.querySelector('#threedayforecast');
// const openCityForm = document.querySelector('');
// const cityForm = document.querySelector('');
// const commentsForm = document.querySelector('');
// const catHTML = document.querySelector('');

// Fetch Functions
// function getApiData(url) {
//     return fetch(url)
//     .then(res => res.json())
// }

function getOneCityData(url, city) {
    return fetch(`${url}/${city}`)
    .then(res => res.json())
}

// Back-end Fetch Functions

// Render Functions
function renderCityData(data) {
    const cityDesc = document.createElement('h3');
    const cityTemp = document.createElement('h3');
    const cityWind = document.createElement('h3');
    cityDesc.textContent = `Today's Forecast: ${data.description}`;
    cityTemp.textContent = `Temperature: ${data.temperature}`;
    cityWind.textContent = `Wind: ${data.wind}`;
    currentCity.append(cityDesc, cityTemp, cityWind);
}

function renderForecast(data) {
    data.forEach(element => {
        const temp = document.createElement('h4');
        const wind = document.createElement('h4');
        temp.textContent = element.temperature;
        wind.textContent = element.wind;
        threeDayForecast.append(temp, wind);
    })
}

// Event Listeners
// openCityForm.addEventListener('click', cycleCatPics);
// cityForm.addEventListener('submit', cycleCatPics);
// commentsForm.addEventListener('submit', cycleCatPics);
// catHTML.addEventListener('dblclick', cycleCatPics);

// Event Handlers
function cycleCatPics() {}

// Initializers
// getApiData(baseUrl).then(data => console.log(data)); // renderForecast?
getOneCityData(baseUrl, 'New York').then(data => {
    // console.log(data);
    renderCityData(data);
    console.log(data.forecast);
    // renderForecast(data.forecast);
}); // renderCityData?
