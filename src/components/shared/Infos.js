import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WeatherInfo from './WeatherInfo';

class Infos extends Component {
    constructor() {
        super()
        this.state = {
            today: new Date().toDateString()
        }
    }

    render() {
        return (
            <div className="infos-container py-1 d-flex flex-row justify-content-center align-items-center">
                <p className="date align-self-center m-0">{ this.state.today }</p>
                <p className="divider align-self-center m-0 mx-3">|</p>
                <WeatherInfo />
            </div>
        );
    }
}

export default Infos;