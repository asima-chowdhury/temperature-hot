//API call by city name:  api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
const weatherApi = {
    key: "2b656c980fbbaf20978b8b7ba878b70a",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}
//Event Listener Function
const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener('click', function () {
    const getCity = document.getElementById("getCity");
    if (getCity.value != "") {
        getWeatherReport(getCity.value);
        getCity.value = "";
    }
    else if (getCity.value == "") {
        alert('Please enter location first!');
    }
})
//Get Weather Report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
        .then(res => res.json())
        .then(showWeatherReport);
}
//Show Weather Report
function showWeatherReport(data) {
    console.log(data);
    let city = document.getElementById('cityName');
    city.innerText = `${data.name}, ${data.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerText = `${data.main.temp}`;

    let weatherLead = document.getElementById('weatherLead');
    weatherLead.innerText = `${data.weather[0].main}`;

    let weatherIcon = document.getElementById('weatherIcon');
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}