import React, {Fragment} from 'react';
import categories from "../../data/categories.json";


/**
 * Billing Fields section
 * @returns {*}
 * @constructor
 */
function BillingFields({orderData, handle, zoneCities, handleOrderDataChange}) {

    return (
        <Fragment>
            <div className="col-1">
                <div className="woocommerce-billing-fields">
                    <h3>Billing Details</h3>

                    <p className="form-row form-row form-row-first validate-required" id="billing_first_name_field">
                        <label htmlFor="billing_first_name">
                            First Name
                        </label>
                        <input type="text" className="input-text " name="billing_first_name" id="billing_first_name"
                               placeholder="Enter first name" autoComplete="given-name" />
                    </p>
                    <p className="form-row form-row form-row-last validate-required" id="billing_last_name_field">
                        <label htmlFor="billing_last_name">Last Name </label>
                        <input type="text" className="input-text " name="billing_last_name" id="billing_last_name"
                               placeholder="Enter last name" autoComplete="family-name" />
                    </p>
                    <div className="clear"/>

                    <p className="form-row form-row form-row-last validate-required validate-phone"
                       id="billing_phone_field">
                        <label htmlFor="mobile">Phone <abbr className="required"
                                                                   title="required">*</abbr></label>
                        <input type="tel" className="input-text " name="mobile" id="mobile" placeholder="Enter Mobile"
                               autoComplete="tel"
                                onChange={handleOrderDataChange}
                        />
                    </p>

                    <div className="clear"/>
                    <p className="form-row form-row form-row-wide address-field update_totals_on_change validate-required"
                       id="billing_country_field">
                        <label htmlFor="billing_country">City <abbr className="required"
                                                                       title="required">*</abbr></label>
                        <select name="city" id="billing_country" autoComplete="country"
                                className="country_to_state country_select "
                                onChange={handleOrderDataChange}
                        >
                            <option>Select a city</option>
                            {
                                zoneCities.map((item, index) => (
                                    <option key={index} value={item.city}>{item.city}</option>
                                ))
                            }
                        </select>
                        <noscript>
                            <input type="submit" name="woocommerce_checkout_update_totals" value="Update country"/>
                        </noscript>
                    </p>

                    <p className="form-row form-row form-row-wide address-field validate-required"
                       id="billing_address_1_field">
                        <label htmlFor="billing_address_1">Address <abbr className="required" title="required">*</abbr></label>
                        <input type="text" className="input-text " name="billing_address_1" id="billing_address_1"
                               placeholder="Street address" autoComplete="address-line1" defaultValue/>
                    </p>
                    <p className="form-row form-row form-row-wide address-field" id="billing_address_2_field">
                        <input type="text" className="input-text " name="billing_address_2" id="billing_address_2"
                               placeholder="Apartment, suite, unit etc. (optional)" autoComplete="address-line2"
                               defaultValue/>
                    </p>
                    <p className="form-row form-row address-field validate-postcode validate-required form-row-first  woocommerce-invalid-required-field"
                       id="billing_city_field">
                        <label htmlFor="billing_city">Town / City <abbr className="required"
                                                                        title="required">*</abbr></label>
                        <input type="text" className="input-text " name="billing_city" id="billing_city" placeholder=""
                               autoComplete="address-level2" defaultValue/>
                    </p>
                    <div className="clear"/>
                </div>
            </div>
        </Fragment>
    );
}

export default BillingFields;