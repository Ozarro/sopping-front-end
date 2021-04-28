import React, {Fragment} from 'react';

/**
 * product Ordering component
 * @returns {*}
 * @constructor
 */
function Ordering() {

    return (
        <Fragment>
            <form className="woocommerce-ordering" method="get">
                <select name="orderby" className="orderby">
                    <option value="menu_order">Default sorting</option>
                    <option value="popularity">Sort by popularity</option>
                    <option value="rating">Sort by average rating</option>
                    <option value="date">Sort by newness</option>
                    <option value="price">Sort by price: low to high</option>
                    <option value="price-desc">Sort by price: high to low</option>
                </select>
                <input type="hidden" name="post_type" defaultValue="product"/>
            </form>
        </Fragment>
    );
}

export default Ordering;