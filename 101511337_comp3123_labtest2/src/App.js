import {useState, useEffect} from "react";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";

import './App.css';

export default function App(){
  const[currentWeather,setCurrentWeather]= useState(null);
  const[city, setCity]= useState("Toronto");


  const API_KEY= "a7a0d5ce6189b9b727e99d9d21982605";

  useEffect(()=> {
    if(!city) return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then((res)=> res.json())
    .then((data)=> {
      setCurrentWeather(data);
    })
    .catch((err)=> console.error(err));
  }, [city]);
  
  const handleSearch = (newCity)=>{
    setCity(newCity);
  };

  return(
    <div className="app">
      <h1>COMP3123 Lab Test 2 - Weather App</h1>
      <SearchBar onSearch={(newCity)=> setCity(newCity)} />
      <CurrentWeather data={currentWeather} />
    </div>
  );

}

