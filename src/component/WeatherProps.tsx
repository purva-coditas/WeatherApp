export interface WeatherProps {
  name: string;
  base: string;
  dt: number;
  coord: {
    lat: number;
    lon: number;
  };
  main: {
    temp: number;
    humidity: number;
  };
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  wind: {
    speed: number;
  };
  weather: [
    {
      main: string;
      icon: string;
    }
  ];
}

// export interface WeeklyProps {
//   list: [
//     {
//       dt_txt: string;
//       dt: string;
//       main: {
//         temp: number;
//       };
//       weather: [
//         {
//           icon: string;
//         }
//       ];
//     }
//   ];
// }

export interface SingleDay {
  dt: number;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: number;
  uvi: number;
  rain: {
    '1hr': number;
  };
  wind_speed: number;
  weather: [
    {
      icon: string;
      main: string;
    }
  ];
}

// export interface OneCallProps {
//   current: SingleDay;
//   daily: SingleDay[];
//   lat: number;
//   lon: number;
//   timezone: string;
// }

export interface PropType {
  lat: number;
  lon: number;
  call_uvi: (data: number) => void;
}
export interface AirProps {
  list: [
    {
      main: {
        aqi: number;
      };
    }
  ];
}

export interface AirPropType {
  lat: number;
  lon: number;
  uvi: number;
}

export interface SunProps {
  rise: number;
  set: number;
}
