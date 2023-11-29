import React, { useState } from 'react';
import { WeatherCard } from './WeatherCard';

function Location({data, location, setLocation}) {

    const result = data.find(({city}) => city === location)

    return (  
        <>
        <WeatherCard 
            city={result.city}
            temp={result.temperature}
            forecast={result.forecast}
        />

        </>
    );
}

export default Location;

