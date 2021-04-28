import React, {Fragment} from 'react';
import ShopAction from "./ShopAction";
import {NavLink} from "react-router-dom";

/**
 * Product Item component
 * @param onQuickViewClick
 * @param item
 * @returns {*}
 * @constructor
 */
function ProductItem({onQuickViewClick, item}) {

    return (
        <Fragment>
            <li className="product">
                <div className="product-holder">
                    {parseInt(item.price) < parseInt(item.oldPrice) ?
                        <div className="product-badge discount">
                            {
                                Math.round(((parseInt(item.price) - parseInt(item.oldPrice)) / parseInt(item.price)) * 100)
                            }
                            %</div> : ''
                    }
                    <NavLink to="/single-slider-images" >
                        <img loading="lazy" src={process.env.PUBLIC_URL + item.mainImg} alt=""/>
                    </NavLink>
                    <div className="shop-action-wrap">
                        <ShopAction onQuickViewClick={onQuickViewClick} item={item}/>
                    </div>
                </div>
                <div className="product-info">
                    <h4>
                        <NavLink to="/single-slider-images" >{item.title}</NavLink>
                    </h4>
                    <span className="woocommerce-Price-amount amount">
                        <ins>
                            <span className="woocommerce-Price-amount amount">
                                <bdi>
                                    <span className="woocommerce-Price-currencySymbol">
                                        {item.Symbol}
                                    </span>
                                    {item.price}
                                </bdi>
                            </span>
                        </ins>
                        {parseInt(item.price) < parseInt(item.oldPrice) ?
                            <del>
                                <span className="woocommerce-Price-amount amount">
                                    <bdi>
                                        <span
                                            className="woocommerce-Price-currencySymbol">{item.Symbol}
                                        </span>{item.oldPrice}
                                    </bdi>
                                </span>
                            </del> : ''
                        }
                    </span>
                </div>
            </li>
        </Fragment>
    );
}

export default ProductItem;