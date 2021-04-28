import React, {Fragment} from 'react';
import RecentPostWidgetItem from "./RecentPostWidgetItem";

/**
 * Recent Post Widget
 * @returns {*}
 * @constructor
 */
function RecentPostWidget() {

    return (
        <Fragment>
            <div className="widget recent-post-widget">
                <h3>Recent post</h3>
                <div className="posts">
                    <RecentPostWidgetItem img="/assets/images/recent-posts/img-1.jpg"
                                          link="#" title="Upright, raising a heavy fur muff that covered the whole lower"
                                          date="Jan 19 2021" />

                    <RecentPostWidgetItem img="/assets/images/recent-posts/img-2.jpg"
                                          link="#" title="Arm towards the viewer pegor then turned to look out the window"
                                          date="Jan 19 2021" />

                    <RecentPostWidgetItem img="/assets/images/recent-posts/img-3.jpg"
                                          link="#" title="Housed in a nice, gilded frameshowed a lady fitted out with"
                                          date="Jan 19 2021" />
                </div>
            </div>
        </Fragment>
    );
}

export default RecentPostWidget;