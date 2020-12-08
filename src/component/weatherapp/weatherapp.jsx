import React from 'react';

import {Container, 
        Weather_card,
        Location,
        Description,
        CurrentWeather,
        Temperature,
        Fahrenheit,
        Wind,
        Precipitation,
        Redo
    } from './weatherapp.styles';  
import { ReactComponent as MostlyCloudyIcon } from '../../images/mostly_cloudy.svg';
import { ReactComponent as WindIcon } from '../../images/wind.svg';
import { ReactComponent as PrecipitationIcon } from '../../images/precipitation.svg';


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
                <Wind>
                    <WindIcon />
                    11 km/h
                </Wind>
                <Precipitation>
                    <PrecipitationIcon/>
                    0 %
                </Precipitation>
                <Redo/>
            </Weather_card>
        </Container>
    );
};


export default WeatherApp;