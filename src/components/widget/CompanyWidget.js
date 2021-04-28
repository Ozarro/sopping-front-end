import React, {Fragment} from 'react';

/**
 * Company Widget
 * @returns {*}
 * @constructor
 */
function CompanyWidget() {

    return (
        <Fragment>
            <div className="widget company-widget">
                <h3>Company</h3>
                <ul>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Best services</a></li>
                    <li><a href="#">Recent insight</a></li>
                    <li><a href="#">Shipping guid</a></li>
                    <li><a href="#">Privacy policy</a></li>
                </ul>
            </div>
        </Fragment>
    );
}

export default CompanyWidget;