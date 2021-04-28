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
function CalculatedShipping({currencySymbol, price}) {

    const onClickSubmit = (e) => {
        e.preventDefault();
    };

    /**
     * Shipping Calculator state
     */
    const [showShippingCalculator, setShowShippingCalculator] = useState(false);

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
                    <tr className="shipping">
                        <th>Shipping</th>
                        <td data-title="Shipping">
                            Free Shipping
                            <input type="hidden" name="shipping_method[0]" data-index={0}
                                   id="shipping_method_0" defaultValue="free_shipping:1"
                                   className="shipping_method"/>
                            <form className="woocommerce-shipping-calculator"
                                  action="http://localhost/wp/?page_id=5" method="post">
                                <p>
                                    <a onClick={handleShippingCalculatorStatus} href="#"
                                       className="shipping-calculator-button">
                                        Calculate Shipping
                                    </a>
                                </p>

                                {
                                    showShippingCalculator ?
                                        <section className="shipping-calculator-form">
                                            <h2 className="hidden">Cart total</h2>
                                            <p className="form-row form-row-wide"
                                               id="calc_shipping_country_field">
                                                <select name="calc_shipping_country" id="calc_shipping_country"
                                                        className="country_to_state" rel="calc_shipping_state">
                                                    <option value>Select a country…</option>
                                                    <option value="AX">Åland Islands</option>
                                                    {
                                                        countries.map((item, index) => (
                                                            <option key={index}
                                                                    value={item.code}>{item.name}</option>
                                                        ))
                                                    }
                                                </select>
                                            </p>
                                            <p className="form-row form-row-wide"
                                               id="calc_shipping_state_field">
                                                <input type="hidden" name="calc_shipping_state"
                                                       id="calc_shipping_state"/>
                                            </p>
                                            <p className="form-row form-row-wide" id="calc_shipping_postcode_field">
                                                <input type="text" className="input-text" defaultValue
                                                       placeholder="Postcode / ZIP" name="calc_shipping_postcode"
                                                       id="calc_shipping_postcode"/>
                                            </p>
                                            <p>
                                                <button onClick={onClickSubmit} type="submit" name="calc_shipping" value={1} className="button">
                                                    Update Totals
                                                </button>
                                            </p>
                                            <input type="hidden" id="_wpnonced" name="_wpnonce"
                                                   defaultValue="918724a9c2"/>
                                            <input type="hidden" name="_wp_http_referer" defaultValue="/wp/?page_id=5"/>
                                        </section>
                                        : ""
                                }

                            </form>
                        </td>
                    </tr>
                    <tr className="order-total">
                        <th>Total</th>
                        <td data-title="Total"><strong><span
                            className="woocommerce-Price-amount amount"><span
                            className="woocommerce-Price-currencySymbol">{currencySymbol}</span>{price}</span></strong>
                        </td>
                    </tr>
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