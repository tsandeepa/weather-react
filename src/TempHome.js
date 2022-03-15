import { useEffect, useState } from "react";

const TempHome = () => {

    

    const [area, setArea ] = useState('Colombo')
    const [placeInfo, setPlaceInfo] = useState({});


    const getWeather = () =>{
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=110585d5a744455191d171919220803&q=${area}&days=1&aqi=no&alerts=no`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setPlaceInfo({
                    name: data.location.name,
                    country: data.location.country,
                    farenheit: {
                        current: data.current.temp_f,
                        high: data.forecast.forecastday[0].day.maxtemp_f,
                        low: data.forecast.forecastday[0].day.mintemp_f
                      },
                })
                 console.log(placeInfo);
            })
            .catch(err => console.error(err));
    }


    useEffect(()=>{
        getWeather()
    },[])

    return ( 
        <div>
            <h3>This is test</h3>

            <p>Name : {placeInfo.name}</p>
            <p>Country : {placeInfo.country}</p>
            <div>
            <h1>{placeInfo.farenheit?.current}</h1>
            <h1>{placeInfo.farenheit?.high}° F</h1>
            <h1>{placeInfo.farenheit?.low}° F</h1>
            </div>
            <p></p>

        </div>
     );
}
 
export default TempHome;