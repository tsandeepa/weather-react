import { useEffect, useRef, useState } from "react";
import { DayCast } from "./componens/styled/DayCast.Styled";
import { Button } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';

import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';

import { motion } from "framer-motion";
import Header from "./componens/Header";
import { MainInfo } from "./componens/styled/MainInfo.Styled";


const Home = () => {

    const [area, setArea ] = useState('Colombo')
    const [ifo_region, setIfoRegion] = useState(null)

    const [weather, setWeather] = useState('asdas')
    const [dayFormat, setDayFormmat] = useState([])
    const [dayText, setDayText] = useState([])




    const [ifo_condition, setIfoCondition] = useState(null)
    const [ifo_feelsLike, setIfoFeelsLike] = useState(null)
    const [ifo_tempC, setIfoTempC] = useState(null)
    const [ifo_humitity, setIfoHumidity] = useState(null)
    const [ifo_country, setIfoCountry] = useState(null)

    useEffect(()=>{
        fetchWeather()
    },[area])

    const  fetchWeather  = async () =>{
        await fetch(`http://api.weatherapi.com/v1/forecast.json?key=110585d5a744455191d171919220803&q=${area}&days=3&aqi=no&alerts=no`)
        .then (response =>   response.json())
        .then(data => {
            console.log(data);
            // setForecast(data.forecast)
            setDayFormmat(data.forecast.forecastday)
            setWeather({
                condition: data.current.condition.text,
                feelsLike: data.current.feelslike_c,
                tempC: data.current.temp_c,
                humitity:data.current.humidity,
                windSpeed:data.current.wind_kph,
                location:{
                    country: data.location.country,
                    region: data.location.region,
                },
                forecast: {
                    day: data.forecast.forecastday,
                    max: data.forecast.forecastday[0].day.maxtemp_c,
                    min: data.forecast.forecastday[0].day.mintemp_c,
                    
                },
            })  
            setIfoRegion(data.location.region)
            
        })
        .catch(err => console.error(err));
    }

    for (let i = 0; i < dayFormat.length; i++) {
        const date_num = dayFormat[i].date;

        const date_tx = new Date(date_num)
        let df1 = date_tx.toDateString()

        // console.log(date_tx);
        // let df_secs =  df1.split(" ");
        // console.log(df_secs);

        // setDayText(date_tx.getDay)
        
    }


    const variants = {
        initial: { opacity: 0 , scale:0.2, y: 0, x:80},
        visible: i => ({
            opacity:1, 
            scale:1,
            y:0,
            x:0,
            transition: {
                delay: i * 0.03,
                type: 'easeIn'
            }
        }),
        hover:{ scale: 1.06},
        tap:{scale: 0.9},
    }

    // const [fmtDate, setFmtDate] = useState(null)

    // const formatDate = (date) =>{
    //     const fm_date = new Date(date)
    //     fm_date.toDateString()

    //     console.log(fm_date)
    //     setFmtDate(fm_date)
    // }



    return ( 
        <div className="container">
            <Header setWeather={setWeather}  setArea={setArea}/>

            <MainInfo>
                {   weather &&
                    <p>{area},{ifo_region}</p>
                }
                <div>
                    {
                        weather &&
                        <div>
                            <h2>{weather.condition}</h2>
                            <label>Temp : {weather.tempC}</label><br/>
                            <label htmlFor="">Feels Like : {weather.feelsLike}</label><br/>
                            <label htmlFor="">Humidity : {weather.humitity}</label><br/>
                            <label htmlFor="">Wind Speed : {weather.windSpeed} km/h</label><br/>
                            <label htmlFor="">MAX : {weather.forecast?.max}</label><br/>
                            <label htmlFor="">MIN : {weather.forecast?.min}</label><br/>

                        </div>
                    }

                    
                    
                </div>
            </MainInfo>
            {
                weather && 
                <DayCast>
                    <TabsUnstyled defaultValue={0}>
                    <TabsListUnstyled>
                        {
                            weather.forecast?.day.map((day,i)=>{
                                let df_day = new Date(dayFormat[i].date).toDateString().slice(0,4)
                                let df_date = new Date(dayFormat[i].date).toDateString().slice(8,10)
                                return(
                                    <TabUnstyled key={i}> 
                                        { df_day + df_date }
                                        <p>{day.day?.avgtemp_c}</p>
                                    </TabUnstyled>
                                )
                            })  
                        }
                    </TabsListUnstyled>
                    {
                        weather.forecast?.day.map((day,i)=>{
                            return(
                                <TabPanelUnstyled value={i}>
                                        <div style={{display:'flex', gap:'20px',}}>
                                            {
                                                weather.forecast?.day[i].hour.map((hr,i)=>(
                                                        <motion.div
                                                                custom={i}
                                                                initial="initial"
                                                                animate="visible"
                                                                whileHover="hover"
                                                                variants={variants}
                                                        >
                                                            <label htmlFor=""> {hr.temp_c} </label>    
                                                        </motion.div>
                                                    )
                                                )
                                            }
                                        </div>
                                </TabPanelUnstyled>
                            )
                        }) 
                    }
                    
                    </TabsUnstyled>

                </DayCast>
            }
            
        </div>
     );
}
 
export default Home;