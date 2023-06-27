// import global from "../main-page/main-page.js";

const global = {
    api: {
        api_key: "2900a9d94e25de2983610e7e1aed3e21",
        api_url: `https://api.openweathermap.org/data/3.0/`,
    }
};

async function getCords(zip_code)
{
    const request = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zip_code},US&appid=${global.api.api_key}`);
    const cords = await request.json();
    console.log(cords);
    return cords;
}

async function getWeather(zip_code)
{
    const cords = await getCords(zip_code);
    const request = await fetch(`https://api.weather.gov/points/${cords.lat},${cords.lon}`);
    const weather = await request.json();

    const request_forecast = await fetch(weather.properties.forecast);
    const forecast = (await request_forecast.json()).properties;
    console.log(forecast);

    let date = new Date();
    for (let i = 0; i < 5; i++)
    {
        date.setDate(date.getDate() + 1);
        console.log (date.getMonth() + 1, date.getDate());
        console.log(`High ${forecast.periods[i * 2].temperature}, Low ${forecast.periods[i * 2 + 1].temperature}`);
        console.log(`Precipitation is ${forecast.periods[i*2].probabilityOfPrecipitation.value}`)
    }
}
console.log(global);
console.log('hiii');

getWeather("02120");