let weather = {
    apiKey: "897b8ac24c0745dba4f71517220906",
    
  fetchWeather: function (city) {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${city}&aqi=no`
    )
      .then((respone) => respone.json())
      .then((data) => this.displayWeather(data));
  },

  displayWeather: function (data) {
    const name = data.location.name;
    const temp = data.current.temp_c;
    const text = data.current.condition.text;
    const humidity = data.current.humidity;
    const wind = data.current.wind_kph;
    const icon = data.current.condition.icon;
    console.log(name, temp, text, humidity, wind);
    document.querySelector(".location").innerText = "Weather In " + name;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".info").innerText = text;
    document.querySelector(".info1").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".info2").innerText = "Wind: " + wind + " Kph";
    document.querySelector(".icon").src = icon;
    document.querySelector(".weather").classList.remove('loading');
  },
};

weather.fetchWeather("New delhi")

document.querySelector("#input").addEventListener("keyup",(event)=>{
    console.log('enter press')
    let inputText = document.querySelector("#input").value;
    weather.fetchWeather(inputText);
})