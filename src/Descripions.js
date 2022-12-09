import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { ImArrowDown2 } from "react-icons/im";

const Descripions = (props) => {
  return (
    <>
      <div className="section section__descriptions">
        <div className="card" style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
          <div className="description__card-icon">
            <small className="small-data">max</small>
          </div>
          <h2 className="h2">{Number(props.temp_max).toFixed(0)} &deg;C</h2>
        </div>
        <div className="card" style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
          <div className="description__card-icon">
            <small className="small-data">min</small>
          </div>
          <h2 className="h2">{Number(props.temp_min).toFixed(0)} &deg;C</h2>
        </div>
        <div className="card" style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
          <div className="description__card-icon">
            <small className="small-data">feels like</small>
          </div>

          <h2 className="h2">{Number(props.feels_like).toFixed(0)} &deg;C</h2>
        </div>
        <div className="card" style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
          <div className="description__card-icon">
            <small className="small-data">wind speed</small>
          </div>
          <h2 className="h2">{props.speed} m/s</h2>
        </div>
        <div className="card" style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
          <div className="description__card-icon">
            <small className="small-data">Humidity</small>
          </div>
          <h2 className="h2">{props.humidity} %</h2>
        </div>
        <div className="card" style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
          <div className="description__card-icon">
            <small className="small-data">pressure</small>
          </div>
          <h2 className="h2">{props.pressure} hPa</h2>
        </div>
      </div>
    </>
  );
};

export default Descripions;
