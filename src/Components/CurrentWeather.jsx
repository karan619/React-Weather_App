import React from "react";
import "../css/currentweather.css";

function CurrentWeather({ city, cityData }) {
  //console.log(">>>", cityData[0].icon);
  return (
    <>
      <div className="currentweather__box">
        <div className="currentweather__left">
          <img
            className="currentweather__image"
            src={
              cityData.length !== 0
                ? `images/${cityData[0].icon}.svg`
                : "images/01d.svg"
            }
            alt="sun"
          />
        </div>
        <div className="currentweather__right">
          <h2>Today</h2>
          <h1>{city}</h1>

          <p>Temprature: {cityData.length !== 0 ? cityData[0].temp : 0} °C </p>

          <p>{cityData.length !== 0 ? cityData[0].weather_desc : ""}</p>
        </div>
      </div>
    </>
  );
}

export default CurrentWeather;
