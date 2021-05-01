import React, {Fragment, useState} from 'react';

import Footer from '../../components/global/Footer';
import Instagram from '../../components/global/Instagram';
import Header from '../../components/header/Header';
import PageTitle from '../../components/global/PageTitle';

import { toast } from "react-toastify";
import api from "../../api/index";

import {useDispatch, useSelector} from "react-redux";
import {thunks, actions, cleanQuery} from "../../store";
import { useHistory } from 'react-router';


/**
 * ContactUs page
 * @param options
 * @returns {*}
 * @constructor
 */
function ContactUs({ options }) {
    const dispatch = useDispatch();
    const [contactData, setContactData] = useState({
        name : "",
        email : "",
        type : "",
        message : ""
    });
    const messageTypes = ["Issue", "Feedback", "Opinion", "Message"];


    const handleContactUsSubmit = async (e) => {
        e.preventDefault();
        console.log(contactData);
        if(contactData.email == "" | contactData.name == "" | contactData.type == "" | contactData.message == ""){
            toast.error("Please fill the required fields and submit");
            return;
        }
        dispatch(actions.ui.setPreloadShow(true));
        const res = await api.customer.post.contactUs(contactData);
        dispatch(actions.ui.setPreloadShow(false));
        if(res.status === 200){
            toast.success(res.data.message);
        }else{
            toast.error((res[0]) ? res[0].message : res.message);
        }

    }

    /**
     * On Change
     */
    const handleChange = ({ currentTarget: input }) => {
        const { name, value } = input;
        const data = {...contactData};
        data[name] = value;
        setContactData(data);
    };

    /**
     * demo data
     */
    const contactUsData = {
        address: "Ailded frame showed a lady fitted out with fur hat and fur boa who sat upright",
        phone_1: "54875465-65741895-6547",
        phone_2: "2222-3333-4444-555",
        email_1: "Admin@mail.com",
        email_2: "example@mail.com",
        time: "10AM - 5 PM, Sunday closed"
    };

    return (
        <Fragment>
            <Header options={options} />

            <PageTitle name="Contact"/>

            {/* start contact-section */}
            <section className="contact-section contact-pg-section section-padding">
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-lg-10 col-lg-offset-1">
                            <div className="contact-info">
                                <ul>
                                    <li>
                                        <i className="pe-7s-culture"/>
                                        <h4>Office address</h4>
                                        <p>{contactUsData.address}</p>
                                    </li>
                                    <li>
                                        <i className="pe-7s-phone"/>
                                        <h4>Phone number</h4>
                                        <p>{contactUsData.phone_1} <br/>{contactUsData.phone_2}</p>
                                    </li>
                                    <li>
                                        <i className="pe-7s-mail"/>
                                        <h4>Email us</h4>
                                        <p>{contactUsData.email_1} <br/>{contactUsData.email_2}</p>
                                    </li>
                                    <li>
                                        <i className="pe-7s-alarm"/>
                                        <h4>Office time</h4>
                                        <p>{contactUsData.time}</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="contact-form-col">
                                <h2>Let’s talk to us</h2>
                                <div className="contact-form">
                                    <form method="post" className="contact-validation-active" id="contact-form-main">
                                        <div>
                                            <input type="text" name="name" id="name" placeholder="Name*"
                                            value = {contactData.name}
                                                   onChange={handleChange}
                                            />
                                        </div>
                                        <div>
                                            <input type="email" name="email" id="email" placeholder="Email*"
                                                   value = {contactData.email}
                                                   onChange={handleChange}
                                            />
                                        </div>
                                        <div className="fullwidth">
                                            <select name="type"
                                                    onChange={handleChange}
                                            >
                                                <option disabled="disabled">Contact subject</option>
                                                { (messageTypes) ?
                                                    messageTypes.map((item, index) =>
                                                        (<option key = {index} value={item}>{item}</option> )
                                                    )

                                                 : ""}

                                            </select>
                                        </div>
                                        <div className="fullwidth">
                                            <textarea name="message" id="message" placeholder="Case Description..."
                                                      value = {contactData.message}
                                                      onChange={handleChange}
                                            />

                                        </div>
                                        <div className="submit-area">
                                            <button onClick={handleContactUsSubmit} type="submit" className="theme-btn">Submit It Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end contact-section-s3 */}

            {/*  start contact-map */}
            {/*<section className="contact-map-section">*/}
            {/*    <h2 className="hidden">Contact map</h2>*/}
            {/*    <div className="contact-map">*/}
            {/*        <iframe*/}
            {/*            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671"*/}
            {/*            allowFullScreen/>*/}

            {/*    </div>*/}
            {/*</section>*/}
            {/* end contact-map */}

            <Instagram/>
            <Footer/>
        </Fragment>
    );
}

export default ContactUs;