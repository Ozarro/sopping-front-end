import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

import HeaderRight from './HeaderRight';
import HeaderLeft from './HeaderLeft';
import Navbar from './Navbar';

/**
 * demo data
 */
import data from '../../data/topbar-text.json';

/**
 * Header component
 * @param options
 * @returns {*}
 * @constructor
 */
function Header({ options }) {

    return (
        <Fragment>
            {/* Start header */}
            <header id="header" className="site-header header-style-1">
                <div className="topbar">
                    <div className="topbar-text">
                        <p>{data.content}</p>
                    </div>
                </div>
                {/* end topbar */}
                <nav className="navigation navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="open-btn" onClick={options.onMobileNavClick}>
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                            </button>
                            <Link className="mobile-only navbar-brand" to="/">
                                <img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt=""/>
                            </Link>

                        </div>

                        <HeaderLeft options={options}/>

                        <Navbar options={options}/>

                        <HeaderRight options={options} />

                    </div>
                    {/* end of container */}
                </nav>
            </header>
            {/* end of header */}
        </Fragment>
    );
}

export default Header;