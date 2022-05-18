import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.scss';
import GrabData from './component/GrabData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-clock/dist/Clock.css';
import Progressbar from './component/Progressbar';

const App = () => {
  return (
    <>
      {/* <h1>Weather Forecast</h1> */}
      <GrabData />
      <Progressbar />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
