import React from "react";
import "../css/weatherbox.css";

const WeatherBox = ({ tempData }) => {
  //console.log(tempData.slice(1).map((day) => day));
  let getDay = (date) => {
    let weekday = new Array(7);
    weekday[1] = "Sunday";
    weekday[2] = "Monday";
    weekday[3] = "Tuesday";
    weekday[4] = "Wednesday";
    weekday[5] = "Thursday";
    weekday[6] = "Friday";
    weekday[7] = "Saturday";

    return weekday[new Date(date).getDay()];
  };

  return (
    <>
      {
        <div className="weatherbox__wrapper">
          {tempData.slice(1).map((day) => (
            <div className="weatherbox">
              <h1>{day.length !== 0 ? getDay(day.date) : ""}</h1>

              <img
                className="weatherbox__image"
                src={
                  tempData.length !== 0
                    ? `images/${day.icon}.svg`
                    : "images/01d.svg"
                }
                alt="sun"
              />

              <p>{day.temp}°C</p>
              <p>{day.weather_desc}</p>
            </div>
          ))}
        </div>
      }
    </>
  );
};

export default WeatherBox;
