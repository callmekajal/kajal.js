
async function getWeather() {
    const city = document.getElementById("city").value;
    const resultDiv = document.getElementById("weather-result");
  
    if (city.trim() === "") {
      resultDiv.innerHTML = "Please enter a city name.";
      return;
    }
  
    const apiKey = "1234567890abcdef1234567890abcdef";

;
 // 🔑 Paste your OpenWeatherMap API key here
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.cod === "404") {
        resultDiv.innerHTML = "City not found!";
        return;
      }
  
      const { name, main, weather } = data;
      resultDiv.innerHTML = `
        <h2>${name}</h2>
        <p>🌡️ Temperature: ${main.temp}°C</p>
        <p>☁️ Weather: ${weather[0].description}</p>
        <p>💧 Humidity: ${main.humidity}%</p>
      `;
    } catch (error) {
      resultDiv.innerHTML = "Failed to fetch data. Try again later.";
    }
  }
  