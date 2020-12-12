import React, { useState, useEffect, useCallback} from 'react';
import WeatherIcon from './weatherIcon';
import {Container, 
        WeatherCard,
        Location,
        Description,
        CurrentWeather,
        Temperature,
        Fahrenheit,
        Wind,
        Humidity,
        Redo
    } from './weatherapp.styles';  
import { ReactComponent as WindIcon } from '../../images/wind.svg';
import { ReactComponent as HumidityIcon } from '../../images/humidity.svg';



const WeatherApp = () => {
    const tmp = new Date();
    const date = new Intl.DateTimeFormat('ENG', {
        hour: 'numeric',
        minute: 'numeric',
      }).format(new Date(tmp.toLocaleString()));
    
    const [weatherElement, setweatherElement] = useState({
        observationTime: date,
        locationName: 'Aliso Viejo',
        description: 'Partly Cloudy',
        temperature: 300,
        windSpeed: 0.58,
        humidity: 41,
        isDark: false,
    });

   /* const fetchData = useCallback( () => {
        
        const fetchingData = async () => {
            const [currentWeather] = await Promise.all([
                fetchCurrentWeather()
            ]);

            setweatherElement({
                ...currentWeather
            });
        };
        
        fetchingData()
    }, []);
    */
    
    useEffect(() => {
        fetchCurrentWeather();
    }, []);
    
    /*const handleClick = () => {
        fetchCurrentWeather();
    };*/

    const fetchCurrentWeather = () => {
        fetch(
            'https://api.openweathermap.org/data/2.5/weather?q=' + weatherElement.locationName + '&appid=b3c57bf57483ed4ea200cbd71656d534'
        )
        .then((response)=> response.json())
        .then((data) => {
            console.log(data);
            setweatherElement({
                observationTime: date,
                locationName: data.name,
                weatherIcon: data.weather[0].icon,
                description: data.weather[0].description,
                temperature: data.main.temp,
                windSpeed: data.wind.speed,
                humidity: data.main.humidity,
                isDark: Date.parse(tmp)/1000>data.sys.sunset || Date.parse(tmp)/1000<data.sys.sunrise? true:false
            })
        })
    };

    

    return (
        <Container>
            <WeatherCard dark={weatherElement.isDark}>
                <Location dark={weatherElement.isDark}>{weatherElement.locationName}</Location>
                <Description>
                    as of {weatherElement.observationTime}
                    {' '}
                    {weatherElement.description}
                </Description>
                <CurrentWeather>
                    <Temperature>
                    {Math.round(weatherElement.temperature*(9/5)-459.67)}
                    <Fahrenheit>°F</Fahrenheit>
                    </Temperature>
                    <WeatherIcon icon={weatherElement.weatherIcon}/>
                </CurrentWeather>
                <Wind>
                    <WindIcon />
                    {Math.round(weatherElement.windSpeed/0.44704)} mph
                </Wind>
                <Humidity>
                    <HumidityIcon/>
                    {weatherElement.humidity} %
                </Humidity>
                <Redo onClick={fetchCurrentWeather}/>
            </WeatherCard>
        </Container>
    );
};


export default WeatherApp;