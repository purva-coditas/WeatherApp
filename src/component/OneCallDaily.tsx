import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
// import { api } from './api';
import DayCard from './DayCard';
import { PropType, SingleDay } from './WeatherProps';

const OneCallDaily = ({ lat, lon, call_uvi }: PropType) => {
  const [Daily, setDaily] = useState([]);
  const [Current, setCurrent] = useState<SingleDay>();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  useEffect(() => {
    axios
      .get(
        `${process.env.API_URL}onecall?lat=${lat}&lon=${lon}&exclude=hourly,alerts,minutely&units=metric&APPID=${process.env.key}`
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
      <div className="weekly">
        <Slider {...settings}>
          {Daily && Daily.map((day: any) => <DayCard key={day.dt} day={day} />)}
        </Slider>
      </div>
      <div>{/* <p>Rain:{Current && Current.rain['1hr']}</p> */}</div>
    </>
  );
};

export default OneCallDaily;
