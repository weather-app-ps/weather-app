const global = {
    api: {
        api_key: "2900a9d94e25de2983610e7e1aed3e21",
        api_url: `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=2900a9d94e25de2983610e7e1aed3e21`;
    }
}

async function displayCurrTemp() {
    const {currTemp} = await fetchAPIData();
}
