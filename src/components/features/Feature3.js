import React, {Fragment} from 'react';
import Feature2Item from "./Feature2Item";

/**
 * featured products category show in home page 3 section's
 * @returns {*}
 * @constructor
 */
function Feature3() {
    return (
        <Fragment>
            {/* start feautured-product-s4-section */}
            <section className="feautured-product-s4-section section-padding">
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="product-grids clearfix">
                                <Feature2Item
                                    img="/assets/images/feature-product/img-10.jpg"
                                    title="Skirts"
                                    link="/shop-left-sidebar"
                                    wrapClass="grid"
                                    innerClass="theme-btn-s6"
                                />
                                <Feature2Item
                                    img="/assets/images/feature-product/img-9.jpg"
                                    title="Swatters"
                                    link="/shop-left-sidebar"
                                    wrapClass="grid"
                                    innerClass="theme-btn-s6"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* end container-1410 */}
            </section>
            {/* end feautured-product-s4-section */}
        </Fragment>
    );
}

export default Feature3;