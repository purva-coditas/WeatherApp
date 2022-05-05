import { Weekdays } from "./DateFormattor";
import React from "react";
interface DayProp {
  day: any;
}

const DayCard = ({ day }: DayProp) => {
  return (
    <div key={day.dt} className="daily">
      <span>{Math.round(day.temp.day)}&#176;C</span>
      <br />
      <img
        src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
        height={50}
        width={50}
        alt="Weather Icon"
      />
      <br />
      <span>{Weekdays[new Date(day.dt * 1000).getDay()]}</span>
    </div>
  );
};

export default DayCard;
