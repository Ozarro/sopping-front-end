import React, {Fragment} from 'react';
import {BACK_END_URL} from "../../api/index";
const FILE_URL = BACK_END_URL.DEFAULT_FILE_URL;

/**
 * cart item component
 * @param data
 * @returns {*}
 * @constructor
 */
function CartItem({data}) {

    return (
        <Fragment>
            <tr className="cart_item">
                <td className="product-remove">
                    <a href="#" className="remove" title="Remove this item" data-product_id={data.itemId} data-product_sku="my name is">×</a>
                </td>
                <td className="product-thumbnail">
                    <a href={data.link}>
                        <img width={57} height={70} src={FILE_URL + data.image} className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt="#"/>
                    </a>
                </td>
                <td className="product-name" data-title="Product">
                    <Link to={`/single-slider-images/${data.pCode}`} params = {{pCode : item.pCode}}>
                        {data.pName}
                    </Link>
                </td>
                <td className="product-price" data-title="Price">
                    <span className="woocommerce-Price-amount amount">
                        <span className="woocommerce-Price-currencySymbol">Rs. </span>
                        {data.cartItemPrice}
                    </span>
                </td>
                <td className="product-quantity" data-title="Quantity">
                    <div className="quantity">
                        <button className="btn btn-default bootstrap-touchspin-up" type="button"><i className="glyphicon glyphicon-chevron-up"></i></button>
                        <input type="number" step={1} min={0} name="cart[3c59dc048e8850243be8079a5c74d079][qty]" defaultValue={data.quantity} title="Qty" className="product-count input-text qty text"/>
                        <button className="btn btn-default bootstrap-touchspin-down" type="button"><i className="glyphicon glyphicon-chevron-down"></i></button>
                    </div>
                </td>
                <td className="product-subtotal" data-title="Total">
                    <span className="woocommerce-Price-amount amount">
                        <span className="woocommerce-Price-currencySymbol">Rs. </span>
                        {item.quantity * parseFloat(item.cartItemPrice)}
                    </span>
                </td>
            </tr>
        </Fragment>
    );
}

export default CartItem;