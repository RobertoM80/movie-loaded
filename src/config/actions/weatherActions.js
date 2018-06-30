import { FETCH_WEATHER, IS_LOADING_WEATHER } from './types';
import axios from 'axios';

export const fetchWeather = () => dispatch => {

    const storePosition = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const key = '38cd89e1c279727b5a599e5804a22333';

        dispatch({ type: IS_LOADING_WEATHER, payload: false });

        axios.get(`https://movie-loaded.herokuapp.com/api?api=weather&key=${key}&latitude=${latitude}&longitude=${longitude}`)
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
            .catch((err) => {
                console.error(err);
                dispatch({ type: IS_LOADING_WEATHER, payload: false })
            })
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