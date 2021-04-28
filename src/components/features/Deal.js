import React, {Fragment} from 'react';
import Countdown from 'react-countdown';
import {Link, NavLink} from "react-router-dom";

/**
 * Deal section used Countdown component
 * @returns {*}
 * @constructor
 */
function Deal() {

    const CountdownIsCompleted = () => <span>Finish!</span>;

    const renderer = ({days, hours, minutes, seconds, completed}) => {
        if (completed) {
            // Render a completed state
            return <CountdownIsCompleted />;
        } else {
            // Render a countdown
            return (
                <div id="clock" className="box">
                    <div className="box">
                        <div>{days}</div>
                        <span>DAYS</span>
                    </div>
                    <div className="box">
                        <div>{hours}</div>
                        <span>HOURS</span>
                    </div>
                    <div className="box">
                        <div>{minutes}</div>
                        <span>MIN</span>
                    </div>
                    <div className="box">
                        <div>{seconds}</div>
                        <span>SECS</span>
                    </div>
                </div>
            )
        }
    };

    return (
        <Fragment>
            {/* start deal-section */}
            <section className="deal-section section-padding">
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-md-6">
                            <div className="sec-title">
                                <h2>Printed <br/> T-shirt</h2>
                            </div>
                            <span className="woocommerce-Price-amount amount">
                                <ins>
                                    <span className="woocommerce-Price-amount amount">
                                    <bdi><span className="woocommerce-Price-currencySymbol">$</span>79</bdi>
                                    </span>
                                </ins>
                                <del>
                                    <span className="woocommerce-Price-amount amount">
                                    <bdi><span className="woocommerce-Price-currencySymbol">$</span>129</bdi>
                                    </span>
                                </del>
                            </span>
                            <div className="count-down-clock">
                                <Countdown renderer={renderer} date={Date.now() + 999990000}/>
                            </div>
                            <Link className="theme-btn-s5" to="/shop-right-sidebar">
                                Shop now
                            </Link>
                        </div>
                    </div>
                </div>
                {/* end container-1410 */}
            </section>
            {/* end deal-section */}
        </Fragment>
    );
}

export default Deal;