var global = {
    api: {
        api_key: "2900a9d94e25de2983610e7e1aed3e21",
        // api_url_loc: `http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode},US&appid=2900a9d94e25de2983610e7e1aed3e21`
    }
}

//var searchbtn = document.querySelector(#search);

async function searchCurrTemp(query) {
    //let result = `http://api.openweathermap.org/geo/1.0/zip?zip=${query},US&appid=2900a9d94e25de2983610e7e1aed3e21`;
    let location = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${query},US&appid=2900a9d94e25de2983610e7e1aed3e21`);
    let data = await location.json();
    let lat = data.lat;
    let lon = data.lon;
    
    let tempGrab = await fetch (`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=2900a9d94e25de2983610e7e1aed3e21`);
    let result = await tempGrab.json();
    console.log(result);
}

  

function init() {
    // form.addEventListener('submit', (zipcode) => {
    //     //inputs user input zipcode into api url
    //     //returns the info
    // });

    searchCurrTemp("02478");
}

window.addEventListener('DOMContentLoaded', init);
