import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class NavBar extends Component {
    state = {};

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand m-2" to="">
                    Al Quran
                </NavLink>
                <div>
                    <ul className="navbar-nav">
                        <NavLink className="nav-item nav-link" to="/">
                            Ayahs
                        </NavLink>
                        <NavLink className="nav-item nav-link" to="/">
                            Surahs
                        </NavLink>
                        <NavLink className="nav-item nav-link" to="/">
                            Juz
                        </NavLink>
                    </ul>
                </div>
            </nav>

        );
    }
}

export default NavBar;