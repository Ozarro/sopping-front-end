import React, {Fragment} from 'react';
import featuredProductsData from '../../data/featured-products.json';
import {Link} from "react-router-dom";

/**
 * Featured Products Component
 * @returns {*}
 * @constructor
 */
function FeaturedProducts() {

    return (
        <Fragment>
            {/* start featured-proeducts-section-s2 */}
            <section className="featured-proeducts-section-s2 section-padding">
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="product-grids clearfix">
                                {
                                    featuredProductsData.map((item, index) => (
                                        <div key={index} className="grid">
                                            <div className="img-holder">
                                                <a href="#"><img loading="lazy" src={process.env.PUBLIC_URL + item.img} alt=""/></a>
                                            </div>
                                            <div className="details">
                                                <h3>{item.title}</h3>
                                                <Link className="shop-btn" to="/shop-full-width">
                                                    Shop Now
                                                </Link>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {/* end container-1410 */}
            </section>
            {/* end featured-proeducts-section-s2 */}
        </Fragment>
    );
}


export default FeaturedProducts;