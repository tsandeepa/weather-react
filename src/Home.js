import { useEffect, useState } from "react";

const Home = () => {

    const [area, setArea ] = useState('')
    const [weather, setWeather] = useState({})

    const fetchWeather = () =>{
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=110585d5a744455191d171919220803&q=${area}&days=1&aqi=no&alerts=no`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setWeather({
                condition: data.current.condition.text,
                feelsLike: data.current.feelslike_c,
                tempC: data.current.temp_c,
                humitity:data.current.humidity,
                location:{
                    country:data.location.country,
                    region:data.location.region
                }
            })
            console.log(weather);
        })
        .catch(err => console.error(err));
    }

        
    

    



    return ( 
        <div>
            <h2>This is home</h2>
            <p>{area}</p>
            <input type="text" value={area} onChange={(e)=>setArea(e.target.value)} />
            <button onClick={()=>fetchWeather()}> Search</button> <br/>
            
        </div>
     );
}
 
export default Home;