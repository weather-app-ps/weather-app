const global = {
    api: {
        api_key: "2900a9d94e25de2983610e7e1aed3e21",
        api_url: `http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode},US&appid=2900a9d94e25de2983610e7e1aed3e21`
    }
}

//var searchbtn = document.querySelector(#search);

async function displayCurrTemp(query) {
    const {currTemp} = await fetchAPIData();
}

function init() {
    form.addEventListener('submit', (zipcode) => {
        //inputs user input zipcode into api url
        //returns the info
    });

}

window.addEventListener('DOMContentLoaded', init);
