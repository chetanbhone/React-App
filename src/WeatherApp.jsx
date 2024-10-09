import React, { useState } from 'react';
import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 25.20,
        temp: 16.26,
        tempMin: 14.55,
        tempMax: 18.00,
        humidity: 47,
        weather: "haze"
    });

   let updateInfo = (newInfo) =>{
    setWeatherInfo(newInfo);
   }
 
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Weather App by CB7</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}
