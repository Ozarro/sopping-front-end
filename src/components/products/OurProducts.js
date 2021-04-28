import React, {Fragment, useState} from 'react';
import OurProductsTabsNav from "./OurProductsTabsNav";
import OurProductsTabsContent from "./OurProductsTabsContent";
import {NavLink} from "react-router-dom";

/**
 * Our Products component
 * @param onQuickViewClick
 * @returns {*}
 * @constructor
 */
function OurProducts({onQuickViewClick}) {

    const [tabSelected, setTabSelected] = useState(1);

    const HandelTabSelectedStatus = (e, data) => {
        e.preventDefault();
        setTabSelected(data);
    };

    return (
        <Fragment>
            {/* start home-pg-prodcut-section */}
            <section className="home-pg-prodcut-section section-padding">
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="section-title">
                                <h2>Our products</h2>
                                <p>Preorder now to receive exclusive deals &amp; gifts</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-xs-12">

                            <OurProductsTabsNav tabSelected={tabSelected} onTabClick={HandelTabSelectedStatus}/>
                            <OurProductsTabsContent onQuickViewClick={onQuickViewClick} tabSelected={tabSelected}/>

                            <div className="more-products text-center">
                                <NavLink to="/shop-full-width" className="theme-btn">More products</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end container-1410 */}
            </section>
            {/* end home-pg-prodcut-section */}
        </Fragment>
    );
}

export default OurProducts;