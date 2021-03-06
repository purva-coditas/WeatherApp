import { SunProps } from "./WeatherProps";
import Clock from "react-clock";

const SunTime = ({ rise, set }: SunProps) => {
  return (
    <div
      style={{
        display: "flex",
        margin: "5px",
      }}
    >
      <div className="sun">
        <p style={{ marginTop: "60px" }}>Sunrise</p>
        <div className="suntime">
          <Clock
            value={new Date(rise * 1000).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
            size={60}
            renderHourMarks={false}
            renderMinuteMarks={false}
            hourHandWidth={2}
          />
          <div style={{ marginTop: "25px" }}>
            {new Date(rise * 1000).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
            <small>
              {new Date(rise * 1000).toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        </div>
      </div>

      <div className="sun">
        <p>Golden Hours</p>
        <div className="golden">
          <Clock
            value={new Date(rise * 1000).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
            size={80}
            renderHourMarks={false}
            renderMinuteMarks={false}
            hourHandWidth={2}
          />
          <div style={{ marginTop: "25px" }}>
            {new Date(rise * 1000).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
            <small>
              {new Date(set * 1000).toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        </div>
      </div>

      <div className="sun">
        <p style={{ marginTop: "60px" }}>Sunset</p>
        <div className="suntime">
          <Clock
            value={new Date(set * 1000).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
            size={60}
            renderHourMarks={false}
            renderMinuteMarks={false}
            hourHandWidth={2}
          />
          <div style={{ marginTop: "25px" }}>
            {new Date(set * 1000).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
            <small>
              {new Date(set * 1000).toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SunTime;
