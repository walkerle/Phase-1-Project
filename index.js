// Globals
const baseUrl = "https://goweather.herokuapp.com/weather/"

// DOM Selectors
const openCityForm = document.querySelector('');
const cityForm = document.querySelector('');
const commentsForm = document.querySelector('');
const catHTML = document.querySelector('');

// Fetch Functions
function getApiData(url) {
    return fetch(url)
    .then(res => res.json())
}

function getOneCityData(url, city) {
    return fetch(`${url}/${city}`)
    .then(res => res.json())
}

// Back-end Fetch Functions

// Render Functions
function renderCityData(data) {}

function renderForecast(data) {}

// Event Listeners
openCityForm.addEventListener('click', cycleCatPics);
cityForm.addEventListener('submit', cycleCatPics);
commentsForm.addEventListener('submit', cycleCatPics);
catHTML.addEventListener('dblclick', cycleCatPics);

// Event Handlers
function cycleCatPics() {}

// Initializers
getApiData(baseUrl).then(data => console.log(data)); // renderForecast?
getOneCityData(baseUrl, 'New York').then(data => console.log(data)); // renderCityData?
