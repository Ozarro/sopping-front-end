import React, {Fragment} from 'react';

/**
 * home feature section item get icon title and text parameter
 * @param icon
 * @param title
 * @param text
 * @returns {*}
 * @constructor
 */
function PartnersItem({img, link}) {
    return (
        <Fragment>
            <div className="grid">
                <a href={link}><img src={img} alt=""/></a>
            </div>
        </Fragment>
    );
}

export default PartnersItem;