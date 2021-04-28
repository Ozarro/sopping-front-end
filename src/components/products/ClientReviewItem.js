import React, {Fragment} from 'react';

/**
 * Client Review Item Component
 * @param img
 * @param time
 * @param text
 * @returns {*}
 * @constructor
 */
function ClientReviewItem({img, time, text}) {

    return (
        <Fragment>
            <div className="client-rv">
                <div className="client-pic">
                    <img src={process.env.PUBLIC_URL + img} alt=""/>
                </div>
                <div className="details">
                    <div className="name-rating-time">
                        <div className="name-rating">
                            <div>
                                <h4>Hone</h4>
                            </div>
                            <div className="rating">
                                <i className="fi flaticon-star"/>
                                <i className="fi flaticon-star"/>
                                <i className="fi flaticon-star"/>
                                <i className="fi flaticon-star"/>
                                <i className="fi flaticon-star"/>
                            </div>
                        </div>
                        <div className="time">
                            <span>{time}</span>
                        </div>
                    </div>
                    <div className="review-body">
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ClientReviewItem;