import React, {Fragment} from 'react';

/**
 * Category Widget
 * @returns {*}
 * @constructor
 */
function CategoryWidget() {

    return (
        <Fragment>
            <div className="widget category-widget">
                <h3>Categories</h3>
                <ul>
                    <li><a href="#">Funding <span>(2)</span></a></li>
                    <li><a href="#">Charity organization <span>(7)</span></a></li>
                    <li><a href="#">Helpless <span>(51)</span></a></li>
                    <li><a href="#">Charity <span>(5)</span></a></li>
                    <li><a href="#">Children <span>(10)</span></a></li>
                </ul>
            </div>
        </Fragment>
    );
}

export default CategoryWidget;