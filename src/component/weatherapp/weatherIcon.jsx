import React from 'react';
import { ReactComponent as WindIcon } from '../../images/wind.svg';
import './weatherIcon.styles';

const WeatherIcon = ({icon}) => {
    const source = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
    
    return (
        
        <div className='IconContainer'>
            <img src={source}/>
        </div>
    );
};

export default WeatherIcon;