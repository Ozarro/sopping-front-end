import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import Footer from '../../components/global/Footer';
import Instagram from '../../components/global/Instagram';
import Header from '../../components/header/Header';
import './notFound.css';

/**
 * 404 page (Not Found)
 * @param options
 * @returns {*}
 * @constructor
 */
function NotFound({ options }) {

    return (
        <Fragment>
            <Header options={options} />

            {/* start error-404-section */}
            <section className="error-404-pg error-404-section section-padding">
                <div className="container-1410">
                    <div className="error-404-area">
                        <h2>404</h2>
                        <div className="error-message">
                            <h3>Oops! Page Not Found!</h3>
                            <p>We’re sorry but we can’t seem to find the page you requested. This might be because you
                                have
                                typed the web address incorrectly.</p>
                            <NavLink to="/" className="theme-btn">Back to home</NavLink>
                        </div>
                    </div>
                </div>
            </section>
            {/* end error-404-section */}

            <Instagram/>
            <Footer/>

        </Fragment>
    );
}

export default NotFound;