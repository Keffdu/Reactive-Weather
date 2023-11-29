import React from 'react';
import cities from "./data.js"
import WeatherCard from './components/WeatherCard';


function App() {
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
            
        </>
    )
}

export default App;