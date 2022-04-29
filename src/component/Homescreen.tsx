import React from "react";
import Daycard from "./DayCard";

const Homescreen = () => {
  return (
    <div style={{ display: "flex", width: "900px" }}>
      <div style={{ width: "400px", height: "400px", backgroundColor: "pink" }}>
        <div style={{ height: "50%", backgroundColor: "green" }}>wind/ hum</div>
        <div
          style={{
            height: "50%",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div>
            <Daycard />
          </div>
          <div>
            <Daycard />
          </div>
          <div>
            <Daycard />
          </div>
          <div>
            <Daycard />
          </div>
        </div>
      </div>

      <div style={{ width: "400px", height: "400px", backgroundColor: "red" }}>
        {" "}
        sunrise
      </div>
    </div>
  );
};

export default Homescreen;
