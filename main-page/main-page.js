const global = {
    api: {
        api_key: "2900a9d94e25de2983610e7e1aed3e21",
        // api_url: `http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode},US&appid=2900a9d94e25de2983610e7e1aed3e21`
    }
}

//var searchbtn = document.querySelector(#search);

async function grabCoord(query) {
    //let result = `http://api.openweathermap.org/geo/1.0/zip?zip=${query},US&appid=2900a9d94e25de2983610e7e1aed3e21`;
    let result = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${query},US&appid=2900a9d94e25de2983610e7e1aed3e21`);
    let data = await result.json();
    let lat = data.lat;
    let lon = data.lon;
    console.log(lat,lon);
}

  

function init() {
    // form.addEventListener('submit', (zipcode) => {
    //     //inputs user input zipcode into api url
    //     //returns the info
    // });

    grabCoord("02478");
}

window.addEventListener('DOMContentLoaded', init);
