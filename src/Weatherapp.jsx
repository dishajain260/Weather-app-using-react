import SearchBox from "./searchbox"
import InfoBox from "./infoBox"
import { useState } from "react"
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelsLike:32.31,
        humidity: 48,
       temp: 31.05,
        tempMax: 31.05,
        tempMin: 31.05,
       weather: "haze"
    })
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather app by delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}