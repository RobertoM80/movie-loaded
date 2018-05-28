import React, { Component } from 'react';
import MainNavLinks from './MainNavLinks';
import SearchBar from './shared/SearchBar';
import '../css/MainNav.css';

class MainNav extends Component {
    render() {
        return (
            <div className="navbar-container d-flex flex-row justify-content-between">

                <MainNavLinks />

                <SearchBar />

            </div>
        );
    }
}

export default MainNav;