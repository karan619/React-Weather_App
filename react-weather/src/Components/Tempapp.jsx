import React, { useState } from 'react'
import './css/Tempapp.css'
//import WeatherIcon from './WeatherIcon'
//import axios from 'axios'

const Tempapp= ()=> {
    
    const[cityTemp, setTemp] = useState("")
    const[search,setSearch] = useState("")
    const[state, setState] = useState({
        cityName:"",
        weather:""
    })

    const enterKey = (evt)=>{
        if(evt.key === "Enter"){
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5ff13ecbc1dec973c188ded38eb331b1`)
        .then(res => res.json())
        .then(result =>{ 
            console.log(result)
            setState({
                cityName:result,
                weather:result.weather[0].id})           
            setTemp(result.main)
            setSearch('')
            })
        .catch((error)=>{console.error(error);})       
        }
    }

    let weatherIcon
    if(!state.weather){
        weatherIcon = `<p className="error_message">No City Found</p>`
    }else if(state.weather === 800){
        weatherIcon = `images/sun.png`
    }else if(state.weather >= 801 && state.weather <= 804 ){
        weatherIcon = `images/clouds.png`
    }else if(state.weather >= 500 && state.weather <= 522 ){
        weatherIcon = `images/rain.png`
    }else if(state.weather >= 300 && state.weather <= 321 ){
        weatherIcon = `images/drizzle.png`
    }else if(state.weather >= 600 && state.weather <= 622 ){
        weatherIcon = `images/snowflake.png`
    }else if(state.weather >= 200 && state.weather <= 232 ){
        weatherIcon = `images/strom.png`
    }
   

   

    return (
        <>
        <section className = "box">
        <div className="wrapper" style={{width: '18rem'}}>
        <div className="output_wrapper">        
          {!state.cityName ? <p className="error_message">No City Found</p>:(
              <div>
              <h2 className="city_Name">{state.cityName.name}</h2>
              <img className="weather_icon" src={weatherIcon} alt="clouds"/>   
              
          <p className="main_temp">{cityTemp.temp}°</p>
          <div className="sub_heading">
          <p className="sub_temp">Min : {cityTemp.temp_min}° | Max: {cityTemp.temp_max}°</p></div>
              </div>
          )}


          <div className="inputData">
          <input type="search" 
          className = "inputField"
          placeholder="Enter City Name"
                   
          onChange={(e)=>{
              setSearch(e.target.value)
          }}
          value={search}
          onKeyPress={enterKey}/>         
          </div>
          
          
        </div>
      </div>
      </section>
        </>
    )
}

export default Tempapp 
