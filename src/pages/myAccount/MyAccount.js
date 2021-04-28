import React, {Fragment} from 'react';

import Footer from '../../components/global/Footer';
import Instagram from '../../components/global/Instagram';
import Header from '../../components/header/Header';
import PageTitle from '../../components/global/PageTitle';

/**
 * My Account Page
 * @param options
 * @returns {*}
 * @constructor
 */
function MyAccount({ options }) {

    /**
     * check this function
     */
    const onClickSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Fragment>
            <Header options={options} />

            <PageTitle name="My Account"/>

            {/* start my-account-section */}
            <section className="my-account-section">
                <div className="container-1410">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="woocommerce">
                                <div className="woocommerce-notices-wrapper"/>
                                <div className="u-columns col2-set" id="customer_login">
                                    <div className="u-column1 col-1">
                                        <h2>Login</h2>
                                        <form className="woocommerce-form woocommerce-form-login login" method="post">
                                            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                                <label htmlFor="username">Username or email address&nbsp;<span
                                                    className="required">*</span></label>
                                                <input type="text"
                                                       className="woocommerce-Input woocommerce-Input--text input-text"
                                                       name="username" id="username" autoComplete="username"/>
                                            </p>
                                            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                                <label htmlFor="password">Password&nbsp;<span
                                                    className="required">*</span></label>
                                                <input className="woocommerce-Input woocommerce-Input--text input-text"
                                                       type="password" name="password" id="password"
                                                       autoComplete="current-password"/>
                                            </p>
                                            <p className="form-row">
                                                <label
                                                    className="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme">
                                                    <input
                                                        className="woocommerce-form__input woocommerce-form__input-checkbox"
                                                        name="rememberme" type="checkbox" id="rememberme"
                                                        defaultValue="forever"/> <span>Remember me</span>
                                                </label>
                                                <input type="hidden" id="woocommerce-login-nonce"
                                                       name="woocommerce-login-nonce" defaultValue="f0e969fd27"/><input
                                                type="hidden" name="_wp_http_referer" defaultValue="/my-account/"/>
                                                <button onClick={onClickSubmit} type="submit"
                                                        className="woocommerce-button button woocommerce-form-login__submit"
                                                        name="login" value="Log in">Log in
                                                </button>
                                            </p>
                                            <p className="woocommerce-LostPassword lost_password">
                                                <a href="#">Lost
                                                    your password?</a>
                                            </p>
                                        </form>
                                    </div>
                                    <div className="u-column2 col-2">
                                        <h2>Register</h2>
                                        <form method="post"
                                              className="woocommerce-form woocommerce-form-register register">
                                            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                                <label htmlFor="reg_email">Email address&nbsp;<span
                                                    className="required">*</span></label>
                                                <input type="email"
                                                       className="woocommerce-Input woocommerce-Input--text input-text"
                                                       name="email" id="reg_email" autoComplete="email"/>
                                            </p>
                                            <p>A password will be sent to your email address.</p>
                                            <div className="woocommerce-privacy-policy-text">
                                                <p>Your personal data will be used to support your experience throughout
                                                    this website, to manage access to your account, and for other
                                                    purposes described in our <a href="#"
                                                                                 className="woocommerce-privacy-policy-link" >privacy policy</a>.</p>
                                            </div>
                                            <p className="woocommerce-form-row form-row">
                                                <input type="hidden" id="woocommerce-register-nonce"
                                                       name="woocommerce-register-nonce"
                                                       defaultValue="2361821e0b"/><input type="hidden"
                                                                                         name="_wp_http_referer"
                                                                                         defaultValue="/my-account/"/>
                                                <button onClick={onClickSubmit} type="submit"
                                                        className="woocommerce-Button woocommerce-button button woocommerce-form-register__submit"
                                                        name="register" value="Register">Register
                                                </button>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end my-account-section */}

            <Instagram/>
            <Footer/>
        </Fragment>
    );
}

export default MyAccount;