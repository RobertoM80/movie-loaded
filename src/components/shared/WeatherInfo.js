import { useWeatherInfos } from "hooks/weather";

function WeatherInfo(props) {
  const { display, weatherIcon, status } = useWeatherInfos();

  return (
    <p className="weather d-flex align-item-center m-0">
      {status === "pending" || status === "idle" ? (
        "...loading"
      ) : status === "rejected" ? (
        "an error occured"
      ) : (
        <Data weatherIcon={weatherIcon} display={display} />
      )}
    </p>
  );
}

function Data({ weatherIcon, display }) {
  return (
    <>
      <svg style={{ width: "25px", height: "20px", marginRight: "5px" }}>
        <use xlinkHref={weatherIcon} />
      </svg>
      {display}
    </>
  );
}

export default WeatherInfo;
