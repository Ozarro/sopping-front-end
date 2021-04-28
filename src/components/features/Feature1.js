import React, {Fragment} from 'react';
import Feature1Item from "./Feature1Item";

/**
 * home feature section display 4 info box with icon
 * @param extraClass
 * @returns {*}
 * @constructor
 */
function Feature1({extraClass}) {

    return (
        <Fragment>
            {/* start feature-section */}
            <section className={"feature-section home-feature-section " + extraClass}>
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="features clearfix">
                                <Feature1Item icon="pe-7s-car" title="Free Shipping" text="Around the world"/>
                                <Feature1Item icon="pe-7s-paper-plane" title="PE-7S-ALARM" text="Customer support"/>
                                <Feature1Item icon="pe-7s-wallet" title="Money returns" text="Guarantee of money return"/>
                                <Feature1Item icon="pe-7s-rocket" title="Store search" text="Quick Store Search"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end feature-section */}
        </Fragment>
    );
}

export default Feature1;