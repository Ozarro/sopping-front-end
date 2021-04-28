import React, {Fragment} from 'react';

/**
 * Add Review component
 * @returns {*}
 * @constructor
 */
function AddReview() {

    return (
        <Fragment>
            <div className="review-form">
                <h4>Here you can review the item</h4>
                <form>
                    <div>
                        <input type="text" className="form-control" placeholder="Name *" required/>
                    </div>
                    <div>
                        <input type="email" className="form-control" placeholder="Email *" required/>
                    </div>
                    <div>
                        <textarea className="form-control" placeholder="Review *" defaultValue={""}/>
                    </div>
                    <div className="rating-wrapper">
                        <div className="rating">
                            <a href="#" className="star-1">
                                <i className="ti-star"/>
                            </a>
                            <a href="#" className="star-1">
                                <i className="ti-star"/>
                            </a>
                            <a href="#" className="star-1">
                                <i className="ti-star"/>
                            </a>
                            <a href="#" className="star-1">
                                <i className="ti-star"/>
                            </a>
                            <a href="#" className="star-1">
                                <i className="ti-star"/>
                            </a>
                        </div>
                        <div className="submit">
                            <button type="submit" className="theme-btn">Post review</button>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

export default AddReview;