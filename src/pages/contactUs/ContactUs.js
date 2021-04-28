import React, {Fragment} from 'react';

import Footer from '../../components/global/Footer';
import Instagram from '../../components/global/Instagram';
import Header from '../../components/header/Header';
import PageTitle from '../../components/global/PageTitle';


/**
 * ContactUs page
 * @param options
 * @returns {*}
 * @constructor
 */
function ContactUs({ options }) {

    const onSubmitForm = (e)=> {
        e.preventDefault();
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
                                            <input type="text" name="name" id="name" placeholder="Name*"/>
                                        </div>
                                        <div>
                                            <input type="email" name="email" id="email" placeholder="Email*"/>
                                        </div>
                                        <div className="fullwidth">
                                            <select name="subject">
                                                <option disabled="disabled">Contact subject</option>
                                                <option>Subject 1</option>
                                                <option>Subject 2</option>
                                                <option>Subject 3</option>
                                            </select>
                                        </div>
                                        <div className="fullwidth">
                                            <textarea name="note" id="note" placeholder="Case Description..." defaultValue={""}/>
                                        </div>
                                        <div className="submit-area">
                                            <button onClick={onSubmitForm} type="submit" className="theme-btn">Submit It Now</button>
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
            <section className="contact-map-section">
                <h2 className="hidden">Contact map</h2>
                <div className="contact-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671"
                        allowFullScreen/>
                </div>
            </section>
            {/* end contact-map */}

            <Instagram/>
            <Footer/>
        </Fragment>
    );
}

export default ContactUs;