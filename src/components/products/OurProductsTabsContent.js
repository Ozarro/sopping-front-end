import React, {Fragment} from 'react';
import productsData from "../../data/products";
import ProductItem from "./ProductItem";

/**
 * Our Products Tabs Content
 * @param onQuickViewClick
 * @param tabSelected
 * @returns {*}
 * @constructor
 */
function OurProductsTabsContent({onQuickViewClick, tabSelected}) {

    /**
     * Shuffles array in place.
     * @param {Array} a items An array containing the items.
     */
    const shuffle = (a) => {
        let j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    };

    const products = shuffle(productsData);

    return (
        <Fragment>
            <div className="tab-content">
                <div className={"tab-pane " + (tabSelected === 1 ? 'active' : 'fade')} id="tab-1">
                    <ul className="products">
                        {products.map((item, index) => (
                            <ProductItem key={index} onQuickViewClick={onQuickViewClick} item={item}/>
                        ))}
                    </ul>
                </div>

                <div className={"tab-pane " + (tabSelected === 2 ? 'active' : 'fade')} id="tab-2">
                    <ul className="products">
                        {products.map((item, index) => (
                            <ProductItem key={index} onQuickViewClick={onQuickViewClick} item={item}/>
                        ))}
                    </ul>
                </div>

                <div className={"tab-pane " + (tabSelected === 3 ? 'active' : 'fade')} id="tab-3">
                    <ul className="products">
                        {products.map((item, index) => (
                            <ProductItem key={index} onQuickViewClick={onQuickViewClick} item={item}/>
                        ))}
                    </ul>
                </div>

            </div>
            {/* end tab-content */}
        </Fragment>
    );
}

export default OurProductsTabsContent;