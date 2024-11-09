//import React from 'react'
import './WeatherApp.css'
import React, { useState } from 'react';
import axios from 'axios';


const API_KEY = '742b52defe44459705281a0af09c6280';//'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your API key
const WApp=()=>{
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const getWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      console.log(response);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
    }
  };

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <label>
        Enter City:
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <button onClick={getWeatherData}>Get Weather</button>

      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );


}
const WeatherApp = () => {
  return (
    <div className="App">
      <header className="App-header">
        <WApp />
      </header>
    </div>
  )
}

export default WeatherApp
