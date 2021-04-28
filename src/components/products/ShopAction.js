import React, {Fragment} from 'react';

/**
 * Shop Action
 * @param onQuickViewClick
 * @param item
 * @returns {*}
 * @constructor
 */
function ShopAction({onQuickViewClick, item}) {

    const onClickAction = (e)=> {
        e.preventDefault();
    };

    return (
        <Fragment>
            <ul className="shop-action">
                <li>
                    <a href="#" title="Quick view!"
                       data-tip="Quick view!"
                       onClick={
                           e => onQuickViewClick(e, item)
                       }>
                        <i className="fi flaticon-view"/>
                    </a>
                </li>
                <li>
                    <a onClick={onClickAction} href="#" title="Add to Wishlist!"
                       data-tip="Add to Wishlist!">
                        <i className="fi icon-heart-shape-outline"/>
                    </a>
                </li>
                <li>
                    <a onClick={onClickAction} href="#" title="Add to cart!"
                       data-tip="Add to cart!">
                        <i className="fi flaticon-shopping-cart"/>
                    </a>
                </li>
            </ul>
        </Fragment>
    );
}

export default ShopAction;