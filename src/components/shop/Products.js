import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

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
                                {parseInt(item.price) < parseInt(item.oldPrice) ?
                                    <div className="product-badge discount">
                                        {
                                            Math.round(((parseInt(item.price) - parseInt(item.oldPrice)) / parseInt(item.price)) * 100)
                                        }
                                        %</div> : ''
                                }
                                <Link to="/single-slider-images">
                                    <img loading="lazy" src={process.env.PUBLIC_URL + item.mainImg} alt=""/>
                                </Link>
                                <div className="shop-action-wrap">
                                    <ul className="shop-action">
                                        <li>
                                            <a href="#" title="Quick view!"
                                               data-tip="Quick view!"
                                               onClick={
                                                   e => HandelQuickViewData(e, item)
                                               }
                                            >
                                                <i className="fi flaticon-view"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="Add to cart!"
                                               data-tip="Add to cart!">
                                                <i className="fi flaticon-shopping-cart"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="product-info">
                                <h4>
                                    <Link to="/single-slider-images">
                                        {item.title}
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
                                    {parseInt(item.price) < parseInt(item.oldPrice) ?
                                        <del>
                                            <span className="woocommerce-Price-amount amount">
                                            <bdi><span
                                                className="woocommerce-Price-currencySymbol">{item.Symbol}</span>{item.oldPrice}</bdi>
                                            </span>
                                        </del> : ''
                                    }
                                </span>
                                <p className="product-description">{item.content}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </Fragment>
    );
}

export default Products;