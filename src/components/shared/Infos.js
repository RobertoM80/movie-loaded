import { useState } from "react";
import PropTypes from "prop-types";
import WeatherInfo from "./WeatherInfo";
import { WeatherInfosProvider } from "hooks/weather";

function Infos() {
  const [today] = useState(new Date().toDateString());

  return (
    <div className="infos-container py-1 d-flex flex-row justify-content-center align-items-center">
      <p className="date align-self-center m-0">{today}</p>
      <p className="divider align-self-center m-0 mx-3">|</p>

      <WeatherInfosProvider>
        <WeatherInfo />
      </WeatherInfosProvider>
    </div>
  );
}

export default Infos;
