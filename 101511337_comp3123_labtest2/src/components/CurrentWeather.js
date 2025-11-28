export default function CurrentWeather({data}){
    if(!data) return <p>Search A City!</p>
    if (data.cod && data.cod !== 200) return <p>{data.message}</p>;

    const{name, main, weather, timezone}= data;

    const utcTime= new Date().getTime() + new Date().getTimezoneOffset()* 60000;
    const cityTime= new Date(utcTime + timezone * 1000);

    const dateOptions={weekday: 'long', month: 'short', day: 'numeric', year: 'numeric'};
    const timeOptions={hour: 'numeric', minute: 'numeric', hour12: true};

    const formattedDate= cityTime.toLocaleDateString(undefined, dateOptions);
    const formattedTime= cityTime.toLocaleTimeString(undefined, timeOptions);


    return(
        <div className="current-weather">
            <h2>{name}</h2>
            <p>{formattedDate} | {formattedTime}</p>
            <h3>{Math.round(main.temp -273.15)}°C</h3>
            <p>{weather[0].description}</p>
            <img src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="icon"/>
        </div>
    );
}