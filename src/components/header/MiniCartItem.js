import React, {Fragment} from 'react';
import {NavLink} from "react-router-dom";

/**
 * mini cart on right side of header
 * @returns {*}
 * @constructor
 */
function MiniCartItem() {

    return (
        <Fragment>
            <div className="mini-cart-item clearfix">
                <div className="mini-cart-item-image">
                    <NavLink to="/single-slider-images">
                        <img src={process.env.PUBLIC_URL + "/assets/images/shop/mini-cart/img-2.jpg"} alt=""/>
                    </NavLink>
                </div>
                <div className="mini-cart-item-des">
                    <NavLink to="/single-slider-images">Beautiful tops</NavLink>
                    <span className="mini-cart-item-quantity">Qty: 1</span>
                    <span className="mini-cart-item-price">$13.25</span>
                </div>
            </div>
        </Fragment>
    );
}

export default MiniCartItem;