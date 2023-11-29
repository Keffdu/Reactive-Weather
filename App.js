import React, { useState } from 'react';
import cities from "./data.js"
import { chooseIcon, WeatherCard} from './components/WeatherCard';
import Location from './components/Location.js'

function App() {

    const [location, setLocation] = useState('Seoul')

    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <div className = "app">
                {cities.map((city, index) => (
                    <WeatherCard 
                        key={index}
                        city={city.city}
                        temp={city.temperature}
                        forecast={city.forecast}
                    />
                ))}
            </div>
            <div className='app'>
                <Location 
                    data={cities}
                    location={location}
                    setLocation={setLocation}
                />
            </div>
        </>
    )
}

export default App;