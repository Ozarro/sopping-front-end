import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

/**
 * CTA action display on default home page
 * @returns {*}
 * @constructor
 */
function CtaSection() {

    return (
        <Fragment>
            {/* start cta-section */}
            <section className="cta-section">
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="content-area">
                                <span>Trending</span>
                                <h3>New Fashion</h3>
                                <p>Ozarro Clothing</p>
                                    <Link className="theme-btn-s2" to="/shop-right-sidebar">
                                        Shop now
                                    </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end cta-section */}
        </Fragment>
    );
}

export default CtaSection;