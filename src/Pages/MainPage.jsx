import axios from "axios";
import React, { useState } from "react";
import { sortedData } from "../helper/util";
import CurrentWeather from "../Components/CurrentWeather";
import WeatherBox from "../Components/WeatherBox";
import "../css/mainpage.css";

//import WeatherIcon from './WeatherIcon'

const MainPage = () => {
  const [alertText, setAlert] = useState("");
  const [cityData, setCityData] = useState([]);
  const [search, setSearch] = useState("");
  const [cityName, setCityName] = useState("");

  const enterKey = async (evt) => {
    if (evt.key === "Enter") {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&appid=5ff13ecbc1dec973c188ded38eb331b1`
        );
        if (response.status !== 200) {
          console.error("wrong city");
        } else {
          console.log(response.data);
          let res = response.data;

          setCityName(res.city.name);
          let sortData = sortedData(response.data);

          const days = [];

          for (let i = 0; i < 5; i++) {
            //console.log(">>>", res.list[sortData[i]].dt_txt);
            days.push({
              date: res.list[sortData[i]].dt_txt,
              weather_desc: res.list[sortData[i]].weather[0].description,
              icon: res.list[sortData[i]].weather[0].icon,
              temp: res.list[sortData[i]].main.temp,
            });
          }
          //console.log(days);

          setCityData(days);
          setAlert("");
        }
      } catch (error) {
        setAlert("please check the spellings...!!!");
        console.log("wrong city");
      }
    }
  };

  //console.log(">>>>", cityData);

  return (
    <>
      <div className="mainpage">
        <div className="mainpage__search">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Enter a City...."
            type="text"
            onKeyPress={enterKey}
          />
        </div>

        <h1>{alertText}</h1>

        <CurrentWeather city={cityName} cityData={cityData} />

        <WeatherBox tempData={cityData} />
      </div>
    </>
  );
};

export default MainPage;
