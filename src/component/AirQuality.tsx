import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { api } from "./api";
import { AirProps, AirPropType } from "./WeatherProps";

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
      <p>
        Air Quality:
        {AirIndex && AirIndex.list[0].main.aqi}| UV Index:
        {uvi}
      </p>
    </>
  );
};

export default AirQuality;
