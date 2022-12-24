const input = document.getElementById('location');
const btn = document.getElementById('submit');
const sunrise = document.querySelector('[data-sunrise]');
const sunset = document.querySelector('[data-sunset');
const humidity = document.querySelector('[data-humidity]');
const clouds = document.querySelector('[data-clouds]');
const wind = document.querySelector('[data-wind]');
const pressure = document.querySelector('[data-pressure]');
const feelslike = document.querySelector('[data-feelslike]');
const visibility = document.querySelector('[data-visibility]');
const temperature = document.querySelector('.temperature');
const day = document.querySelector('[data-day]');
const city = document.querySelector('.city');
const toggleSwitch = document.querySelector('.toggle-switch');

btn.innerHTML = '<img class = "magnify" src="res/icons/magnifying-glass-unscreen.gif" alt="magnifying">';

async function fetchWeather(e){
    e.preventDefault()
    let units = "metric";
    input.value = input.value ==""? "London": input.value;
    if(toggleSwitch.classList.contains('active')){
        units = "imperial"
    }

    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&cnt=7&APPID=67978a2d7aed027f50f49b607fd26f72&units=${units}`);

    const jsonWeather = await weatherResponse.json()

    const weatherData = getData(jsonWeather);

    temperature.innerHTML = units==="metric" ? Math.round(weatherData.temp.temp) + "°C": Math.round(weatherData.temp.temp) + "°F";
    city.innerHTML = weatherData.name;
    clouds.innerHTML = weatherData.clouds.all + "%";
    wind.innerHTML = weatherData.wind.speed + "m/s";
    pressure.innerHTML = weatherData.temp.pressure + "hPA";
    humidity.innerHTML = weatherData.temp.humidity + "%";
    feelslike.innerHTML = units==="metric" ? Math.round(weatherData.temp.temp) + "°C": Math.round(weatherData.temp.temp) + "°F";
    visibility.innerHTML = weatherData.visibility / 1000 + "km";
    day.innerHTML = new Date().toDateString();
    sunrise.innerHTML = formatTime(weatherData.sys.sunrise);
    sunset.innerHTML = formatTime(weatherData.sys.sunset);

};

function formatTime(value) {
    return new Date(value * 1e3).toTimeString().slice(0 , 5);
  }
  
function getData (data){
    return {
        name: data.name,
        temp: data.main,
        sys: data.sys,
        clouds: data.clouds,
        weather: data.weather,
        wind: data.wind,
        visibility: data.visibility
        }
};
btn.addEventListener('click', fetchWeather);

toggleSwitch.addEventListener('click', () => {
  toggleSwitch.classList.toggle('active');
});
