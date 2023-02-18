const weatherApi = {
    key: "eb7a2d4a5a9b284fe54b7bb547238443",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather",
}
const searchBox = document.getElementById("searchBox");
searchBox.addEventListener("keypress" , function(event){
    if(event.keyCode === 13){
        getWeatherReport(searchBox.value)
        searchBox.value='';
        // changes value to null after clicking enter
    }
});

function getWeatherReport(city) {

    //  https://api.openweathermap.org/data/2.5/weather?q=cityName&appid=eb7a2d4a5a9b284fe54b7bb547238443&unit=metric
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
        .then(function (response) { return response.json() })
        .then(function (response) {
            showWeatherReport(response);
        })
        .catch(function (err) {
            console.log(err)
        })

}
function showWeatherReport(currentWeather){
    let city = document.getElementById("city");
    let currentDate = document.getElementById("currentDate");
    let cardImage = document.getElementById("cardImage");
    let temp = document.getElementById("temp");
    let feelLike = document.getElementById("feelLike");
    let weather = document.getElementById("weather");
    let minMaxTemp = document.getElementById("minMaxTemp");
    let humidity = document.getElementById("humidity");
    let pressure= document.getElementById("pressure");
    let visibility = document.getElementById("visibility");
    let wind = document.getElementById("wind");

    city.innerHTML = currentWeather.name;

    
    cardImage.src = manageImage(currentWeather.weather[0].main)
    // console.log(currentWeather.weather[0].main)
    temp.innerHTML = `${Math.round(currentWeather.main.temp)} °C `
    feelLike.innerHTML = `(Feels Like ${Math.round(currentWeather.main.feels_like)} °C)`
    weather.innerHTML = currentWeather.weather[0].main;
    minMaxTemp.innerHTML =` ${Math.floor(currentWeather.main.temp_min)}°C / ${Math.ceil(currentWeather.main.temp_max)}°C `
    
    humidity.innerHTML = `<span>humidity </span> ${currentWeather.main.humidity}` 
    pressure.innerHTML = `<span>pressure </span> ${currentWeather.main.pressure}` 
    visibility.innerHTML = `<span>visibility </span> ${currentWeather.visibility}` 
    wind.innerHTML = `<span>wind </span> ${currentWeather.wind.speed}` 
    // console.log(currentWeather);
    let todayDate = new Date().toDateString();
    currentDate.innerHTML = todayDate;
}
function manageImage(weatherType) {
    if (weatherType === 'Clear') {

        return "images/clear.jpg"

    } else if (weatherType === 'Smoke') {

        return "images/smoke.jpg"

    } else if (weatherType === 'Haze') {

        return "images/haze.jpg"

    } else if (weatherType === 'Rain') {

        return "images/rain.jpg"

    } else if (weatherType === 'Snow') {

        return "images/snow.jpg"

    } else if (weatherType === 'Thunderstorm') {

        return "images/thunderstorm.jpg"

    } else if (weatherType === "Mist") {

        return "images/mist.jpg"

    } else if (weatherType === "Clouds") {

        return "images/clouds.jpg"

    }
    else {
        return "images/clear.jpg"
    }
}