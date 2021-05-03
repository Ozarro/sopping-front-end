import React, { useDebugValue, useEffect, useRef } from 'react';
import {useState, Fragment} from 'react';
import Footer from '../../components/global/Footer';
import Instagram from '../../components/global/Instagram';
import Header from '../../components/header/Header';
import PageTitle from '../../components/global/PageTitle';
import Paypal from "./Paypal";

import BillingFields from './BillingFields';
import ShippingFields from './ShippingFields';
import NoscriptSnippet from "../../components/global/NoscriptSnippet";

import {useDispatch, useSelector} from "react-redux";
import {selectAllCartItems, selectZoneCities,
    selectAllCoupons} from "../../store/order/select";
import {thunks, actions, cleanQuery} from "../../store";
import {toast} from "react-toastify";
import order from '../../store/order';


/**
 * Checkout page
 * @param options
 * @returns {*}
 * @constructor
 */
function Checkout({ options }) {
    const dispatch = useDispatch();

    /**
     * Selectors
     */
    const cartItems = useSelector(selectAllCartItems);
    const coupons = useSelector(selectAllCoupons);
    const zoneCities = useSelector(selectZoneCities);

    /**
     * states
     */
    const [showLogin, setShowLogin] = useState(false);
    const [showShowCoupon, setShowShowCoupon] = useState(false);
    const [coupon, setCouponData] = useState({});
    const [orderData, setOrderData] = useState({
        paymentMethod : "",
        mobile : "",
        city : "",
        street1 : "",
        street2 : "",
        deliveryCharge : 0});
    const [couponCode, setCouponCode] = useState("");
    const [subTotal , setSubTotal] = useState(0);
    const [grandTotal , setGrandTotal] = useState(0);
    const [paymentMethods, setPaymentMethods] = useState(["Cash on Delivery", "Paypal"]);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [checkout, setCheckout] = useState(false)

    /**
     * Use Effects
     */
    useEffect( async () => {
        dispatch(actions.ui.setPreloadShow(true));
        const res1 = await dispatch(thunks.order.getAllCartItems());
        const res2 = await dispatch(thunks.order.getAllCoupons());
        const res3 = await dispatch(thunks.order.getAllZoneCities());
        dispatch(actions.ui.setPreloadShow(false));
        if (res1.status  != 200 | res2.status != 200 | res3.status != 200) {
            toast.error(res1.message);
        }

    } ,[])

    // Calculate grand total and subtoatal
    useEffect( () => {
        let subTotal = 0;
        cartItems.map((item) => {
            subTotal += parseFloat(item.cartItemPrice)*item.quantity
        })
        setSubTotal(subTotal);
        calculateGrandTotal();
    }, [cartItems, subTotal])



    useEffect(  () => {
        calculateGrandTotal();
    } ,[orderData, coupon])


    useEffect(  () => {
        if(orderData.paymentMethods == "" | orderData.mobile == ""
            | orderData.city == "" | orderData.street1 == "" |
            orderData.street2 == "" | orderData.deliveryCharge == 0){
            console.log("insfsdfsd",orderData, btnDisabled);
            setBtnDisabled(true);
            setCheckout(false);
        }else{
            setBtnDisabled(false);
        }
    } ,[orderData]);



    const calculateGrandTotal = () =>{
        if(orderData.city){
            const data = zoneCities.filter((item) => item.city == orderData.city)
            console.log(data);
            if(Object.keys(data[0]) != 0){
                orderData.deliveryCharge = parseFloat(data[0].deliveryCharge);
            }

        }
        console.log(orderData);
        let couponAmount = 0
        let grandTotal = 0
        if(Object.keys(coupon) != 0){
            couponAmount = coupon.amount
        }
        const deliveryCharge = (orderData.deliveryCharge) ? parseFloat(orderData.deliveryCharge)  : 0;
        grandTotal = subTotal +deliveryCharge -couponAmount
        setGrandTotal(grandTotal);
    }


    
    /**
     * Handle state
     */

    const handlePaypalChange = (e) => {
        setCheckout(true);
    }

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
     * 
     * Data Handle Functions
     */
    const handleOrderDataChange = ({ currentTarget: input }) => {
        const { name, value } = input;
        const data = {...orderData};
        data[name] = value;
        setOrderData(data);
    };


    const handleCouponDataChange = ({ currentTarget: input }) => {
        const { name, value } = input;
        setCouponCode(value);
    };

    const handleOrderPlaceSubmit = async () => {
        dispatch(actions.ui.setPreloadShow(true));
        if(Object.keys(coupon) != 0){
            orderData.couponCode = coupon.couponCode;
            orderData.couponAmount = coupon.amount;
        }
        const data = cleanQuery(orderData, 
            ["couponCode","couponAmount", "paymentMethod", "grandTotal", "street1", "street2"
            , "city", "mobile", "deliveryCharge", "cartItems"
        ])
        let cartItemList = [];
        cartItems.map((item) => {
            cartItemList.push(item.itemId)
        })

        const order = {...data,cartItems : JSON.stringify(cartItemList), grandTotal }
        console.log(order);
        const res = await dispatch(thunks.order.addOrder(order));
        dispatch(actions.ui.setPreloadShow(false));
        if(res.status === 200){
            console.log("Order Place response",res);
            toast.success(res.message); 
        }else{
            console.log(res);
            toast.error((res[0]) ? res[0].message : res.message); 
        }

    }

    const handleOrderPlaceSubmitCOD = async (e) => {
        e.preventDefault();
        dispatch(actions.ui.setPreloadShow(true));
        if(Object.keys(coupon) != 0){
            orderData.couponCode = coupon.couponCode;
            orderData.couponAmount = coupon.amount;
        }
        const data = cleanQuery(orderData, 
            ["couponCode","couponAmount", "paymentMethod", "grandTotal", "street1", "street2"
            , "city", "mobile", "deliveryCharge", "cartItems"
        ])
        let cartItemList = [];
        cartItems.map((item) => {
            cartItemList.push(item.itemId)
        })

        const order = {...data,cartItems : JSON.stringify(cartItemList), grandTotal }
        console.log(order);
        const res = await dispatch(thunks.order.addOrder(order));
        dispatch(actions.ui.setPreloadShow(false));
        if(res.status === 200){
            console.log("Order Place response",res);
            toast.success(res.message); 
        }else{
            console.log(res);
            toast.error((res[0]) ? res[0].message : res.message); 
        }

    }

    const handleCouponApplySubmit = (e) => {
        e.preventDefault();
        const couponL = coupons.filter(item => {
            return(item.couponCode == couponCode && item.status == "Available" &&
                new Date(item.expiryDate) > new Date()
            )})
        if(couponL[0] && Object.keys(couponL[0]) != 0){
            if(couponL[0].amount >= subTotal){
                toast.error("You can not apply this coupon on this items");
                return;
            }
            setCouponData(couponL[0])
            toast.success("Coupon Code is valid")
        }else{
            toast.error("Coupon code is invalid")
        }
    }

    console.log(orderData, btnDisabled);
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
                                <div className="woocommerce-info">Have a coupon? <a onClick={HandelShowCouponStatus}
                                                                                    href="#" className="showcoupon">Click
                                    here to enter your code</a></div>
                                {
                                    showShowCoupon
                                        ?
                                        <form className="checkout_coupon">
                                            <p className="form-row form-row-first">
                                                <input type="text" name="couponCode" className="input-text"
                                                       placeholder="Coupon code" id="couponCode"
                                                       onChange={handleCouponDataChange}
                                                       value={couponCode}
                                                       />
                                            </p>
                                            <p className="form-row form-row-last">
                                                <input type="submit" className="button" name="apply_coupon"
                                                       defaultValue="Apply Coupon"
                                                        onClick={handleCouponApplySubmit}
                                                       />
                                            </p>
                                            <div className="clear"/>
                                        </form>
                                        : ''
                                }

                                <form name="checkout" className="checkout woocommerce-checkout" method="post">

                                    <div className="col2-set" id="customer_details">
                                        <BillingFields
                                            orderData={orderData}
                                            zoneCities={zoneCities}
                                            handleOrderDataChange={handleOrderDataChange}
                                            paymentMethods={paymentMethods}
                                            handleOrderPlaceSubmit={handleOrderPlaceSubmit}
                                        />
                                        {/*<ShippingFields/>*/}
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
                                                cartItems.map((item, index) => (
                                                    <tr key={index} className="cart_item">
                                                        <td className="product-name">
                                                            {item.pName} &nbsp; <strong className="product-quantity">×
                                                            {item.quantity}</strong></td>
                                                        <td className="product-total">
                                                        <span className="woocommerce-Price-amount amount"><span
                                                            className="woocommerce-Price-currencySymbol">Rs. </span>{item.quantity*parseFloat(item.cartItemPrice)}</span>
                                                        </td>
                                                    </tr>
                                                ))
                                            }

                                            </tbody>
                                            <tfoot>
                                            <tr className="cart-subtotal">
                                                <th>Subtotal</th>
                                                <td><span className="woocommerce-Price-amount amount"><span
                                                    className="woocommerce-Price-currencySymbol">Rs. </span>{subTotal}</span>
                                                </td>
                                            </tr>
                                            <tr className="shipping">
                                                <th>Coupon Amount</th>
                                                <td data-title="Coupon">
                                                    {coupon.amount}
                                                </td>
                                            </tr>
                                            <tr className="shipping">
                                                <th>Delivery Charge</th>
                                                <td data-title="Shipping">
                                                    {orderData.deliveryCharge}
                                                </td>
                                            </tr>
                                            <tr className="order-total">
                                                <th>Total</th>
                                                <td><strong><span className="woocommerce-Price-amount amount"><span
                                                    className="woocommerce-Price-currencySymbol">Rs. </span>{grandTotal}</span></strong>
                                                </td>
                                            </tr>
                                            </tfoot>
                                        </table>
                                        <div id="payment" className="woocommerce-checkout-payment">


                                            <div className="form-row place-order">

                                                {(orderData.paymentMethod == "Paypal") ?
                                                    [ (checkout) ?
                                                        <Paypal grandTotal={grandTotal}
                                                                handleOrderPlaceSubmit={handleOrderPlaceSubmit} />

                                                        :
                                                        <div>
                                                            <label htmlFor="payment_method_paypal">
                                                                PayPal <img src={process.env.PUBLIC_URL + "/assets/images/paypal.png"}
                                                                            alt="PayPal Acceptance Mark"/>
                                                            </label>
                                                            <input type="submit" className="button alt btn-lg"
                                                                   name="woocommerce_checkout_place_order" id="place_order"
                                                                   defaultValue="Place order" data-value="Place order"
                                                                   disabled={btnDisabled}
                                                                   onClick={handlePaypalChange}

                                                            />
                                                        </div>

                                                    ]

                                                    :
                                                    <input type="submit" className="button alt btn-lg"
                                                           name="woocommerce_checkout_place_order" id="place_order"
                                                           defaultValue="Place order" data-value="Place order"
                                                           onClick={handleOrderPlaceSubmitCOD}
                                                           disabled={btnDisabled}

                                                    />

                                                }


                                            </div>
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