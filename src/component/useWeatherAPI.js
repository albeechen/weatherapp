import { useState, useEffect, useCallback } from 'react';
import Appid from './appkey';

function fetchCurrentWeather (location) {
    const tmp = new Date();
    const date = new Intl.DateTimeFormat('ENG', {
        hour: 'numeric',
        minute: 'numeric',
    }).format(new Date(tmp.toLocaleString()));
    
    return fetch(
            'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + Appid()
        )
        .then((response)=> response.json())
        .then((data) => {
            //console.log(data);
        return{
            observationTime: date,
            locationName: location,
            weatherIcon: "http://openweathermap.org/img/wn/" + data.weather[0].icon +"@2x.png",
            description: data.weather[0].description,
            temperature: data.main.temp,
            windSpeed: data.wind.speed,
            humidity: data.main.humidity,
            isDark: data.weather[0].icon.slice(-1) === 'n' ? true : false,
        };
    });
};

const useWeatherAPI = (city) => {
    const [weatherElement, setweatherElement] = useState({
        observationTime: "undefined",
        locationName: "--",
        description: undefined,//'Partly Cloudy',
        temperature: 300,//300,
        windSpeed: undefined,//0.58,
        humidity: undefined,//41,
        isDark: undefined, //tmp > new Date().setHours(17,0,0) ? true : false, 
        isLoading: true,
    });

    const fetchData = useCallback( () => {
        
        const fetchingData = async () => {
            const [currentWeather] = await Promise.all([
                fetchCurrentWeather(city)
            ]);

            setweatherElement({
                ...currentWeather,
                isLoading: false,
            });
        };
        
        setweatherElement((prevState) => ({
            ...prevState,
            isLoading: true,
        }));

        fetchingData();
    }, [city]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return [weatherElement, fetchData];
};

export default useWeatherAPI;