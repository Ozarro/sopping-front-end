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
                    <li>Phone: 888-999-000-1425</li>
                    <li>Email: azedw@mail.com</li>
                    <li>Address: 22/1 natinoal city austria, dreem land, Huwai</li>
                </ul>
            </div>
        </Fragment>
    );
}

export default ContactWidget;