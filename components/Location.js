import React, { useState } from 'react';
import { WeatherCard } from './WeatherCard';

function Location({data, location, setLocation}) {

    const search = data.find(({city}) => city === location)

    if (search) {
       return (
        <WeatherCard 
            city={search.city}
            temp={search.temperature}
            forecast={search.forecast}
        />
       ) 
    } else {
        return (
        <h2>Location not found!</h2>
    )
    }
}

export default Location;

