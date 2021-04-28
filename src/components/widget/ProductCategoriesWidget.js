import React, {Fragment} from 'react';

/**
 * Product Categories Widget
 * @returns {*}
 * @constructor
 */
function ProductCategoriesWidget() {

    return (
        <Fragment>
            <div className="widget woocommerce widget_product_categories">
                <h3>Filter by categories</h3>
                <ul className="product-categories">
                    <li className="cat-item cat-parent">
                        <a href="#">Clothing</a>
                        <ul className="children">
                            <li className="cat-item cat-item-213">
                                <a href="#">Accessories</a>
                            </li>
                            <li className="cat-item cat-item-212">
                                <a href="#">Hoodies</a>
                            </li>
                            <li className="cat-item cat-item-211">
                                <a href="#">Tshirts</a>
                            </li>
                        </ul>
                    </li>
                    <li className="cat-item">
                        <a href="#">Decor</a>
                    </li>
                    <li className="cat-item">
                        <a href="#">Music</a>
                    </li>
                    <li className="cat-item">
                        <a href="#">Uncategorized</a>
                    </li>
                </ul>
            </div>
        </Fragment>
    );
}

export default ProductCategoriesWidget;