 import React, {Fragment , useState, useEffect} from 'react';

import Footer from '../../components/global/Footer';
import Instagram from '../../components/global/Instagram';
import PageTitle from '../../components/global/PageTitle';
import Header from '../../components/header/Header';
import CartItem from "../../components/cart/CartItem";
import Coupon from "../../components/cart/Coupon";
import CalculatedShipping from "../../components/cart/CalculatedShipping";

import {useDispatch, useSelector} from "react-redux";
import {selectAllCartItems, selectZoneArray, selectZoneCities} from "../../store/order/select";
import {thunks, actions} from "../../store";
import {toast} from "react-toastify";
import {BACK_END_URL} from "../../api/index";
import {Link} from "react-router-dom";
const FILE_URL = BACK_END_URL.DEFAULT_FILE_URL;

import './cart.css';

/**
 * Cart page
 * @param options
 * @returns {*}
 * @constructor
 */
function Cart({ options }) {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectAllCartItems);
    const zoneCities = useSelector(selectZoneCities);
    const zoneCityArray = useSelector(selectZoneArray);
    
    const [orderData, setOrderData] = useState({});
    const [grandTotal, setGrandTotal] = useState();

    useEffect(async () => {
        dispatch(actions.ui.setPreloadShow(true));
        const res1 = await dispatch(thunks.order.getAllCartItems());
        const res2 = await dispatch(thunks.order.getAllZoneCities());
        const res3 = await dispatch(thunks.order.getAllZoneArray());
        dispatch(actions.ui.setPreloadShow(false));
        if (res1.status  != 200 | res1.status  != 200 | res1.status  != 200) {
            toast.error(res1.message);
        }
    },[]);

    useEffect(async () => {
        let  temp = 0;
        cartItems.map((item) => {
            temp += item.quantity * parseFloat(item.cartItemPrice)
        })
        setGrandTotal(temp);
    },[cartItems]);

    const removeCartItem = async (itemId) => {
        dispatch(actions.ui.setPreloadShow(true));
        const res1 = await dispatch(thunks.order.removeCartItem(itemId));
        dispatch(actions.ui.setPreloadShow(false));
        if (res1.status  != 200 ) {
            toast.error(res1.message);
        }
        toast.success(res1.message)
    }

    return (
        <Fragment>
            <Header options={options} />

            <PageTitle name="Cart"/>

            {/* start cart-section */}
            <section className="cart-section woocommerce-cart section-padding">
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="woocommerce">
                                <form action="/" method="post">
                                    <table className="shop_table shop_table_responsive cart">
                                        <thead>
                                        <tr>
                                            <th className="product-remove">&nbsp;</th>
                                            <th className="product-thumbnail">&nbsp;</th>
                                            <th className="product-name">Product</th>
                                            <th className="product-price">Price</th>
                                            <th className="product-quantity">Quantity</th>
                                            <th className="product-subtotal">Total</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            cartItems.map((item, index) => (
                                                <CartItem key={index} data={item}/>
                                            ))
                                        }
                                        
                                        </tbody>
                                    </table>
                                </form>
                                <div className="cart-collaterals">
                                    <CalculatedShipping currencySymbol="Rs" price={grandTotal}
                                    zoneCities = {zoneCities}
                                    />
                                    {/* <div className="wc-proceed-to-checkout">
                                        <Link className="checkout-button button alt wc-forward" to="/checkout">
                                            Proceed to Checkout
                                        </Link>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end cart-section */}

            {/* <Instagram/> */}
            <Footer/>
        </Fragment>
    );
}

export default Cart;