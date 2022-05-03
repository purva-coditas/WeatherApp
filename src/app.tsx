import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.scss';
import GrabData from './component/GrabData';

const App = () => {
  return (
    <>
      {/* <h1>Weather Forecast</h1> */}
      <GrabData />
    </>
  );
};

// ReactDOM.render(<App />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
