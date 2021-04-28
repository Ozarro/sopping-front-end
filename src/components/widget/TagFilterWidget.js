import React, {Fragment} from 'react';

/**
 * Tag Filter Widget
 * @returns {*}
 * @constructor
 */
function TagFilterWidget() {

    return (
        <Fragment>
            <div className="widget woocommerce widget_product_tag_cloud">
                <h3>Filter by Product tags</h3>
                <div className="tagcloud">
                    <a href="#" className="tag-cloud-link">Women</a>
                    <a href="#" className="tag-cloud-link">Collection</a>
                    <a href="#" className="tag-cloud-link">Jense</a>
                </div>
            </div>
        </Fragment>
    );
}

export default TagFilterWidget;