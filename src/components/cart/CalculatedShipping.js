import React, {Fragment, useState} from 'react';

/**
 * demo countries data
 */
import countries from "../../data/countries";
import {Link} from "react-router-dom";

/**
 * Shipping calculated component
 * @param currencySymbol
 * @param price
 * @returns {*}
 * @constructor
 */
function CalculatedShipping({currencySymbol, price , zoneCities}) {
    // const [deliveryCharge , setDeliveryCharge] = 

    const onClickSubmit = (e) => {
        e.preventDefault();

    };

    /**
     * Shipping Calculator state
     */
    const [showShippingCalculator, setShowShippingCalculator] = useState(true);

    /**
     * handle Shipping Calculator state
     * @param event
     */
    const handleShippingCalculatorStatus = (event) => {
        event.preventDefault();
        setShowShippingCalculator(!showShippingCalculator);
    };

    return (
        <Fragment>
            <div className="cart_totals calculated_shipping">
                <h2>Cart Totals</h2>
                <table className="shop_table shop_table_responsive">
                    <tbody>
                    <tr className="cart-subtotal">
                        <th>Subtotal</th>
                        <td data-title="Subtotal">
                            <span className="woocommerce-Price-amount amount">
                                    <span className="woocommerce-Price-currencySymbol">
                                        {currencySymbol}
                                    </span>{price}
                            </span>
                        </td>
                    </tr>
                    {/* <tr className="order-total">
                        <th>Total</th>
                        <td data-title="Total"><strong><span
                            className="woocommerce-Price-amount amount"><span
                            className="woocommerce-Price-currencySymbol">{currencySymbol}</span>{price}</span></strong>
                        </td>
                    </tr> */}
                    </tbody>
                </table>
                <div className="wc-proceed-to-checkout">
                    <Link className="checkout-button button alt wc-forward" to="/checkout">
                        Proceed to Checkout
                    </Link>
                </div>
            </div>
        </Fragment>
    );
}

export default CalculatedShipping;