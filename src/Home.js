import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Grid, Col, Row } from "react-bootstrap";
import { WiSunset, WiDaySunnyOvercast, WiSunrise } from "react-icons/wi";
import Container from "react-bootstrap/Container";
// import weather from "./image/weather.jpg";
import Descripions from "./Descripions";
import moment from "moment";
// import { getWeatherDataForLocation } from "../api";

const Home = ({ datas }) => {
  const [city, setCity] = useState("");
  const [data, setData] = useState({
    description: "",
    temp: "",
    temp_max: "",
    temp_min: "",
    humidity: "",
    sunrise: "",
    sunset: "",
    country: "",
    icon: "",
    speed: "",
    feels_like: "",
    lat: "",
    lon: "",
    timezone: "",
    dt: "",
  });

  const handleClick = (latitude, longitude) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&lat=${latitude}&lon=${longitude}&units=metric&appid=36e52581ea397ab58953ea3e14563aa7`
      )
      .then((response) => {
        var datas = setData({
          description: response.data.weather[0].description,
          temp: response.data.main.temp,
          temp_max: response.data.main.temp_max,
          temp_min: response.data.main.temp_min,
          humidity: response.data.main.humidity,
          sunrise: response.data.sys.sunrise,
          sunset: response.data.sys.sunset,
          country: response.data.sys.country,
          speed: response.data.wind.speed.toFixed(0),
          visibility: response.data.visibility,
          name: response.data.name,

          icon: response.data.weather[0].icon,
          feels_like: response.data.main.feels_like,
          lat: response.data.coord.lat,
          lon: response.data.coord.lon,
          timezone: response.data.timezone,
          dt: response.data.dt,
          pressure: response.data.main.pressure,
        });
      });
  };
  const [forecast2, setForecast2] = useState();
  const [forecast, setForecast] = useState([{}]);

  const handleClick2 = () => {
    var apiKey = "36e52581ea397ab58953ea3e14563aa7";

    var urlcast = `https://api.openweathermap.org/data/2.5/forecast?q=${forecast2}&lat=44.34&lon=10.99&units=metric&appid=${apiKey}`;

    fetch(urlcast)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setForecast(result);
      });
  };

  const x = moment
    .utc(data.sunrise, "X")
    .add(data.timezone, "seconds")
    .format("hh:mm a");
  const y = moment
    .utc(data.sunset, "X")
    .add(data.timezone, "seconds")
    .format("hh:mm a");

  const Z = moment
    .utc(data.dt, "X")
    .add(data.timezone, "seconds")
    .format("hh:mm a");
  const Z1 = moment
    .utc(data.dt, "X")
    .add(data.timezone, "seconds")
    .format("MMM D, Y");
  function userLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("latitude", position.coords, "longitude", position.coords);
    });
  }

  useEffect(() => {
    userLocation();
  });

  let _break = false;

  const breaker = () => {
    _break = true;
  };

  return (
    <>
      <div className="app">
        <div className="overlay">
          <div className="container">
            <div className="section section__inputs">
              <input
                type="text"
                name="city"
                placeholder="Enetr the city......"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                  setForecast2(e.target.value);
                }}
                required
              />
              <button
                onClick={() => {
                  handleClick();
                  handleClick2();
                }}
              >
                {" "}
                search
              </button>
            </div>
            <div className="section section__temperature">
              <div className="icon">
                <p className="data_name">
                  Weather In,
                  <br /> {data.name}, {data.country} <br />
                </p>
                <small>
                  {/* {moment(data.dt * 1000).format("D MMM, Y")} <br />
                  {moment(data.dt * 1000 + data.timezone * 1000).format(
                    "hh:mm a"
                  )} */}
                  <br />
                  <p>{Z1}</p>
                  <p>{Z}</p>
                </small>
                <br />
                <br />
                <img
                  src={`http://openweathermap.org/img/w/${data.icon}.png`}
                  alt=""
                  className="icon-api"
                />
                <p className="data_description">{data.description}</p>
              </div>
              <div className="temperature">
                <h1 className="data_temp">
                  {Number(data.temp).toFixed(0)} &deg;C
                </h1>{" "}
                <p className="rise_set">
                  sunrise - {x} <br /> sunset - {y} <br />
                </p>
              </div>
            </div>
            <Descripions
              temp_max={data.temp_max}
              temp_min={data.temp_min}
              humidity={data.humidity}
              speed={data.speed}
              feels_like={data.feels_like}
              pressure={data.pressure}
              value={userLocation()}
            />

            {/* {forecast.cnt}
            {forecast.map((item, key) => {
              return <h1>{item}</h1>;
            })}
          *
            {forecast.list?.length > 0 ? (
              forecast.list
                ?.slice(0, 5)
                .map((user, index) => (
                  <div key={index}>Nome: {user.country}</div>
                ))
            ) : (
              <div>No users </div>
            )}*/}
            <div className="section section__temperature">
              <div className="section section__forecast">
                {forecast.list?.map((obj, idx) => {
                  if (idx === 0) {
                    return breaker();
                  }
                  if (idx === 1) {
                    return breaker();
                  }
                  if (idx === 2) {
                    return breaker();
                  }
                  if (idx === 3) {
                    return breaker();
                  }
                  if (idx === 4) {
                    return breaker();
                  }
                  if (idx === 5) {
                    return breaker();
                  }
                  if (idx === 6) {
                    return breaker();
                  }
                  if (idx === 7) {
                    return breaker();
                  }
                  if (idx === 9) {
                    return breaker();
                  }
                  if (idx === 10) {
                    return breaker();
                  }
                  if (idx === 11) {
                    return breaker();
                  }
                  if (idx === 12) {
                    return breaker();
                  }
                  if (idx === 13) {
                    return breaker();
                  }
                  if (idx === 14) {
                    return breaker();
                  }
                  if (idx === 15) {
                    return breaker();
                  }
                  if (idx === 17) {
                    return breaker();
                  }
                  if (idx === 18) {
                    return breaker();
                  }
                  if (idx === 19) {
                    return breaker();
                  }
                  if (idx === 20) {
                    return breaker();
                  }
                  if (idx === 21) {
                    return breaker();
                  }
                  if (idx === 22) {
                    return breaker();
                  }
                  if (idx === 23) {
                    return breaker();
                  }
                  if (idx === 25) {
                    return breaker();
                  }
                  if (idx === 26) {
                    return breaker();
                  }
                  if (idx === 27) {
                    return breaker();
                  }
                  if (idx === 28) {
                    return breaker();
                  }
                  if (idx === 29) {
                    return breaker();
                  }
                  if (idx === 30) {
                    return breaker();
                  }
                  if (idx === 31) {
                    return breaker();
                  }
                  if (idx === 33) {
                    return breaker();
                  }
                  if (idx === 34) {
                    return breaker();
                  }
                  if (idx === 35) {
                    return breaker();
                  }
                  if (idx === 36) {
                    return breaker();
                  }
                  if (idx === 37) {
                    return breaker();
                  }
                  if (idx === 38) {
                    return breaker();
                  }

                  return (
                    <div key={idx}>
                      <div className="forecast_cards">
                        <p className="forecast_dates">
                          {moment(new Date(obj.dt_txt)).format("ddd")}
                        </p>
                        <p className="forecast_temp">
                          {Number(obj.main.temp).toFixed(0)} &deg;C
                        </p>
                        <small className="forecast_max">
                          max: {Number(obj.main.temp_max).toFixed(0)} &deg;c
                        </small>{" "}
                        <br />
                        <small className="forecast_min">
                          {" "}
                          min: {Number(obj.main.temp_min).toFixed(0)} &deg;c
                        </small>
                        <br />
                        <img
                          src={`http://openweathermap.org/img/w/${obj.weather?.[0].icon}.png`}
                          alt=""
                          className="icon-api1"
                        />{" "}
                        <br />
                        <>
                          <small className="forecast_descriptions">
                            {obj.weather[0].description}
                          </small>
                        </>
                      </div>
                    </div>
                  );
                })}
                {/*<div key="">
                  <div
                    className="card"
                    style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
                  >
                    {/*<p>{results} </p>
                  </div>
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
