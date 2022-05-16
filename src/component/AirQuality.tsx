import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
// import { api } from './api';
import { AirProps, AirPropType } from './WeatherProps';
// import Progress from 'react-circle-progress-bar'

const AirQuality = ({ lat, lon, uvi }: AirPropType) => {
  const [AirIndex, setAirIndex] = useState<AirProps>();

  function airQualityIndex(index: number) {
    let condition = '';
    switch (index) {
      case 1:
        condition = 'Good';
        break;
      case 2:
        condition = 'Fair';
        break;
      case 3:
        condition = 'Moderate';
        break;
      case 4:
        condition = 'Poor';
        break;
      case 5:
        condition = 'Very Poor';
        break;
    }
    return condition;
  }

  function uvIndex(index: number) {
    let condition = '';
    switch (true) {
      case index <= 2:
        condition = 'Low';
        break;
      case index > 2 && index < 6:
        condition = 'Moderate';
        break;
      case index > 5 && index < 8:
        condition = 'High';
        break;
      case index > 7 && index < 11:
        condition = 'Very High';
        break;
      case index > 11:
        condition = 'Extreme';
        break;
    }
    return condition;
  }

  useEffect(() => {
    axios
      .get(
        `${process.env.API_URL}air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.key}`
      )
      .then((result) => {
        console.log(result.data);
        setAirIndex(result.data);
      });
  }, []);

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div className="air">
          <p>Air Quality</p>
          <div>{AirIndex && AirIndex.list[0].main.aqi}/5</div>
          <div>{airQualityIndex(AirIndex && AirIndex.list[0].main.aqi)}</div>
        </div>
        <div className="uvindex">
          <p>UV Index</p>
          <div>{uvi}/15</div>
          <div>{uvIndex(uvi)}</div>
        </div>
      </div>
    </>
  );
};

export default AirQuality;
