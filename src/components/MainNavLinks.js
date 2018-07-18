import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainNavLinks extends Component {
    render() {
        return (
            <nav className="links-container d-flex flex-row justify-content-start align-items-center">
                {/* <p className="m-0 mx-2"><Link className="" to="/">news</Link></p> | */ }
                {/* <p className="m-0 mx-2"><Link className="" to="/latest">latest</Link></p> |
                <p className="m-0 mx-2"><Link className="" to="/genre">genre</Link></p>  |
                <p className="m-0 mx-2"><Link className="" to="/movies">movies</Link></p>  | */}
                {/* <p className="m-0 mx-2"><Link className="" to="/tv-series">tv-series</Link></p> */ }
                <p className="m-0 mx-2"><Link className="" to="/popular">popular</Link></p>
            </nav>
        );
    }
}

export default MainNavLinks;