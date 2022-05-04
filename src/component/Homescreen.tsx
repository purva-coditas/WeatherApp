import React from "react";
import Daycard from "./DayCard";
// import cloud from "../../public/assests/Vector.png";
// import locationOcon from "../../public/assests/";
import SearchIcon from "@mui/icons-material/Search";
import SunriseCard from "./Sunrise";
import GoldenHours from "./GoldenHours";
import Sunset from "./Sunset";

const Homescreen = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "900px",
        background: "linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)",
      }}
    >
      <div style={{ width: "400px", height: "400px" }}>
        <div className="letterheads" style={{ height: "50%" }}>
          <span
            className="letterheads"
            style={{ fontSize: "100px", fontWeight: "40px" }}
          >
            27
          </span>
          <br />
          <span>17th Jun'21</span>
          <br />
          <span className="letterheads">thrusday</span>
          <span>2:45am</span>
        </div>
        <div
          style={{
            height: "50%",
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
            ""
          </div>
          <div>
            <Daycard />
          </div>
        </div>
      </div>

      <div style={{ width: "400px", height: "400px" }}>
        sunrise
        <div style={{ marginLeft: "20px" }}>
          <img src="" />
          <input
            style={{ opacity: "90%", marginLeft: "30px" }}
            type="text"
            placeholder="Search"
          />
          <SearchIcon />
        </div>
        <div
          style={{
            marginTop: "20px",
            marginLeft: "40px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <span style={{ marginTop: "20px" }}>
            <SunriseCard />
          </span>
          <span>
            <GoldenHours />
          </span>
          <span style={{ marginTop: "20px" }}>
            <Sunset />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Homescreen;
