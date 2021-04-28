import React, {Fragment} from 'react';
import Slider from "react-slick";
import ReactTooltip from 'react-tooltip';

import '../products/products.css';

/**
 * demo data
 */
import productsData from '../../data/products.json';
import {Link} from "react-router-dom";

/**
 * Recent Single Products component
 * @param onQuickViewClick
 * @returns {*}
 * @constructor
 */
function RecentSingleProducts({onQuickViewClick}) {

    /**
     * slider settings
     * @type {{swipeToSlide: boolean, dots: boolean, infinite: boolean, responsive: *[], slidesToScroll: number, focusOnSelect: boolean, slidesToShow: number, autoplay: boolean, speed: number, autoplaySpeed: number}}
     */
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 300,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Fragment>
            <div className="realted-porduct">
                <h3>Related product</h3>
                <ul className="products product-row-slider">
                    <Slider {...settings}>
                        {
                            productsData.map((item, index) => (
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
                                                <li><a href="#" title="Quick view!" data-tip="Quick view!"
                                                       onClick={
                                                           e => onQuickViewClick(e, item)
                                                       }
                                                ><i className="fi flaticon-view"/></a>
                                                </li>
                                                <li><a href="#" title="Add to Wishlist!" data-tip="Add to Wishlist!"><i
                                                    className="fi icon-heart-shape-outline"/></a></li>
                                                <li><a href="#" title="Add to cart!" data-tip="Add to cart!"><i
                                                    className="fi flaticon-shopping-cart"/></a></li>
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
                                                <bdi><span className="woocommerce-Price-currencySymbol">{item.Symbol}</span>{item.price}</bdi>
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
                                    </div>
                                </li>
                            ))
                        }
                    </Slider>
                </ul>
            </div>
            <ReactTooltip className='tool-tip' effect='solid'/>
        </Fragment>
    );
}

export default RecentSingleProducts;