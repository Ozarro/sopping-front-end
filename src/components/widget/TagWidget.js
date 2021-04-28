import React, {Fragment} from 'react';

/**
 * Tag Widget
 * @returns {*}
 * @constructor
 */
function TagWidget() {

    return (
        <Fragment>
            <div className="widget tag-widget">
                <h3>Tags</h3>
                <ul>
                    <li><a href="#">Charity</a></li>
                    <li><a href="#">Organization</a></li>
                    <li><a href="#">Donation</a></li>
                    <li><a href="#">Manfacturing</a></li>
                    <li><a href="#">Children</a></li>
                    <li><a href="#">Funds</a></li>
                </ul>
            </div>
        </Fragment>
    );
}

export default TagWidget;