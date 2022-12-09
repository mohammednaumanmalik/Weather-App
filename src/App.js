import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./Home";
// import Navbars from "./Navbar";
import "./Descriptions.css";
// import Forecast from "./Forecast";

function App() {
  return (
    <>
      {/* <Navbars /> */}
      <Home />
    </>
  );
}

export default App;
