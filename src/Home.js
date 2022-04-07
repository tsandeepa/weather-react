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
    const [icoHttps, setIcoHttps] = useState('')




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
        await fetch(`https://api.weatherapi.com/v1/forecast.json?key=110585d5a744455191d171919220803&q=${area}&days=3&aqi=no&alerts=no`)
        .then (response =>   response.json())
        .then(data => {
            console.log(data);
            // setForecast(data.forecast)
            setDayFormmat(data.forecast.forecastday)
            setWeather({
                current: data.current,
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
            // setIcoHttps(`https:${weather?.conditionIcon}`)
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
        // console.log(pcDayCast.current?.scrollWidth, pcDayCast.current?.offsetWidth);
        setDayScrollLimit(pcDayCast.current?.scrollWidth - pcDayCast.current?.offsetWidth)
    }
    
    
    

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
                            <h3 className="area-condition">{weather.condition}</h3>
                            
                            <motion.div 
                            initial={{ y:-80}}
                            animate={{ y:0}} 
                            className="main-ifo">
                                
                                {weather.current && <img className="main-ico" src={require(`./assets/icons/${weather.current?.condition.icon.split("/")[5]}/${weather.current?.condition.icon.slice(-7,-4)}.png`)} alt="" /> }
                                
                                <motion.h4  className="wiv_temp"> {weather.tempC} <span>°</span></motion.h4>
                            </motion.div>
                                


                            <motion.div 
                                initial={{opacity:0, y:-80}} 
                                animate={{opacity:1, y:0}}
                                className="w-info-values">
                                <label>
                                    <img src={require("./assets/icons/WeatherIcon - 1-3.png")} alt="" />
                                    Feels Like 
                                    <span>{`${weather.feelsLike} °`}</span>
                                </label>
                                <label>
                                    <img src={require("./assets/icons/WeatherIcon - 1-18.png")} alt="" />
                                    Humidity  
                                    <span> {`${weather.humitity}%`}</span>
                                </label>
                                <label>
                                    <img src={require("./assets/icons/WeatherIcon - 1-6.png")} alt="" />
                                    Wind Speed 
                                    <span> {weather.windSpeed} km/h </span>
                                </label>
                                <label>
                                    <img src={require("./assets/icons/up.png")} alt="" />
                                    Max 
                                    <span> {`${weather.forecast?.max} °`}</span>
                                </label>
                                <label>
                                    <img src={require("./assets/icons/down.png")} alt="" />
                                    Min 
                                    <span> {`${weather.forecast?.min} °`}</span>
                                </label>
                            </motion.div>
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
                                        <p style={{fontWeight:'600'}}>{day.day?.avgtemp_c} <span>°</span> </p>
                                        <p>{day.day?.condition.text}</p>
  
                                        <img src={require(`./assets/icons/${day.day?.condition.icon?.split("/")[5]}/${day.day?.condition.icon?.split("/")[6].split(".",1)}.png`)} alt="" />

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
                                                                key={i}
                                                        >
                                                            <div className="hr-box">
                                                                <label style={{fontWeight:'600'}}> {hr.temp_c} <span>°</span></label>  
                                                                <p>{hr.condition?.text}</p> 
                                                                
                                                                <img src={require(`./assets/icons/${hr.condition?.icon?.split("/")[5]}/${hr.condition?.icon?.split("/")[6].split(".",1)}.png`)} alt="" />
                                                                
                                                                <label htmlFor="">{hr.time?.slice(-5)+" H"}</label>
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
                    <img className="day-cast-bg" src={require("./assets/bg-top.png")} alt="" />    
                </DayCast>
            }
            
        </div>
     );
}
 
export default Home;