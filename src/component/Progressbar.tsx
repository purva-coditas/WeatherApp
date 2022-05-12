import React from "react";
const Progressbar = () => {
  const gaugeElement = document.querySelector(".gauge");

  function setGaugeValue(gauge: any, value: number) {
    if (value < 0 || value > 1) {
      return;
    }

    gauge.querySelector(".gauge__fill").style.transform = `rotate(${
      value / 2
    }turn)`;
    gauge.querySelector(".gauge__cover").textContent = `${Math.round(
      value * 100
    )}%`;
  }

  setGaugeValue(gaugeElement, 0.6);
  return (
    <div>
      {/* <h1>{gaugeElement && console.log(gaugeElement);
      }</h1> */}
      {/* <div className="multi-graph margin">
  JavaScript
  <div className="graph" data-name="jQuery" 
       style="--percentage : 80; --fill: #0669AD ;">
  </div>
  <div className="graph" data-name="Angular" 
       style="--percentage : 60; --fill: #E62A39 ;">
  </div>
  <div className="graph" data-name="React" 

       style={{"--percentage : 30; --fill: #FEDA3E ;"}}>
  </div> */}
      {/* <div id="gaugeId" className="gauge">
        <h1>here</h1>
        <div id="gauge__bodyId" className="gauge__body">
          <div className="gauge__fill"></div>
          <div className="gauge__cover"></div>
        </div>
      </div> */}
      <h1>here</h1>
    </div>
  );
};

export default Progressbar;
