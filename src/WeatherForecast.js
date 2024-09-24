import React from "react";
import "./WeatherForecast.css";

import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "535cacbb3f8a0df0aeb4790235b9541f";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <img
            alt="forecast_icon"
            src="https://openweathermap.org/img/wn/10d@2x.png"
          />
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
