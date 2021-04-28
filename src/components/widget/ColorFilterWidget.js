import React, {Fragment} from 'react';

/**
 * Color Filter Widget
 * @returns {*}
 * @constructor
 */
function ColorFilterWidget() {

    return (
        <Fragment>
            <div className="widget woocommerce widget_layered_nav woocommerce-widget-layered-nav">
                <h3>Filter by Color</h3>
                <ul className="woocommerce-widget-layered-nav-list">
                    <li className="woocommerce-widget-layered-nav-list__item wc-layered-nav-term ">
                        <a href="#">Blue</a>
                        <span className="count">(4)</span>
                    </li>
                    <li className="woocommerce-widget-layered-nav-list__item wc-layered-nav-term ">
                        <a href="#">Blue</a>
                        <span className="count">(4)</span>
                    </li>
                </ul>
            </div>
        </Fragment>
    );
}

export default ColorFilterWidget;