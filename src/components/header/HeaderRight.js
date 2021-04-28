import React, {Fragment} from 'react';
import './navbarRight.css'
import {Link, NavLink} from "react-router-dom";


/**
 * right side of header include minicart, and buttons
 * @param options
 * @returns {*}
 * @constructor
 */
function HeaderRight({options}) {

    const miniCartData = {
        product: [
            {
                id: "",
                name: "Elegant skirt",
                qty: 1,
                price: "20.15",
                img: "/assets/images/shop/mini-cart/img-1.jpg",
                link: "/single-slider-images"
            },
            {
                id: "",
                name: "Beautiful tops",
                qty: 1,
                price: "13.25",
                img: "/assets/images/shop/mini-cart/img-2.jpg",
                link: "/single-slider-images"
            }
        ],
        subtotal: "215.14",
        symbol: "$"
    };

    return (
        <Fragment>
            <div className="header-right">
                <div className="my-account-link">
                    <Link className="" to="/my-account">
                        <i className="icon-user"/>
                    </Link>
                </div>
                <div className="wishlist-box">
                    <a href="#"><i className="icon-heart-shape-outline"/></a>
                </div>
                <div className="mini-cart">
                    <button className="cart-toggle-btn" onClick={options.onMiniCartClick}>
                        <i className="icon-large-paper-bag"/>
                        <span className="cart-count">{miniCartData.product.length}</span>
                    </button>
                    <div className={"mini-cart-content " + (options.miniCart ? 'mini-cart-content-toggle' : '')}>
                        <div className="mini-cart-items">
                            {
                                miniCartData.product.map((item, index) => (
                                    <div key={index} className="mini-cart-item clearfix">
                                        <div className="mini-cart-item-image">
                                            <NavLink to={item.link}>
                                                <img src={process.env.PUBLIC_URL + item.img} alt=""/>
                                            </NavLink>
                                        </div>
                                        <div className="mini-cart-item-des">
                                            <NavLink to={item.link}>{item.name}</NavLink>
                                            <span className="mini-cart-item-quantity">Qty: {item.qty}</span>
                                            <span className="mini-cart-item-price">{miniCartData.symbol}{item.price}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="mini-cart-action clearfix">
                            <span className="mini-checkout-price">Subtotal: {miniCartData.symbol}{miniCartData.subtotal}</span>
                            <Link className="view-cart-btn" to="/cart">
                                View Cart
                            </Link>
                            <Link className="checkout-btn" to="/checkout">
                                Checkout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default HeaderRight;