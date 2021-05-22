import React, {Fragment} from 'react';

/**
 * Contact Widget
 * @returns {*}
 * @constructor
 */
function ContactWidget() {

    return (
        <Fragment>
            <div className="widget contact-widget">
                <h3>Contact info</h3>
                <ul>
                    <li>Phone: 077-4020122</li>
                    <li>Email: ozarroclothing@gmail.com</li>
                    <li>Address: Np90, Narahenpita, Colombo08</li>
                </ul>
            </div>
        </Fragment>
    );
}

export default ContactWidget;