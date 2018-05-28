import { FETCH_WEATHER, IS_LOADING_WEATHER } from './types';
import axios from 'axios';

export const fetchWeather = () => dispatch => {

    const storePosition = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        dispatch({ type: IS_LOADING_WEATHER, payload: true });

        axios.get(`https://api.darksky.net/forecast/38cd89e1c279727b5a599e5804a22333/${latitude},${longitude}`)
            .then(result => result)
            .then(weather => dispatch({
                type: FETCH_WEATHER,
                payload: {
                    temperature: weather.data.currently.apparentTemperature,
                    icon: weather.data.currently.icon,
                    location: weather.data.timezone
                }
            }))
            .then(() => dispatch({ type: IS_LOADING_WEATHER, payload: false }))
    };

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(storePosition);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    };

    getLocation();

};