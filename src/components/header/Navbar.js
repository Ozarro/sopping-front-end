import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import Logo from "./Logo";
import './navBar.css';

/**
 * nav bar component
 * @param options
 * @returns {*}
 * @constructor
 */
function Navbar({options}) {

    return (
        <Fragment>
            <div id="navbar" className={"navbar-collapse collapse navigation-holder " + (options.mobileNav ? 'slideInn' : '')}>
                <button onClick={options.onMobileNavClick} className="close-navbar"><i className="ti-close"/></button>
                <ul className="nav navbar-nav">
                    <li className="menu-item-has-children">
                        <NavLink to="/">Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/shop-right-sidebar" activeClassName="current-menu-item">Shop</NavLink>
                    </li>

                    <Logo/>
                    <li><NavLink to="/about" activeClassName="current-menu-item">About</NavLink></li>
                    <li>
                        <NavLink to="/contact" activeClassName="current-menu-item">Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* end of nav-collapse */}
        </Fragment>
    );
}

export default Navbar;