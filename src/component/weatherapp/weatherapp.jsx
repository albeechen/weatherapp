import React, {useState} from 'react';

import {Container, 
        Weather_card,
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
import { ReactComponent as MostlyCloudyIcon } from '../../images/mostly_cloudy.svg';
import { ReactComponent as NightIcon } from '../../images/night-clear.svg';


const WeatherApp = () => {
    const tmp = new Date().toLocaleString();
    const date = new Intl.DateTimeFormat('ENG', {
        hour: 'numeric',
        minute: 'numeric',
      }).format(new Date(tmp));
    
    const dark = true;
    const [currentWeather, setCurrentWeather] = useState({
        observationTime: date,
        locationName: 'Aliso Viejo',
        description: 'Partly Cloudy',
        temperature: 300,
        windSpeed: 0.58,
        humidity: 41,
    });

    const handleClick = () => {
        fetch(
            'https://api.openweathermap.org/data/2.5/weather?q=' + currentWeather.locationName + '&appid=b3c57bf57483ed4ea200cbd71656d534'
        )
        .then((response)=> response.json())
        .then((data) => {
            setCurrentWeather({
                observationTime: date,
                locationName: data.name,
                description: data.weather[0].description,
                temperature: data.main.temp,
                windSpeed: data.wind.speed,
                humidity: data.main.humidity,
            })
        })
    };

    return (
        <Container>
            <Weather_card dark={dark}>
                <Location dark={dark}>{currentWeather.locationName}</Location>
                <Description>
                    {currentWeather.observationTime}
                    {' '}
                    {currentWeather.description}
                </Description>
                <CurrentWeather>
                    <Temperature>
                    {Math.round(currentWeather.temperature*(9/5)-459.67)}
                    <Fahrenheit>°F</Fahrenheit>
                    </Temperature>
                    {{dark} ? <NightIcon/> : <MostlyCloudyIcon/>}
                </CurrentWeather>
                <Wind>
                    <WindIcon />
                    {Math.round(currentWeather.windSpeed/0.44704)} mph
                </Wind>
                <Humidity>
                    <HumidityIcon/>
                    {currentWeather.humidity} %
                </Humidity>
                <Redo onClick={handleClick}/>
            </Weather_card>
        </Container>
    );
};


export default WeatherApp;