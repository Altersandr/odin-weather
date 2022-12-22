const input = document.getElementById('location');
const btn = document.getElementById('submit');

async function fetchWeather(e){
    e.prevent.default()
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&APPID=67978a2d7aed027f50f49b607fd26f72&units=metric`);
    
    const json = await response.json()
    console.log(json)

    const data = getData(json);

    console.log(data)

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