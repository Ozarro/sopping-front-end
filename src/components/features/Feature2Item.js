import React, {Fragment} from 'react';
import {NavLink} from "react-router-dom";

/**
 * home feature section item get icon title and text parameter
 * @param icon
 * @param title
 * @param text
 * @returns {*}
 * @constructor
 */
function Feature2Item({img, title, link, wrapClass, innerClass}) {
    return (
        <Fragment>
            <div className={wrapClass}>
                <div className="img-holder">
                    <a href={link}><img src={process.env.PUBLIC_URL + img} alt=""/></a>
                </div>
                <div className="details">
                    <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
                    <NavLink className={innerClass} to={link}>
                        Shop Now
                    </NavLink>
                </div>
            </div>
        </Fragment>
    );
}

export default Feature2Item;
