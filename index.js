// Globals
const baseUrl = "https://goweather.herokuapp.com/weather/"

// DOM Selectors
const currentCity = document.querySelector('#forecast');
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
    const tempInF = convCtoF(parseInt(data.temperature.substring(0, data.temperature.length-2)));
    const windInMih = convKmhtoMph(parseInt(data.wind.substring(0, data.wind.length-4)));

    cityDesc.textContent = `Today's Forecast: ${data.description}`;
    cityTemp.textContent = `Temperature: ${tempInF} F`;
    cityWind.textContent = `Wind: ${windInMih} mph`;
    currentCity.append(cityDesc, cityTemp, cityWind);
}

function renderForecast(data) {
    data.forEach(element => {
        const temp = document.createElement('h4');
        const wind = document.createElement('h4');
        const tempInF = convCtoF(parseInt(element.temperature.substring(0, element.temperature.length-2)));
        // console.log(tempInF);
        const windInMih = convKmhtoMph(parseInt(element.wind.substring(0, element.wind.length-4)));
        // console.log(windInMih)

        temp.textContent = `${tempInF}°F`;
        wind.textContent = `${windInMih} mph`;
        threeDayForecast.append(temp, wind);
        threeDayForecast.setAttribute('style', 'border: 1px solid')
    })
}

function convCtoF(celsius) {
    const fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
}

function convKmhtoMph(kmh) {
    const mph = kmh * 0.6213712;
    return mph;
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
    // console.log(data.forecast);
    renderForecast(data.forecast);
});
// console.log(convCtoF(20));
// console.log(convKmhtoMih(100));