import React, {Fragment} from 'react';
import Feature2Item from "./Feature2Item";

/**
 * featured products collection show in home page 3 section's
 * @returns {*}
 * @constructor
 */
function Feature2() {

    return (
        <Fragment>
            {/* start featured-products-section-s2 */}
            <section className="featured-proeducts-section-s3 section-padding">
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="product-grids clearfix">
                                <Feature2Item
                                    img="/assets/images/feature-product/img-1.jpg"
                                    title="Women’s fashion"
                                    link="#"
                                    wrapClass="grid"
                                    innerClass="shop-btn"
                                />

                                <div className="grid">
                                    <Feature2Item
                                        img="/assets/images/feature-product/img-5.jpg"
                                        title="Hot skirt"
                                        link="#"
                                        wrapClass="inner-grid"
                                        innerClass="shop-btn"
                                    />
                                    <Feature2Item
                                        img="/assets/images/feature-product/img-6.jpg"
                                        title="Men T-shirt"
                                        link="#"
                                        wrapClass="inner-grid"
                                        innerClass="shop-btn"
                                    />

                                </div>
                                <Feature2Item
                                    img="/assets/images/feature-product/img-2.jpg"
                                    title="Wool sweater"
                                    link="#"
                                    wrapClass="grid"
                                    innerClass="shop-btn"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* end container-1410 */}
            </section>
            {/* end featured-products-section-s2 */}
        </Fragment>
    );
}

export default Feature2;