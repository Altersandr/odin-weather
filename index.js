const input = document.getElementById('location');
const btn = document.getElementById('submit');
const sunrise = document.querySelector('[data-sunrise]');

btn.innerHTML = '<img class = "magnify" src="/img/icons/magnifying-glass-unscreen.gif" alt="magnifying">';

async function fetchWeather(e){
    e.preventDefault()

    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&cnt=7&APPID=67978a2d7aed027f50f49b607fd26f72&units=metric`);

    const jsonWeather = await weatherResponse.json()

    console.log(jsonWeather)

    const weatherData = getData(jsonWeather);

    console.log(weatherData)

    console.log(new Date(1671810201).toLocaleTimeString())

};

function getData (data){
    return {
        name: data.name,
        coord: data.coord,
        temp: data.main,
        sys: data.sys,
        clouds: data.clouds,
        weather: data.weather,
        wind: data.wind
        }
};
btn.addEventListener('click', fetchWeather)