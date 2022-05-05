import React from "react";

const GoldenHours = () => {
  const currentDateTime = new Date();
  const timeText = currentDateTime.toLocaleTimeString();
  return (
    <div>
      <span>GoldenHours</span>
      <div className="timesummary">
        <span style={{ fontSize: "10px" }}>{timeText}</span>
      </div>
    </div>
  );
};

export default GoldenHours;
