import React from "react";
import sunny from "../assets/Sunny.svg"
import rainy from "../assets/Rainy.svg"
import cloudy from "../assets/Cloudy.svg"
import partlyCloudy from "../assets/PartlyCloudy.svg"


function chooseIcon(forecast) {
  let icon;
switch(forecast) {
    case 'Sunny':
      icon = sunny;
      break;
    case 'Rainy':
      icon = rainy;
      break;
    case 'Cloudy':
      icon = cloudy;
      break;
    case 'Partly cloudy':
      icon = partlyCloudy;
      break;
    default:
      icon = sunny;
  }
  return icon
 }


function WeatherCard({ city, temp, forecast }) {


  return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" src = {chooseIcon(forecast)} alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">{city}</h3>
            <h5 className="card-text">{temp}</h5>
            <h5 className="card-text">{forecast}</h5>
        </div>
    </div>
  );
};

export {WeatherCard, chooseIcon};