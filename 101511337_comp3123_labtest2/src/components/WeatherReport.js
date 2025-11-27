export default function WeatherReport({data}){
    if(!data) return <p>Search A City!</p>

    const{name, main, weather}= data;

    return(
        <div className="weather-report">
            <h2>{name}</h2>
            <h3>{Math.round(main.temp -273.15)}°C</h3>
            <p>{weather[0].description}</p>
            <img src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="icon"/>
        </div>
    );
}