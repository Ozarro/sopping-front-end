import React, {Fragment} from 'react';
import NewsletterWidget from "../widget/NewsletterWidget";
import ContactWidget from "../widget/ContactWidget";
import CompanyWidget from "../widget/CompanyWidget";
import PaymentWidget from "../widget/PaymentWidget";

/**
 * footer component
 * @returns {*}
 * @constructor
 */
function Footer() {

    return (
        <Fragment>
            {/* start site-footer */}
            <footer className="site-footer">
                <div className="container-1410">
                    <div className="row widget-area">
                        <div className="col-lg-4 col-xs-6  widget-col about-widget-col">
                            <NewsletterWidget/>
                        </div>
                        <div className="col-lg-4 col-xs-6 widget-col">
                            <ContactWidget/>
                        </div>
                        <div className="col-lg-2 col-xs-6 widget-col">
                            <CompanyWidget/>
                        </div>
                        <div className="col-lg-2 col-xs-6 widget-col">
                            <PaymentWidget/>
                        </div>
                    </div>
                </div>
                {/* end container */}
                <div className="lower-footer">
                    <div className="container-1410">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="lower-footer-inner clearfix">
                                    <div>
                                        <p>© 2021 Ozarro , All Rights Reserved</p>
                                    </div>
                                    <div className="social">
                                        <ul className="clearfix">
                                            <li><a href="https://www.facebook.com/Ozarroclothing" title="Facebook">fb</a></li>
                                            <li><a href="#" title="Twitter">tw</a></li>
                                            <li><a href="#" title="Instagram">ig</a></li>
                                            <li><a href="#" title="Pinterest">pr</a></li>
                                        </ul>
                                    </div>
                                    <div className="extra-link">
                                        <ul>
                                            <li><a href="#">Privacy </a></li>
                                            <li><a href="#">Terms</a></li>
                                            <li><a href="#">Promo T&amp;Cs Apply</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* end site-footer */}
        </Fragment>
    );
}


export default Footer;