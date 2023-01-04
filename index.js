// Globals
const baseUrl = "https://goweather.herokuapp.com/weather/"
const dbjson = 'db.json'
const coldCats = [
    'images/cold1.jpeg',
    'images/cold2.jpg',
    'images/cold3.jpg'
];
const sunnyCats = [
    'images/hot1.jpg',
    'images/hot2.jpg',
    'images/hot3.jpg'
];
const hotCats = [
    'images/sunny1.jpg',
    'images/sunny2.jpg',
    'images/sunny3.jpg'
];
let catArray = [];

// DOM Selectors
const currentCity = document.querySelector('#forecast');
const threeDayForecast = document.querySelector('#threedayforecast');
const catMood = document.querySelector('#cat-pictures');
// const openCityForm = document.querySelector('');
// const cityForm = document.querySelector('');
// const commentsForm = document.querySelector('');
// const catHTML = document.querySelector('');

// Fetch Functions
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

    renderCatPic(tempInF);
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
    })
}

function renderCatPic(temp) {
    const catImg = document.createElement('img');
    catImg.id = 'cat-image';
    if(temp < 45) {
        catArray = coldCats;
    } else if (temp >= 45 && temp <= 90) {
        catArray = sunnyCats;
    } else if (temp > 90) {
        catArray = hotCats;
    }
    catImg.src = catArray[0];
    catMood.append(catImg);
    cycleCatPics(catArray);
}

// function to fetch description, data.description in renderCityData
// String.split(' ');
// Array.find();

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
function cycleCatPics(catArray) {
    const catImg = document.querySelector('#cat-image');
    catImg.addEventListener('dblclick', e => {
        // debugger
        console.log(catImg);
        console.log(catArray);
        console.log(e.target);
        console.log(e.target.src);
        console.log(catArray[0]);
        console.log(e.target.src == catArray[0]);
        // catImage.src = e.target.src;
    })
}

// Initializers
// getOneCityData(baseUrl, 'New York').then(data => {
//     renderCityData(data);
//     renderForecast(data.forecast);
// });
renderCatPic(40);