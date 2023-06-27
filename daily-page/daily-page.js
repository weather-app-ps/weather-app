import global from "../main-page/main-page.js";

async function dayByDay(zip_code)
{
    const cords = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zip_code},US&appid=${global.api_key}`);
    console.log(cords);
    //const response = await fetch("")
}

dayByDay("02120");