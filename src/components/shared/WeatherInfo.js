import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchWeather } from '../../config/actions/weatherActions';
import clearDay from '../../assets/images/clearDay.svg';
import clearNight from '../../assets/images/clearNight.svg';
import cloudy from '../../assets/images/cloudy.svg';
import fog from '../../assets/images/fog.svg';
import partlyCloudyDay from '../../assets/images/partlyCloudyDay.svg';
import partlyCloudyNight from '../../assets/images/partlyCloudyNight.svg';
import rain from '../../assets/images/rain.svg';
import sleet from '../../assets/images/sleet.svg';
import snow from '../../assets/images/snow.svg';
import wind from '../../assets/images/wind.svg';
import celsius from '../../assets/images/celsius.svg';
import '../../css/weatherInfo.css';

class WeatherInfo extends Component {

    componentDidMount() {
        this.props.fetchWeather();
    }

    handleWeatherData() {
        if (this.props.temperature) {
            console.log(this.props.temperature);

            const CTepm = ((this.props.temperature - 32) * .5556).toFixed(1);
            const City = this.props.location.split('/')[1];
            return `${CTepm} C  -  ${City}`;
        }
    }

    handleWeatherIcon() {
        const currentIcon = this.props.icon;
        switch (currentIcon) {
            case 'clear-day':
                return clearDay;
            case 'clear-night':
                return clearNight;
            case 'cloudy':
                return cloudy;
            case 'fog':
                return fog;
            case 'partly-cloudy-day':
                return partlyCloudyDay;
            case 'partly-cloudy-night':
                return partlyCloudyNight;
            case 'rain':
                return rain;
            case 'sleet':
                return sleet;
            case 'snow':
                return snow;
            case 'wind':
                return wind;
            default:
                return partlyCloudyDay;
        }
    }

    render() {
        return (
            <p className="weather align-self-center m-0">
                <img
                    className="weather-icon"
                    src={ this.handleWeatherIcon() }
                    alt={ this.props.icon }
                /> { this.handleWeatherData() }
            </p>
        );
    }
}

const mapStateToProp = state => {
    return {
        temperature: state.weather.temperature,
        location: state.weather.location,
        icon: state.weather.icon
    }
}

export default connect(mapStateToProp, { fetchWeather })(WeatherInfo);