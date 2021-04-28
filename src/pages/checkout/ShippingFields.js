import React from 'react';
import {useState, Fragment} from 'react';

/**
 * demo date
 */
import categories from "../../data/categories.json";

/**
 * Shipping Fields section
 * @returns {*}
 * @constructor
 */
function ShippingFields() {

    /**
     * state
     */
    const [showShippingAddress, setShowShippingAddress] = useState(false);

    /**
     * Handle state
     * @constructor
     */
    const HandelShippingAddressStatus = () => {
        setShowShippingAddress(!showShippingAddress);
    };

    return (
        <Fragment>
            <div className="col-2">
                <div className="woocommerce-shipping-fields">
                    <h3 id="ship-to-different-address">
                        <label htmlFor="ship-to-different-address-checkbox" className="checkbox">Ship to a different
                            address?</label>
                        <input onChange={HandelShippingAddressStatus} id="ship-to-different-address-checkbox"
                               className="input-checkbox" type="checkbox" name="ship_to_different_address"
                               defaultValue={1}/>
                    </h3>

                    {
                        showShippingAddress
                            ?
                            <div className="shipping_address">
                                <p className="form-row form-row form-row-first validate-required"
                                   id="shipping_first_name_field">
                                    <label htmlFor="shipping_first_name">First Name <abbr className="required"
                                                                                          title="required">*</abbr></label>
                                    <input type="text" className="input-text " name="shipping_first_name"
                                           id="shipping_first_name" placeholder="" autoComplete="given-name"
                                           defaultValue/>
                                </p>
                                <p className="form-row form-row form-row-last validate-required"
                                   id="shipping_last_name_field">
                                    <label htmlFor="shipping_last_name" className>Last Name <abbr className="required"
                                                                                                  title="required">*</abbr></label>
                                    <input type="text" className="input-text " name="shipping_last_name"
                                           id="shipping_last_name" placeholder="" autoComplete="family-name"
                                           defaultValue/>
                                </p>
                                <div className="clear"/>
                                <p className="form-row form-row form-row-wide" id="shipping_company_field">
                                    <label htmlFor="shipping_company">Company Name</label>
                                    <input type="text" className="input-text " name="shipping_company"
                                           id="shipping_company" placeholder="" autoComplete="organization"
                                           defaultValue/>
                                </p>
                                <p className="form-row form-row form-row-wide address-field update_totals_on_change validate-required"
                                   id="shipping_country_field">
                                    <label htmlFor="shipping_country">Country <abbr className="required"
                                                                                    title="required">*</abbr></label>
                                    <select name="shipping_country" id="shipping_country" autoComplete="country"
                                            className="country_to_state country_select ">
                                        <option value>Select a country…</option>
                                        {
                                            categories.map((item, index) => (
                                                <option key={index} value={item.code}>{item.name}</option>
                                            ))
                                        }
                                    </select>
                                    <noscript>
                                        <input type="submit" name="woocommerce_checkout_update_totals"
                                               value="Update country"/>
                                    </noscript>
                                </p>
                                <p className="form-row form-row form-row-wide address-field validate-required"
                                   id="shipping_address_1_field">
                                    <label htmlFor="shipping_address_1">Address <abbr className="required"
                                                                                      title="required">*</abbr></label>
                                    <input type="text" className="input-text " name="shipping_address_1"
                                           id="shipping_address_1" placeholder="Street address"
                                           autoComplete="address-line1" defaultValue/>
                                </p>
                                <p className="form-row form-row form-row-wide address-field"
                                   id="shipping_address_2_field">
                                    <input type="text" className="input-text " name="shipping_address_2"
                                           id="shipping_address_2" placeholder="Apartment, suite, unit etc. (optional)"
                                           autoComplete="address-line2" defaultValue/>
                                </p>
                                <p className="form-row form-row address-field validate-postcode validate-required form-row-first  woocommerce-invalid-required-field"
                                   id="billing_city_field2">
                                    <label htmlFor="billing_city">Town / City <abbr className="required"
                                                                                    title="required">*</abbr></label>
                                    <input type="text" className="input-text " name="billing_city" id="billing_city3"
                                           placeholder="" autoComplete="address-level2" defaultValue/>
                                </p>
                                <p className="form-row form-row form-row-last address-field validate-required validate-postcode"
                                   id="billing_postcode_field17">
                                    <label htmlFor="billing_postcode">Postcode / ZIP <abbr className="required"
                                                                                           title="required">*</abbr></label>
                                    <input type="text" className="input-text " name="billing_postcode"
                                           id="billing_postcode4" placeholder="" autoComplete="postal-code"
                                           defaultValue/>
                                </p>
                                <div className="clear"/>
                            </div>
                            : ''
                    }

                    <p className="form-row form-row notes" id="order_comments_field">
                        <label htmlFor="order_comments">Order Notes</label>
                        <textarea name="order_comments" className="input-text " id="order_comments"
                                  placeholder="Notes about your order, e.g. special notes for delivery." rows={2}
                                  cols={5} defaultValue={""}/>
                    </p>
                </div>
            </div>
        </Fragment>
    );
}

export default ShippingFields;