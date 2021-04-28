import React, {Fragment} from 'react';
import categories from "../../data/categories.json";


/**
 * Billing Fields section
 * @returns {*}
 * @constructor
 */
function BillingFields() {

    return (
        <Fragment>
            <div className="col-1">
                <div className="woocommerce-billing-fields">
                    <h3>Billing Details</h3>

                    <p className="form-row form-row form-row-first validate-required" id="billing_first_name_field">
                        <label htmlFor="billing_first_name">
                            First Name <abbr className="required" title="required">*</abbr>
                        </label>
                        <input type="text" className="input-text " name="billing_first_name" id="billing_first_name"
                               placeholder="" autoComplete="given-name" defaultValue/>
                    </p>
                    <p className="form-row form-row form-row-last validate-required" id="billing_last_name_field">
                        <label htmlFor="billing_last_name">Last Name <abbr className="required"
                                                                           title="required">*</abbr></label>
                        <input type="text" className="input-text " name="billing_last_name" id="billing_last_name"
                               placeholder="" autoComplete="family-name" defaultValue/>
                    </p>
                    <div className="clear"/>
                    <p className="form-row form-row form-row-wide" id="billing_company_field">
                        <label htmlFor="billing_company">Company Name</label>
                        <input type="text" className="input-text " name="billing_company" id="billing_company"
                               placeholder="" autoComplete="organization" defaultValue/>
                    </p>
                    <p className="form-row form-row form-row-first validate-required validate-email"
                       id="billing_email_field">
                        <label htmlFor="billing_email">Email Address <abbr className="required"
                                                                           title="required">*</abbr></label>
                        <input type="email" className="input-text " name="billing_email" id="billing_email"
                               placeholder="" autoComplete="email" defaultValue/>
                    </p>
                    <p className="form-row form-row form-row-last validate-required validate-phone"
                       id="billing_phone_field">
                        <label htmlFor="billing_phone">Phone <abbr className="required"
                                                                   title="required">*</abbr></label>
                        <input type="tel" className="input-text " name="billing_phone" id="billing_phone" placeholder=""
                               autoComplete="tel" defaultValue/>
                    </p>

                    <div className="clear"/>
                    <p className="form-row form-row form-row-wide address-field update_totals_on_change validate-required"
                       id="billing_country_field">
                        <label htmlFor="billing_country">Country <abbr className="required"
                                                                       title="required">*</abbr></label>
                        <select name="billing_country" id="billing_country" autoComplete="country"
                                className="country_to_state country_select ">
                            <option>Select a country…</option>
                            {
                                categories.map((item, index) => (
                                    <option key={index} value={item.code}>{item.name}</option>
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
                    <p className="form-row form-row form-row-last address-field validate-required validate-postcode"
                       id="billing_postcode_field">
                        <label htmlFor="billing_postcode">Postcode / ZIP <abbr className="required"
                                                                               title="required">*</abbr></label>
                        <input type="text" className="input-text " name="billing_postcode8" id="billing_postcode"
                               placeholder="" autoComplete="postal-code" defaultValue/>
                    </p>
                    <div className="clear"/>
                    <p className="form-row form-row-wide create-account">
                        <input className="input-checkbox" id="createaccount" type="checkbox" name="createaccount"
                               defaultValue={1}/>
                        <label htmlFor="createaccount" className="checkbox">Create an account?</label>
                    </p>
                    <div className="create-account">
                        <p>Create an account by entering the information below. If you are a returning customer please
                            login at the top of the page.</p>
                        <p className="form-row form-row validate-required" id="account_password_field">
                            <label htmlFor="account_password">Account password <abbr className="required"
                                                                                     title="required">*</abbr></label>
                            <input type="password" className="input-text " name="account_password" id="account_password"
                                   placeholder="Password" defaultValue/>
                        </p>
                        <div className="clear"/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default BillingFields;