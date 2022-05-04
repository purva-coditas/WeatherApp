import axios from 'axios';
import React, { useState } from 'react';
import AirQuality from './AirQuality';
import { api } from './api';
import { formatOrdinals, WeekdaysFull } from './DateFormattor';
import OneCallDaily from './OneCallDaily';
import SunTime from './SunTime';
import { WeatherProps } from './WeatherProps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationArrow,
  faDroplet,
  faCloudRain,
} from '@fortawesome/free-solid-svg-icons';

const GrabData: React.FC = () => {
  const [query, setQuery] = useState('');
  const [uvi, setUvi] = useState(0);
  const [weather, setWeather] = useState<WeatherProps>();

  let rise = weather && weather.sys.sunrise;
  let set = weather && weather.sys.sunset;
  let coord = weather && weather.coord;

  const getData = (cityName: string) => {
    axios
      .get(`${api.base}weather?q=${cityName}&units=metric&APPID=${api.key}`)
      .then((result) => {
        setQuery('');
        setWeather(result.data);
        console.log(result);
      });
  };

  const handleSearch = () => {
    getData(query);
  };

  function call_uvi(data: number) {
    setUvi(data);
  }

  return (
    <div className="main-div">
      <div className="left-side">
        {weather && (
          <div>
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
              alt="Weather Icon"
              height={80}
              width={130}
            />
            <p className="temp">
              {Math.round(weather.main.temp)}
              <sup className="celcius">&#176;C</sup>
            </p>
            <p className="current-date">
              {formatOrdinals(new Date(weather.dt * 1000).getDate())}{' '}
              {new Date(weather.dt * 1000).toLocaleDateString('en-GB', {
                month: 'short',
              })}{' '}
              &apos;
              {new Date(weather.dt * 1000).toLocaleDateString('en-GB', {
                year: '2-digit',
              })}
            </p>
            <p className="day-time">
              <span className="day">
                {WeekdaysFull[new Date(weather.dt * 1000).getDay()]}
              </span>

              <span className="time">
                {new Date(weather.dt * 1000).toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </p>
            <p className="other-data">
              <span className="wind">
                <FontAwesomeIcon
                  icon={faLocationArrow}
                  transform={{ rotate: 40 }}
                  size="lg"
                />
                &nbsp; &nbsp; Wind &nbsp;&nbsp; {weather.wind.speed}&nbsp;km/h
              </span>
              <span className="humidity">
                <FontAwesomeIcon icon={faDroplet} size="lg" />
                &nbsp; &nbsp; Hum &nbsp;&nbsp;{weather.main.humidity}&nbsp;%
              </span>
              <span className="weather">
                <FontAwesomeIcon icon={faCloudRain} size="lg" />
                &nbsp; &nbsp; Rain &nbsp;&nbsp;
                {weather.weather[0].main}&nbsp;%
              </span>
            </p>
          </div>
        )}

        <>
          {weather && (
            <OneCallDaily lat={coord.lat} lon={coord.lon} call_uvi={call_uvi} />
          )}
        </>
      </div>
      <div className="right-side">
        <div>
          <input
            type="text"
            placeholder="Search.."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        {weather && (
          <h2>
            {weather.name},{weather.sys.country}
          </h2>
        )}
        <div>{weather && <SunTime rise={rise} set={set} />}</div>
        <div>
          {weather && <AirQuality lat={coord.lat} lon={coord.lon} uvi={uvi} />}
        </div>
      </div>
    </div>
  );
};

export default GrabData;
