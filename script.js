// https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=imperial

let API_KEY = "f337fe871747a149979da096ded690ac";

getWeatherData = (city) =>{
    const URL = 'https://api.openweathermap.org/data/2.5/weather';

    const Full_Url = `${URL}?q=${city}&appid=${API_KEY}&units=metric`;
    const weatherPromise = fetch(Full_Url);
    console.log(city);

    return weatherPromise.then((response)=>{
        return response.json()
    })
}

function searchCity(){
    const city = document.getElementById("city-input").value;

    getWeatherData(city)
    .then((response) =>{
        showWeatherData(response)
        console.log(response)
    })
    .catch((err) =>{
        console.log(err)
    })
}

showWeatherData = (weatherData) =>{
    document.getElementById('city-name').innerText = weatherData.name;
    document.getElementById('weather-type').innerText = weatherData.weather[0].main;
    document.getElementById('temp').innerText = weatherData.main.temp;
    document.getElementById('wind-speed').innerText = weatherData.wind.speed*3.2;
    document.getElementById('max-temp').innerText = weatherData.main.temp_max+3;
}