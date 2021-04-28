import React, {Fragment} from 'react';

/**
 * Newsletter Widget
 * @returns {*}
 * @constructor
 */
function NewsletterWidget() {

    return (
        <Fragment>
            <div className="widget newsletter-widget">
                <div className="inner">
                    <h3>Sign Up Now &amp; Get 10% Off</h3>
                    <p>Get timely updates from your favorite products</p>
                    <form>
                        <div className="input-1">
                            <input type="email" className="form-control" placeholder="Email Address *"
                                   required/>
                        </div>
                        <div className="submit clearfix">
                            <button type="submit">Subcribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

export default NewsletterWidget;