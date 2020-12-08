import React from 'react';

import {Container, 
        Weather_card,
        Location,
        Description,
        CurrentWeather,
        Temperature,
        Fahrenheit,
        AirFlow,
        Rain,
        Redo
    } from './weatherapp.styles';  
import { ReactComponent as MostlyCloudyIcon } from '../../images/mostly_cloudy.svg';
import { ReactComponent as AirFlowIcon } from '../../images/airflow.svg';
import { ReactComponent as RainIcon } from '../../images/rain.svg';


const WeatherApp = () => {

    return (
        <Container>
            <Weather_card>
                <Location>Aliso Viejo</Location>
                <Description>Mostly Cloudy</Description>
                <CurrentWeather>
                    <Temperature>
                    17
                    <Fahrenheit>°F</Fahrenheit>
                    </Temperature>
                    <MostlyCloudyIcon />
                </CurrentWeather>
                <AirFlow>
                    <AirFlowIcon />
                    24 m/h
                </AirFlow>
                <Rain>
                    <RainIcon/>
                    Rain
                </Rain>
                <Redo/>
            </Weather_card>
        </Container>
    );
};


export default WeatherApp;