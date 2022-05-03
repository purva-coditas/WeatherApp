import axios from 'axios';
import React, { useState } from 'react';
import AirQuality from './AirQuality';
import { api } from './api';
import OneCallDaily from './OneCallDaily';
import SunTime from './SunTime';
import { WeatherProps } from './WeatherProps';

const GrabData: React.FC = () => {
  const [query, setQuery] = useState('');
  const [uvi, setUvi] = useState(0);
  const [weather, setWeather] = useState<WeatherProps>();

  const Weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const formatOrdinals = (n: number) => {
    var pr = new Intl.PluralRules('en-US', { type: 'ordinal' });

    const suffixes = new Map([
      ['one', 'st'],
      ['two', 'nd'],
      ['few', 'rd'],
      ['other', 'th'],
    ]);
    const rule = pr.select(n);
    const suffix = suffixes.get(rule);
    return `${n}${suffix}`;
  };

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
    <div
      style={{
        height: '650px',
        width: '1400px',
        display: 'flex',
      }}
    >
      <div
        style={{
          width: '60%',
          height: '570px',
          backgroundColor: 'pink',
          padding: '40px',
        }}
      >
        <div>
          {weather && (
            <div style={{ textAlign: 'left' }}>
              <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                alt="Weather Icon"
                height={80}
                width={130}
              />
              <p style={{ fontSize: '200px', margin: '0' }}>
                {Math.round(weather.main.temp)}
                <sup
                  style={{
                    fontSize: '50px',
                    position: 'absolute',
                    top: '170px',
                  }}
                >
                  &#176;C
                </sup>
              </p>
              <p>
                {formatOrdinals(new Date(weather.dt * 1000).getDate())}{' '}
                {new Date(weather.dt * 1000).toLocaleDateString('en-GB', {
                  month: 'short',
                  year: '2-digit',
                })}
              </p>
              <p>
                {Weekdays[new Date(weather.dt * 1000).getDay()]} |
                {new Date(weather.dt * 1000).toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
              <span>Wind: {weather.wind.speed}km/h</span> |
              <span>Humidity: {weather.main.humidity}%</span> |
              <span>{weather.weather[0].main}</span>
            </div>
          )}

          <>
            {weather && (
              <OneCallDaily
                lat={coord.lat}
                lon={coord.lon}
                call_uvi={call_uvi}
              />
            )}
          </>
        </div>
      </div>
      <div
        style={{
          width: '40%',
          backgroundColor: 'purple',
          height: '570px',
          padding: '40px',
        }}
      >
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
