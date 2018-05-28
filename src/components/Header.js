import React, { Component } from 'react';
import Infos from './shared/Infos';
import Title from './Title';
import MainNav from './MainNav';

import '../css/Header.css';

class Header extends Component {
    render() {
        return (
            <header>

                <Title />

                <Infos />

                <MainNav />

            </header>
        );
    }
}

export default Header;