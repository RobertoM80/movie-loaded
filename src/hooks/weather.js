import {
  useEffect,
  useState,
  useContext,
  createContext,
  useReducer,
} from "react";
import { useSelector } from "react-redux";
import sprite from "assets/images/svgSprite.svg";
import axios from "axios";

const WeatherInfosContext = createContext();
WeatherInfosContext.displayName = "WeatherContext";

function useWeatherInfos() {
  if (useContext(WeatherInfosContext) === undefined) {
    throw new Error(
      "useWeatherInfos must be used within a WeatherInfosProvider"
    );
  }
  return useContext(WeatherInfosContext);
}

function weatherReducer(state = initializeState, action) {
  switch (action.type) {
    case "start update":
      return {
        ...state,
        error: null,
        status: "pending",
      };
    case "finish update":
      return {
        ...state,
        status: "resolved",
        temperature: action.payload.temperature,
        location: action.payload.location,
        icon: action.payload.icon,
        error: null,
      };
    case "finish update":
      return {
        ...state,
        error: action.payload,
        status: "rejected",
        temperature: "",
        location: "",
        icon: "",
      };

    default:
      return state;
  }
}

function WeatherInfosProvider(props) {
  const [display, setDisplay] = useState("");
  const [state, dispatch] = useReducer(weatherReducer, {
    status: "idle",
    error: null,
    temperature: "",
    location: "",
    icon: "",
  });

  const { temperature, location, icon, status } = state;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(storePosition);
    } else {
      dispatch({
        type: "fail update",
        payload: "Geolocation is not supported by this browser.",
      });
    }
  }, []);

  useEffect(() => {
    let CTepm = ((temperature - 32) * 0.5556).toFixed(1) || "cannot get temp";
    let City = location.split("/")[1] || "cannot get city";
    setDisplay(`${CTepm} C  -  ${City}`);
  }, [temperature, location]);

  async function storePosition({ coords: { latitude, longitude } }) {
    const baseUrl = "https://movie-loaded.herokuapp.com";
    const coords = `latitude=${latitude}&longitude=${longitude}`;
    // Only for example code don't store api keys in React.
    // Not even in env vars. Have a backend instead that do that.
    const key = "38cd89e1c279727b5a599e5804a22333";

    dispatch({ type: "start update" });

    try {
      const { data } = await axios.get(
        `${baseUrl}/api?api=weather&key=${key}&${coords}`
      );
      dispatch({
        type: "finish update",
        payload: {
          temperature: data.currently.apparentTemperature,
          icon: data.currently.icon,
          location: data.timezone,
        },
      });
    } catch (err) {
      console.error(err);
      dispatch({ type: "fail update", payload: err });
    }
  }

  const weatherIcon = `${sprite}#${icon || "clear-day"}`;
  const infos = { display, weatherIcon, status };

  return <WeatherInfosContext.Provider value={infos} {...props} />;
}

export { WeatherInfosProvider, useWeatherInfos };
