import React, { Component } from 'react';
import Searchbar from '../../css/Searchbar.css';

class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar-container d-flex flex-row justify-content-start">
                <p className="m-0 mr-3">search by actor, movie, character</p>
                <input className=" align-self-center" type="text" />
            </div>
        );
    }
}

export default SearchBar;