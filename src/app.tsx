import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.scss';
import GrabData from './component/GrabData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-clock/dist/Clock.css';

const App = () => {
  // console.log('foo: ', p.p); // foo: bar
  console.log('API URL: ', process.env.API_URL);
  console.log('API URL: ', process.env.key);
  return (
    <>
      <GrabData />
    </>
  );
};

// ReactDOM.render(<App />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
