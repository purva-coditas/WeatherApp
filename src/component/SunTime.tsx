import React from 'react';
import { SunProps } from './WeatherProps';

const SunTime = ({ rise, set }: SunProps) => {
  return (
    <>
      <h1>SunTime</h1>
      <p>
        Sunrise:
        {new Date(rise * 1000).toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </p>
      <p>
        Sunset:
        {new Date(set * 1000).toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </p>
    </>
  );
};

export default SunTime;
