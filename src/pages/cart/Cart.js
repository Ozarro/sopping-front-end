 import React, {Fragment} from 'react';

import Footer from '../../components/global/Footer';
import Instagram from '../../components/global/Instagram';
import PageTitle from '../../components/global/PageTitle';
import Header from '../../components/header/Header';
import CartItem from "../../components/cart/CartItem";
import Coupon from "../../components/cart/Coupon";
import CalculatedShipping from "../../components/cart/CalculatedShipping";

import './cart.css';

/**
 * Cart page
 * @param options
 * @returns {*}
 * @constructor
 */
function Cart({ options }) {

    /**
     * demo data
     */
    const cartItemData = [
        {
            id: 8,
            sku: "",
            img: "/assets/images/cart/img-1.jpg",
            link: "#",
            name: "Checked Hoodies Woo",
            currencySymbol: "£",
            price: "165.00",
            qty: 2,
            total: "330.00"
        },
        {
            id: 21,
            sku: "",
            img: "/assets/images/cart/img-2.jpg",
            link: "#",
            name: "product2",
            currencySymbol: "£",
            price: "100.00",
            qty: 1,
            total: "100.00"
        }
    ];

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
                                            cartItemData.map((item, index) => (
                                                <CartItem key={index} data={item}/>
                                            ))
                                        }
                                        <Coupon/>
                                        </tbody>
                                    </table>
                                </form>
                                <div className="cart-collaterals">
                                    <CalculatedShipping currencySymbol="£" price="430.00"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end cart-section */}

            <Instagram/>
            <Footer/>
        </Fragment>
    );
}

export default Cart;