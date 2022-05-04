import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { api } from './api';
import { AirProps, AirPropType } from './WeatherProps';
// import Progress from 'react-circle-progress-bar'

const AirQuality = ({ lat, lon, uvi }: AirPropType) => {
  const [AirIndex, setAirIndex] = useState<AirProps>();

  useEffect(() => {
    axios
      .get(`${api.base}air_pollution?lat=${lat}&lon=${lon}&appid=${api.key}`)
      .then((result) => {
        console.log(result.data);
        setAirIndex(result.data);
      });
  }, []);

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div>
          <p>
            Air Quality
            <div>{AirIndex && AirIndex.list[0].main.aqi}</div>
          </p>
        </div>
        <div>
          <p>
            UV Index
            <div>{uvi}</div>
          </p>
        </div>
      </div>
    </>
  );
};

export default AirQuality;
