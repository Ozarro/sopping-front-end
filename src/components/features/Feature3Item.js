import React, {Fragment} from 'react';

/**
 * home feature section item get icon title and text parameter
 * @param icon
 * @param title
 * @param text
 * @returns {*}
 * @constructor
 */
function Feature3Item({img, title, link}) {
    return (
        <Fragment>
            <div className="grid">
                <div className="img-holder">
                    <a href="#"><img src={process.env.PUBLIC_URL + img} alt="" /></a>
                </div>
                <div className="details">
                    <h3>{title}</h3>
                    <a href={link} className="theme-btn-s6">Shop Now</a>
                </div>
            </div>
        </Fragment>
    );
}

export default Feature3Item;