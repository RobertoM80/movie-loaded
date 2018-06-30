import React, { Component } from 'react';
import MainNavLinks from './MainNavLinks';
import SearchBar from './shared/SearchBar';
import '../css/MainNav.css';

class MainNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div className="navbar-container py-1 d-flex flex-row justify-content-between">

                <MainNavLinks />

                {/* <SearchBar /> */ }


            </div>

        );
    }
}

export default MainNav;