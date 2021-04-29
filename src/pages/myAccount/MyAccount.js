import React, {Fragment, useState} from 'react';

import Footer from '../../components/global/Footer';
import Instagram from '../../components/global/Instagram';
import Header from '../../components/header/Header';
import PageTitle from '../../components/global/PageTitle';

import _ from "lodash";
import Joi from "joi";
import { toast } from "react-toastify";
import api from "../../api/index";

import {useDispatch, useSelector} from "react-redux";
import {getAccessToken, getRefreshToken} from "../../store/user/select";
import {thunks, actions, cleanQuery} from "../../store";

/**
 * My Account Page
 * @param options
 * @returns {*}
 * @constructor
 */
function MyAccount({ options }) {
    const dispatch = useDispatch();

    /**
     * Selectors
     */
    const accessToken = useSelector(getAccessToken); 
    const refreshToken = useSelector(getRefreshToken); 

    const [loginData, setLogInData] = useState({});
    const [registerData, setRegisterData] = useState({});

    /**
     * check this function
     */
    const onClickSubmit = (e) => {
        e.preventDefault();
    };


    const comparePassword = () => {
        return (value, helper) => {
          if (value !== this.state.data.password) {
            return helper.error("any.invalid");
          }
          return value;
        };
        }

    /**
     * 
     * Joi Schemas
     */
    //  const loginSchema = {
    //     email: Joi.string()
    //       .email({ tlds: { allow: false } })
    //       .required()
    //       .label("Email"),
    //     password: Joi.string().required().label("Password"),
    //   };

    /**
   * Schema  Register joi validation
   */
//   const registerSchema = {
//     name: Joi.string().label("Name"),
//     email: Joi.string()
//       .email({ tlds: { allow: false } })
//       .required()
//       .label("Email"),
//     password: Joi.string().min(6).required().label("Password"),
//     confirmPassword: Joi.string()
//       .custom(comparePassword())
//       .required()
//       .label("Confirm Password")
//       .messages({
//         "any.invalid": "Repeat password does not match with the above password",
//       }),
//   };


    const handleLogInSubmit = async (e) => {
        e.preventDefault();
        dispatch(actions.ui.setPreloadShow(true));
        const data = cleanQuery(loginData, ["email", "password"])
        console.log("data", data);
        const res = await dispatch(thunks.user.userLogin(data.email, data.password));
        console.log(res);
        dispatch(actions.ui.setPreloadShow(false));
        
        if(res.status === 200){
            toast.success(res.message); 
            localStorage.setItem("ozarro-user-access-token", accessToken );
            localStorage.setItem("ozarro-user-refresh-token", refreshToken );
            history.push('/home');
        }else{
            toast.error(res.message);
            
        }

    }

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        dispatch(actions.ui.setPreloadShow(true));
        const data = cleanQuery(registerData, ["email","name", "password"])
        const res = await api.user.add.user(data);
        dispatch(actions.ui.setPreloadShow(false));
        if(res.status === 200){
            toast.success(res.message); 
        }else{
            toast.error(res.message); 
        }

    }

    /**
     * On Change
     */
     const loginHandleChange = ({ currentTarget: input }) => {
        const { name, value } = input;
        const data = {...loginData};
        data[name] = value;
        setLogInData(data);
    };

    const registerHandleChange = ({ currentTarget: input }) => {
        const { name, value } = input;
        const data = {...registerData};
        data[name] = value;
        setRegisterData(data);
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
                                        <form className="woocommerce-form woocommerce-form-login login">
                                            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                                <label htmlFor="username">Username or email address&nbsp;<span
                                                    className="required">*</span></label>
                                                <input type="email"
                                                       className="woocommerce-Input woocommerce-Input--text input-text"
                                                       name="email" id="email" 
                                                       autoComplete="email" 
                                                       value={(loginData.email) ? loginData.email : ""}
                                                       onChange={loginHandleChange}
                                                        />
                                            </p>
                                            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                                <label htmlFor="password">Password&nbsp;<span
                                                    className="required">*</span></label>
                                                <input className="woocommerce-Input woocommerce-Input--text input-text"
                                                       type="password" name="password" id="password"
                                                       autoComplete="current-password"
                                                       value={(loginData.password) ? loginData.password : "" }
                                                       onChange={loginHandleChange}
                                                       />
                                            </p>
                                            <p className="form-row">
                                                <label
                                                    className="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme">
                                                    <input
                                                        className="woocommerce-form__input woocommerce-form__input-checkbox"
                                                        name="rememberme" type="checkbox" id="rememberme"
                                                        defaultValue="forever" 
                                                        value={(loginData.rememberme) ? loginData.rememberme : "forever" }
                                                        onChange={loginHandleChange}
                                                         /> <span>Remember me</span>
                                                </label>
                                                {/* <input type="hidden" id="woocommerce-login-nonce"
                                                       name="woocommerce-login-nonce" defaultValue="f0e969fd27"/><input
                                                type="hidden" name="_wp_http_referer" defaultValue="/my-account/"/> */}
                                                <button onClick={handleLogInSubmit} type="submit"
                                                        className="woocommerce-button button woocommerce-form-login__submit"
                                                        name="login" value="Log in">Log in
                                                </button>
                                            </p>
                                            {/* <p className="woocommerce-LostPassword lost_password">
                                                <a href="#">Lost
                                                    your password?</a>
                                            </p> */}
                                        </form>
                                    </div>
                                    <div className="u-column2 col-2">
                                        <h2>Register</h2>
                                        <form
                                              className="woocommerce-form woocommerce-form-register register">
                                            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                                <label htmlFor="reg_email">Email address&nbsp;<span
                                                    className="required">*</span></label>
                                                <input type="email"
                                                       className="woocommerce-Input woocommerce-Input--text input-text"
                                                       name="email" id="reg_email" autoComplete="email"
                                                       value={(registerData.email) ? registerData.email : "" }
                                                        onChange={registerHandleChange}
                                                       />
                                            </p>
                                            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                                <label htmlFor="reg_email">Name&nbsp;<span
                                                    className="required">*</span></label>
                                                
                                                <input type="text"
                                                       className="woocommerce-Input woocommerce-Input--text input-text"
                                                       name="name" id="name" autoComplete="name"
                                                       value={(registerData.name) ? registerData.name : "" }
                                                        onChange={registerHandleChange}
                                                       />
                                            </p>
                                            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                                <label htmlFor="password">Password&nbsp;<span
                                                    className="required">*</span></label>
                                                <input className="woocommerce-Input woocommerce-Input--text input-text"
                                                       type="password" name="password" id="password"
                                                       autoComplete="current-password"
                                                       value={(registerData.password) ? registerData.password : "" }
                                                        onChange={registerHandleChange}
                                                       />
                                            </p>
                                            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                                <label htmlFor="password">Confirm Password&nbsp;<span
                                                    className="required">*</span></label>
                                                <input className="woocommerce-Input woocommerce-Input--text input-text"
                                                       type="password" name="confirmPassword" id="confirmPassword"
                                                       autoComplete="current-password"
                                                       value={(registerData.confirmPassword) ? registerData.confirmPassword : "" }
                                                        onChange={registerHandleChange}
                                                       />
                                            </p>
                                            <div className="woocommerce-privacy-policy-text">
                                                <p>Your personal data will be used to support your experience throughout
                                                    this website, to manage access to your account, and for other
                                                    purposes described in our <a href="#"
                                                    className="woocommerce-privacy-policy-link" >privacy policy</a>.</p>
                                            </div>
                                            <p className="woocommerce-form-row form-row">
                                                {/* <input type="hidden" id="woocommerce-register-nonce"
                                                       name="woocommerce-register-nonce"
                                                       defaultValue="2361821e0b"/><input type="hidden"
                                                                                         name="_wp_http_referer"
                                                                                         defaultValue="/my-account/"/> */}
                                                <button onClick={handleRegisterSubmit} type="submit"
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

            {/* <Instagram/> */}
            <Footer/>
        </Fragment>
    );
}

export default MyAccount;