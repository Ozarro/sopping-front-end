import React, {Fragment} from 'react';

/**
 * home feature section item get icon title and text parameter
 * @param icon
 * @param title
 * @param text
 * @returns {*}
 * @constructor
 */
function Feature1Item({icon, title, text}) {
    return (
        <Fragment>
            <div>
                <div className="icon">
                    <i className={icon}/>
                </div>
                <div className="info">
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            </div>
        </Fragment>
    );
}

export default Feature1Item;