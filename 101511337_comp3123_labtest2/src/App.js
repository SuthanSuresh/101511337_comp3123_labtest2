import {useState, useEffect} from "react";
import SearchBar from "./components/SearchBar";
import WeatherReport from "./components/WeatherReport";
import './App.css';

export default function App(){
  const[weather,setWeather]= useState(null);
  const[city, setCity]= useState("Toronto");

  const API_KEY= "e9bd9407d922b6d08853f530efd85cee";

  useEffect(()=> {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid={{e9bd9407d922b6d08853f530efd85cee}}`)
    .then((res)=> res.json())
    .then((data)=> setWeather(data))
    .catch((err)=> console.error(err));
  }, [city]);

  return(
    <div className="app">
      <h1>Weather App</h1>
      <SearchBar onSearch={(newCity)=> setCity(newCity)} />
      <WeatherReport data={weather} />    
    </div>
  );

}


