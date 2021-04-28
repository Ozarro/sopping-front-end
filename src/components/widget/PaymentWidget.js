import React, {Fragment} from 'react';

/**
 * Payment Widget
 * @returns {*}
 * @constructor
 */
function PaymentWidget() {

    return (
        <Fragment>
            <div className="widget payment-widget">
                <h3>Payment &amp; Shipping</h3>
                <ul>
                    <li><a href="#">Payment method</a></li>
                    <li><a href="#">Tearms of use</a></li>
                    <li><a href="#">Shipping policy</a></li>
                    <li><a href="#">Shipping guide</a></li>
                    <li><a href="#">Return policy</a></li>
                </ul>
            </div>
        </Fragment>
    );
}

export default PaymentWidget;