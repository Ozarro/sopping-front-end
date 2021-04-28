import React from 'react';
import {useState, Fragment} from 'react';
import Footer from '../../components/global/Footer';
import Instagram from '../../components/global/Instagram';
import Header from '../../components/header/Header';
import PageTitle from '../../components/global/PageTitle';

import BillingFields from './BillingFields';
import ShippingFields from './ShippingFields';
import NoscriptSnippet from "../../components/global/NoscriptSnippet";


/**
 * Checkout page
 * @param options
 * @returns {*}
 * @constructor
 */
function Checkout({ options }) {

    /**
     * states
     */
    const [showLogin, setShowLogin] = useState(false);
    const [showShowCoupon, setShowShowCoupon] = useState(false);

    /**
     * Handle state
     */
    const HandleShowLoginStatus = (e) => {
        e.preventDefault();
        HandelCloseTabs();
        setShowLogin(!showLogin);
    };

    const HandelShowCouponStatus = (e) => {
        e.preventDefault();
        HandelCloseTabs();
        setShowShowCoupon(!showShowCoupon);
    };

    const HandelCloseTabs = () => {
        setShowLogin(false);
        setShowShowCoupon(false);
    };

    /**
     * demo data
     */
    const checkoutData = {
        product: [
            {
                name: "Checked Hoodies Woo",
                price: "165.00",
                quantity: 1
            },

        ],
        currencySymbol: "£",
        shipping: "Free Shipping",
        subtotal: "165.00",
        total: "165.00"
    };

    return (
        <Fragment>
            <Header options={options} />

            <PageTitle name="Checkout"/>

            {/* start checkout-section */}
            <section className="checkout-section section-padding">
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="woocommerce">
                                <div className="woocommerce-info">
                                    Returning customer?
                                    <a onClick={HandleShowLoginStatus} href="#" className="showlogin">Click
                                        here to login
                                    </a>
                                </div>
                                {
                                    showLogin ?
                                        <form method="post" className="login">
                                            <p>If you have shopped with us before, please enter your details in the
                                                boxes below. If you are a new customer, please proceed to the
                                                Billing &amp; Shipping section.</p>
                                            <p className="form-row form-row-first">
                                                <label htmlFor="username">Username or email <span
                                                    className="required">*</span></label>
                                                <input type="text" className="input-text" name="username"
                                                       id="username"/>
                                            </p>
                                            <p className="form-row form-row-last">
                                                <label htmlFor="password">Password <span
                                                    className="required">*</span></label>
                                                <input className="input-text" type="password" name="password"
                                                       id="password"/>
                                            </p>
                                            <div className="clear"/>
                                            <p className="form-row">
                                                <input type="hidden" id="_wpnonce" name="_wpnonce"
                                                       defaultValue="94dfaf2ac1"/>
                                                <input type="hidden" name="_wp_http_referer"
                                                       defaultValue="/wp/?page_id=6"/>
                                                <input type="submit" className="button" name="login"
                                                       defaultValue="Login"/>
                                                <input type="hidden" name="redirect"
                                                       defaultValue="http://localhost/wp/?page_id=6"/>
                                                <label htmlFor="rememberme" className="inline">
                                                    <input name="rememberme" type="checkbox" id="rememberme"
                                                           defaultValue="forever"/> Remember me </label>
                                            </p>
                                            <p className="lost_password">
                                                <a href="http://localhost/wp/?page_id=7&lost-password">Lost your
                                                    password?</a>
                                            </p>
                                            <div className="clear"/>
                                        </form>
                                        : ''
                                }

                                <div className="woocommerce-info">Have a coupon? <a onClick={HandelShowCouponStatus}
                                                                                    href="#" className="showcoupon">Click
                                    here to enter your code</a></div>
                                {
                                    showShowCoupon
                                        ?
                                        <form className="checkout_coupon" method="post">
                                            <p className="form-row form-row-first">
                                                <input type="text" name="coupon_code" className="input-text"
                                                       placeholder="Coupon code" id="coupon_code"/>
                                            </p>
                                            <p className="form-row form-row-last">
                                                <input type="submit" className="button" name="apply_coupon"
                                                       defaultValue="Apply Coupon"/>
                                            </p>
                                            <div className="clear"/>
                                        </form>
                                        : ''
                                }

                                <form name="checkout" method="post" className="checkout woocommerce-checkout"
                                      action="/?page_id=6" encType="multipart/form-data">
                                    <div className="col2-set" id="customer_details">
                                        <BillingFields/>
                                        <ShippingFields/>
                                    </div>
                                    <h3 id="order_review_heading">Your order</h3>
                                    <div id="order_review" className="woocommerce-checkout-review-order">
                                        <table className="shop_table woocommerce-checkout-review-order-table">
                                            <thead>
                                            <tr>
                                                <th className="product-name">Product</th>
                                                <th className="product-total">Total</th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            {
                                                checkoutData.product.map((item, index) => (
                                                    <tr key={index} className="cart_item">
                                                        <td className="product-name">
                                                            {item.name} &nbsp; <strong className="product-quantity">×
                                                            {item.quantity}</strong></td>
                                                        <td className="product-total">
                                                        <span className="woocommerce-Price-amount amount"><span
                                                            className="woocommerce-Price-currencySymbol">{checkoutData.currencySymbol}</span>{item.price}</span>
                                                        </td>
                                                    </tr>
                                                ))
                                            }

                                            </tbody>
                                            <tfoot>
                                            <tr className="cart-subtotal">
                                                <th>Subtotal</th>
                                                <td><span className="woocommerce-Price-amount amount"><span
                                                    className="woocommerce-Price-currencySymbol">{checkoutData.currencySymbol}</span>{checkoutData.subtotal}</span>
                                                </td>
                                            </tr>
                                            <tr className="shipping">
                                                <th>Shipping</th>
                                                <td data-title="Shipping">
                                                    {checkoutData.shipping}
                                                    <input type="hidden" name="shipping_method[0]" data-index={0}
                                                           id="shipping_method_0" defaultValue="free_shipping:1"
                                                           className="shipping_method"/>
                                                </td>
                                            </tr>
                                            <tr className="order-total">
                                                <th>Total</th>
                                                <td><strong><span className="woocommerce-Price-amount amount"><span
                                                    className="woocommerce-Price-currencySymbol">{checkoutData.currencySymbol}</span>{checkoutData.total}</span></strong>
                                                </td>
                                            </tr>
                                            </tfoot>
                                        </table>
                                        <div id="payment" className="woocommerce-checkout-payment">
                                            <ul className="wc_payment_methods payment_methods methods">
                                                <li className="wc_payment_method payment_method_cheque">
                                                    <input id="payment_method_cheque" type="radio"
                                                           className="input-radio" name="payment_method"
                                                           defaultValue="cheque" defaultChecked="checked"
                                                           data-order_button_text/>
                                                    {/*grop add span for radio button style*/}
                                                    <span className="grop-woo-radio-style"/>
                                                    {/*custom change*/}
                                                    <label htmlFor="payment_method_cheque">
                                                        Check Payments </label>
                                                    <div className="payment_box payment_method_cheque">
                                                        <p>Please send a check to Store Name, Store Street, Store Town,
                                                            Store State / County, Store Postcode.</p>
                                                    </div>
                                                </li>
                                                <li className="wc_payment_method payment_method_paypal">
                                                    <input id="payment_method_paypal" type="radio"
                                                           className="input-radio" name="payment_method"
                                                           defaultValue="paypal"
                                                           data-order_button_text="Proceed to PayPal"/>
                                                    {/*grop add span for radio button style*/}
                                                    <span className="grop-woo-radio-style"/>
                                                    {/*custom change*/}
                                                    <label htmlFor="payment_method_paypal">
                                                        PayPal <img src={process.env.PUBLIC_URL + "/assets/images/paypal.png"}
                                                                    alt="PayPal Acceptance Mark"/><a href="#"
                                                                                                     className="about_paypal"
                                                                                                     title="What is PayPal?">What
                                                        is PayPal?</a> </label>
                                                    <div className="payment_box payment_method_paypal"
                                                         style={{display: 'none'}}>
                                                        <p>Pay via PayPal; you can pay with your credit card if you
                                                            don’t have a PayPal account.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="form-row place-order">

                                                <NoscriptSnippet/>

                                                <input type="submit" className="button alt"
                                                       name="woocommerce_checkout_place_order" id="place_order"
                                                       defaultValue="Place order" data-value="Place order"/>
                                                <input type="hidden" id="_wpnonce5" name="_wpnonce"
                                                       defaultValue="783c1934b0"/>
                                                <input type="hidden" name="_wp_http_referer"
                                                       defaultValue="/wp/?page_id=6"/></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end checkout-section */}

            <Instagram/>
            <Footer/>

        </Fragment>
    );
}

export default Checkout;