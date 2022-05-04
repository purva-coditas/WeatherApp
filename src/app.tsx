import React from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import Daycard from "./component/DayCard";
import Homescreen from "./component/homescreen";

const App = () => {
  return (
    <div>
      <h1 style={{ color: "green" }}>Weather Forecast</h1>
      <Homescreen />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
