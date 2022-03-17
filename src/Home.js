import { useRef, useEffect, useState } from "react";
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
        // console.log(pcDayCast.current.scrollWidth);
        
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
                conditionIcon: data.current.condition.icon,
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
            getDayWith()
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
        initial: { opacity: 0 , scale:0.9, y: 0, x:80},
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
    const pcDayCast = useRef(null)
    const pcInnerDayCast = useRef(null)
    const [dayScrollLimit, setDayScrollLimit] = useState(null)

    const getDayWith = () =>{
        // alert("document loaded")
        console.log(pcDayCast.current?.scrollWidth, pcDayCast.current?.offsetWidth);
        setDayScrollLimit(pcDayCast.current?.scrollWidth - pcDayCast.current?.offsetWidth)
    }
    
    useEffect(()=>{

    },[])
    

    return ( 
        <div className="container" >
            <Header setWeather={setWeather}  setArea={setArea}/>

            <MainInfo>
                
                <div>
                    {   weather &&
                        <h2 className="main-ifo-area"> <span> {area}</span> <span>{ifo_region}</span></h2>
                    }
                    {
                        weather &&
                        <div>
                            <h3>{weather.condition}</h3>
                            {/* <img src={weather.conditionIcon} alt="" /> */}
                            {/* <h5>{weather.conditionIcon?.slice(-7,-4)}</h5> */}
                            {/* <h5>{weather.conditionIcon?.split("/")[5]}</h5> */}
                            <div className="main-ifo">
                                <img className="main-ico" src={`/images/icons/${weather.conditionIcon?.split("/")[5]}/${weather.conditionIcon?.slice(-7,-4)}.svg`} alt="" />
                                <h4 className="wiv_temp"> {weather.tempC}</h4>
                            </div>
                            

                            <div className="w-info-values">
                                <label>
                                    <img src="images/icons/WeatherIcon - 1-3.svg" alt="" />
                                    Feels Like 
                                    <span>{weather.feelsLike}</span>
                                </label>
                                <label>
                                    <img src="images/icons/WeatherIcon - 1-18.svg" alt="" />
                                    Humidity  
                                    <span> {weather.humitity}</span>
                                </label>
                                <label>
                                    <img src="images/icons/WeatherIcon - 1-6.svg" alt="" />
                                    Wind Speed 
                                    <span> {weather.windSpeed} km/h </span>
                                </label>
                                <label>
                                    <img src="images/icons/up.png" alt="" />
                                    Max 
                                    <span> {weather.forecast?.max}</span>
                                </label>
                                <label>
                                    <img src="images/icons/down.png" alt="" />
                                    Min 
                                    <span> {weather.forecast?.min}</span>
                                </label>
                            </div>
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
                                        <p>{day.day?.condition.text}</p>
                                        {/* <img src={day.day?.condition.icon} alt="" /> */}
                                        {/* <img src={`/images/icons/${day.day?.condition.icon.slice(-11,-4)}.svg`} alt="" /> */}
                                        <img src={`/images/icons/${day.day?.condition.icon.split("/")[5]}/${day.day?.condition.icon.split("/")[6].split(".",1)}.svg`} alt="" />

                                        {/* <label htmlFor="">{day.day?.condition.icon.split("/")[5]}</label> */}
                                        {/* <label htmlFor="">{day.day?.condition.icon.split("/")[6].split(".",1)}</label> */}
                                    </TabUnstyled>
                                )
                            })  
                        }
                    </TabsListUnstyled>
                    {
                        weather.forecast?.day.map((day,i)=>{
                            return(
                                <TabPanelUnstyled key={i} value={i}>
                                    <div ref={pcDayCast} className="dc-placeholder" >
                                        
                                        <motion.div drag="x" 
                                        dragConstraints={{right:0, left: -dayScrollLimit}}
                                        
                                        className="dc-h-value"
                                        ref={pcInnerDayCast}
                                        >
                                            {
                                                weather.forecast?.day[i].hour.map((hr,i)=>(
                                                        <motion.div 
                                                                custom={i}
                                                                initial="initial"
                                                                animate="visible"
                                                                variants={variants}
                                                        >
                                                            <div className="hr-box">
                                                                <label htmlFor=""> {hr.temp_c} </label>  
                                                                <p>{hr.condition?.text}</p> 
                                                                {/* <img src={hr.condition?.icon} alt="" /> */}
                                                                <img src={`/images/icons/${hr.condition?.icon.split("/")[5]}/${hr.condition?.icon.split("/")[6].split('.')[0]}.svg`} alt="" />
                                                                {/* <label htmlFor="">{hr.condition?.icon.split("/")[5]}</label>
                                                                <label htmlFor="">{hr.condition?.icon.split("/")[6].split('.')[0]}</label> */}
                                                            </div>
                                                        </motion.div>
                                                    )
                                                )
                                            }
                                        </motion.div>
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