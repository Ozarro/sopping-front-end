import React, {Fragment} from 'react';

/**
 * Recent Post Widget Item
 * @param img
 * @param title
 * @param link
 * @param date
 * @returns {*}
 * @constructor
 */
function RecentPostWidgetItem({img, title, link, date}) {

    return (
        <Fragment>
            <div className="post">
                <div className="img-holder">
                    <img src={img} alt=""/>
                </div>
                <div className="details">
                    <h4><a href={link}> {title} </a></h4>
                    <span className="date">{date}</span>
                </div>
            </div>
        </Fragment>
    );
}

export default RecentPostWidgetItem;