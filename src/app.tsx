import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.scss';
import GrabData from './component/GrabData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-clock/dist/Clock.css';

const App = () => {
  return (
    <>
      {/* <h1>Weather Forecast</h1> */}
      <h1>{process.env.API_URL}</h1>
      <GrabData />
      {/* <ProgressCircle now={30} label="30" size="small" /> */}
    </>
  );
};

// ReactDOM.render(<App />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
