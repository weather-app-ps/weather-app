var global = {
    api_key: "2900a9d94e25de2983610e7e1aed3e21",
    lat: '',
    lon: ''
}

//var searchbtn = document.querySelector(#search);

async function findLat(query) {
    const apiKey = global.api_key;
    const location = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${query},US&appid=${apiKey}`);
    const data = await location.json();
    lat = data.lat;
    return lat;
}

async function findLon(query) {
    const apiKey = global.api_key;
    const location = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${query},US&appid=${apiKey}`);
    const data = await location.json();
    lon = data.lon;
    return lon;
}

async function searchCurrTemp(query) {
    //let result = `http://api.openweathermap.org/geo/1.0/zip?zip=${query},US&appid=2900a9d94e25de2983610e7e1aed3e21`;
    const apiKey = global.api_key;
    let lat = await findLat(query).then(result => {return result});
    let lon = await findLon(query).then(result => {return result});

    const tempGrab = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`);
    const result = await tempGrab.json();

    const currTemp = result.main.temp;

    const displayCurrTemp = document.getElementById("current-temp");
    displayCurrTemp.innerHTML = currTemp;
}

function clicked() {
    console.log("hiii");
}

  

function init() {

    searchCurrTemp("02478");
}

window.addEventListener('DOMContentLoaded', init);
