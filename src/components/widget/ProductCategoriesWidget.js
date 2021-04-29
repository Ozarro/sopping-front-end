import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

/**
 * Product Categories Widget
 * @returns {*}
 * @constructor
 */
function ProductCategoriesWidget(props) {
    return (
        <Fragment>
            <div className="widget woocommerce widget_product_categories">
                <h3>Filter by categories</h3>
                <ul className="product-categories">
                    <li className="cat-item cat-parent">
                        <Link to="#" onClick={() => {props.onCategoryChange({})}}>All</Link>
                    </li>
                    { props.categories ? props.categories.map(
                        (item, index) => {
                            return (
                                <li className="cat-item cat-parent">
                                    <Link to="#" onClick={() => {props.onCategoryChange(item)}}>{item.name}</Link>
                                </li>
                            );
                        }
                    ) : ""}

                </ul>
            </div>
        </Fragment>
    );
}

export default ProductCategoriesWidget;