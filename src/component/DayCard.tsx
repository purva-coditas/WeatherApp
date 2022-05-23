import { Weekdays } from "./DateFormattor";
import React from "react";
interface DayProp {
  day: any;
  toggled: boolean;
}

const DayCard = ({ day, toggled }: DayProp) => {
  return (
    <div key={day.dt} className="daily">
      {toggled && <span>{Math.round(day.temp.day)} &#176;C</span>}
      {!toggled && (
        <span>
          {Math.round(day.temp.day * 1.8 + 32)}
          &#176;F
        </span>
      )}
      &nbsp;
      <br />
      <img
        src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
        height={50}
        width={50}
        alt="Weather Icon"
      />
      &nbsp;
      <span>{Weekdays[new Date(day.dt * 1000).getDay()]}</span>
    </div>
  );
};

export default DayCard;
