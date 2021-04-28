import React, {Fragment} from 'react';

/**
 * Instagram item component
 * @param link
 * @param img
 * @returns {*}
 * @constructor
 */
function InstagramItem({link, img}) {

    return (
        <Fragment>
            <div className="grid">
                <a href={link}>
                    <img loading="lazy" src={img} alt=""/>
                </a>
            </div>
        </Fragment>
    );
}

export default InstagramItem;