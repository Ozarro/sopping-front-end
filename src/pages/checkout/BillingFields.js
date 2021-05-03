import React, {Fragment} from 'react';
import categories from "../../data/categories.json";


/**
 * Billing Fields section
 * @returns {*}
 * @constructor
 */
function BillingFields({orderData, zoneCities, handleOrderDataChange,
                            paymentMethods,}) {

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

                    <p className="form-row form-row form-row-first validate-required" id="billing_payment_method_field">
                        <label htmlFor="paymentMethod">Payment Method <abbr className="required"
                                                                    title="required">*</abbr></label>
                        <select name="paymentMethod" id="paymentMethod" autoComplete="payment method"
                                className="country_to_state country_select "
                                onChange={handleOrderDataChange} required
                        >
                            <option>Select a payment method</option>
                            {
                                paymentMethods.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))
                            }
                        </select>
                    </p>

                    <p className="form-row form-row form-row-last validate-required validate-phone"
                       id="billing_phone_field">
                        <label htmlFor="mobile">Phone <abbr className="required"
                                                                   title="required">*</abbr></label>
                        <input type="tel" className="input-text " name="mobile" id="mobile" placeholder="Enter Mobile"
                               autoComplete="tel"
                               value={orderData.mobile}
                                onChange={handleOrderDataChange} required
                        />
                    </p>

                    <div className="clear"/>
                    <p className="form-row form-row form-row-wide address-field update_totals_on_change validate-required"
                       id="billing_country_field">
                        <label htmlFor="city">City <abbr className="required"
                                                                       title="required">*</abbr></label>
                        <select name="city" id="city" autoComplete="country"
                                className="country_to_state country_select "
                                onChange={handleOrderDataChange} required
                        >
                            <option>Select a city</option>
                            {
                                zoneCities.map((item, index) => (
                                    <option key={index} value={item.city}>{item.city}</option>
                                ))
                            }
                        </select>
                    </p>

                    <p className="form-row form-row form-row-wide address-field validate-required"
                       id="billing_address_1_field">
                        <label htmlFor="street1">Address <abbr className="required" title="required">*</abbr></label>
                        <input type="text" className="input-text " name="street1" id="street1"
                               placeholder="Street address 1" autoComplete="address-line1"
                               value={orderData.street1}
                               onChange={handleOrderDataChange} required

                        />
                    </p>
                    <p className="form-row form-row form-row-wide address-field" id="billing_address_2_field">
                        <input type="text" className="input-text " name="street2" id="street2"
                               placeholder="Street address 2 (optional)" autoComplete="address-line2"
                               value={orderData.street2}
                               onChange={handleOrderDataChange}
                        />
                    </p>

                    <div className="clear"/>
                </div>
            </div>
        </Fragment>
    );
}

export default BillingFields;