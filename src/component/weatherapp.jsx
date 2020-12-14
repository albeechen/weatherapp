import React from 'react';
import {Container, 
        WeatherCard,
        Location,
        Description,
        CurrentWeather,
        Temperature,
        Fahrenheit,
        Wind,
        Humidity,
        Refresh
    } from './weatherapp.styles';  
import useWeatherAPI from './useWeatherAPI';
import { ReactComponent as WindIcon } from '../images/wind.svg';
import { ReactComponent as HumidityIcon } from '../images/humidity.svg';


const WeatherApp = () => {
    const location = "Aliso Viejo";
    const [weatherElement, fetchData] = useWeatherAPI(location);

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
                    <div>
                        <img src={weatherElement.weatherIcon}/>
                    </div> 
                </CurrentWeather>
                <Wind>
                    <WindIcon />
                    {Math.round(weatherElement.windSpeed/0.44704)} mph
                </Wind>
                <Humidity>
                    <HumidityIcon/>
                    {weatherElement.humidity} %
                </Humidity>
                <Refresh
                    onClick={fetchData}
                    isLoading={weatherElement.isLoading}
                />
            </WeatherCard>
        </Container>
    );
};


export default WeatherApp;