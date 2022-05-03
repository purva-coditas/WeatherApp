import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import AirQuality from './AirQuality';
import { api } from './api';
import { PropType, SingleDay } from './WeatherProps';

const OneCallDaily = ({ lat, lon, call_uvi }: PropType) => {
  const [Daily, setDaily] = useState([]);
  const [Current, setCurrent] = useState<SingleDay>();
  const Weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  useEffect(() => {
    axios
      .get(
        `${api.base}onecall?lat=${lat}&lon=${lon}&exclude=hourly,alerts,minutely&units=metric&APPID=${api.key}`
      )
      .then((result) => {
        console.log(result.data);
        setDaily(result.data.daily);
        setCurrent(result.data.current);
      });
  }, []);

  Current && call_uvi(Current.uvi);

  return (
    <>
      <div style={{ display: 'flex' }}>
        {Daily &&
          Daily.map((day: any) => (
            <div
              key={day.dt}
              style={{
                width: '100px',
                height: '100px',
                border: '1px solid black',
                margin: '10px',
                padding: '10px',
              }}
            >
              <span style={{ margin: 'none' }}>
                {Math.round(day.temp.day)}&#176;C
              </span>
              <br />
              <img
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                alt="Weather Icon"
              />
              <br />
              <span>{Weekdays[new Date(day.dt * 1000).getDay()]}</span>
            </div>
          ))}
      </div>
      <div>
        {/* <p>Rain:{Current && Current.rain['1hr']}</p> */}
        {/* {Current && <AirQuality lat={lat} lon={lon} uvi={Current.uvi} />} */}
      </div>
    </>
  );
};

export default OneCallDaily;
