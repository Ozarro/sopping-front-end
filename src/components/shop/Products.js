import React, {Fragment, useEffect} from 'react';
import {Link} from "react-router-dom";
import {BACK_END_URL} from "../../api/index";
const FILE_URL = BACK_END_URL.DEFAULT_FILE_URL;

/**
 * Products
 * @param HandelQuickViewData
 * @param products
 * @param ordering
 * @returns {*}
 * @constructor
 */
function Products({HandelQuickViewData, products, ordering}) {
    return (
        <Fragment>
            <ul className={"products " + (ordering == 1 ? 'default-column' : ordering == 2 ? 'three-column' : ordering == 3 ? 'list-view' : '')}>
                {
                    products.map((item, index) => (
                        <li key={index} className="product">
                            <div className="product-holder">
                                {parseInt(item.price) < parseInt(item.price) ?
                                    <div className="product-badge discount">
                                        {
                                            Math.round(((parseInt(item.price) - parseInt(item.price)) / parseInt(item.price)) * 100)
                                        }
                                        %</div> : ''
                                }
                                <Link to={{
                                    pathname : `/single-slider-images`,
                                    pCode : item.pCode
                                    }} params = {{pCode : item.pCode}}>
                                    <img loading="lazy" src={FILE_URL + item.image} alt="Product Image"/>
                                </Link>
                            </div>
                            <div className="product-info">
                                <h4>
                                    <Link to={{
                                        pathname : `/single-slider-images`,
                                        pCode : item.pCode
                                    }} params = {{pCode : item.pCode}}>
                                        {item.pName}
                                    </Link>
                                </h4>
                                <span className="woocommerce-Price-amount amount">
                                    <ins>
                                        <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                                <span className="woocommerce-Price-currencySymbol">{item.Symbol}</span>
                                                {item.price}
                                            </bdi>
                                        </span>
                                    </ins>
                                    {parseInt(item.price) < parseInt(item.price) ?
                                        <del>
                                            <span className="woocommerce-Price-amount amount">
                                            <bdi><span
                                                className="woocommerce-Price-currencySymbol">{item.Symbol}</span>{item.price}</bdi>
                                            </span>
                                        </del> : ''
                                    }
                                </span>
                                <p className="product-description">{item.description}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </Fragment>
    );
}

export default Products;