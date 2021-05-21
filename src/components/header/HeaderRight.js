import React, {Fragment, useEffect, useState} from 'react';
import './navbarRight.css'
import {Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectAllCartItems} from "../../store/order/select";
import {getUserData} from "../../store/user/select";
import {actions, thunks} from "../../store";
import {toast} from "react-toastify";



import {BACK_END_URL} from "../../api/index";
const FILE_URL = BACK_END_URL.DEFAULT_FILE_URL;

/**
 * right side of header include minicart, and buttons
 * @param options
 * @returns {*}
 * @constructor
 */
function HeaderRight({options}) {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectAllCartItems);
    const userData = useSelector(getUserData);

    const [subTotal , setSubTotal] = useState(0);

    useEffect(async () => {
        dispatch(actions.ui.setPreloadShow(true));
        const res1 = await dispatch(thunks.order.getAllCartItems());
        dispatch(actions.ui.setPreloadShow(false));
        if (res1.status  != 200 ) {
            // toast.error(res1.message);
        }
    },[]);

    useEffect( () => {
        let subTotal = 0;
        cartItems.map((item) => {
            subTotal += parseFloat(item.cartItemPrice)*item.quantity
        })
        setSubTotal(subTotal);

    }, [cartItems])

    const handleLogout = () => {
        if(userData.userId == ""){
            toast.error("You have not signed in. Sign in first")
            return;
        }
        if (localStorage.getItem("ozarro-user-access-token")) {
            localStorage.removeItem("ozarro-user-access-token");
        }
        if (localStorage.getItem("ozarro-user-refresh-token")) {
            localStorage.removeItem("ozarro-user-refresh-token");
        }
        toast.success("Logged out successfully");
        window.location.reload(false);
    };



    return (
        <Fragment>
            <div className="header-right">
                <div className="mini-cart">
                    <button className="cart-toggle-btn" onClick={options.onMiniUserClick}>
                        <i className="icon-user"/>
                    </button>
                    <div className={"mini-cart-content " + (options.miniUser ? 'mini-cart-content-toggle' : '')}>
                        <div className="mini-cart-items">
                        <div className="mini-cart-item clearfix">
                                        {/*<div className="mini-cart-item-image">*/}
                                        {/*    <img src={FILE_URL + item.image} alt=""/>*/}
                                        {/*</div>*/}
                                        <div className="mini-cart-item-des">
                                            <span className="mini-cart-item-quantity">Hy </span>
                                            {(userData) ? userData.name : ""}

                                        </div>
                                    </div>
                        </div>
                        <div className="mini-cart-action clearfix">
                            <Link className="view-cart-btn" to="/my-account">
                                My Account
                            </Link>
                            <Link className="checkout-btn" onClick={handleLogout}>
                                Logout
                            </Link>
                        </div>
                    </div>
                </div>



                <div className="mini-cart">
                    <button className="cart-toggle-btn" onClick={options.onMiniCartClick}>
                        <i className="icon-large-paper-bag"/>
                        <span className="cart-count">{cartItems.length}</span>
                    </button>
                    <div className={"mini-cart-content " + (options.miniCart ? 'mini-cart-content-toggle' : '')}>
                        <div className="mini-cart-items">
                            {
                                cartItems.map((item, index) => (
                                    <div key={index} className="mini-cart-item clearfix">
                                        <div className="mini-cart-item-image">
                                                <img src={FILE_URL + item.image} alt=""/>
                                        </div>
                                        <div className="mini-cart-item-des">
                                                {item.pName}
                                            <span className="mini-cart-item-quantity">Qty: {item.quantity}</span>
                                            <span className="mini-cart-item-price">Rs. {item.cartItemPrice}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="mini-cart-action clearfix">

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