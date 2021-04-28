import React, {Fragment} from 'react';
import Slider from "react-slick";
import ReactTooltip from 'react-tooltip';
import ShopAction from "./ShopAction";

import '../products/products.css';

/**
 * demo date
 */
import productsData from '../../data/products.json';
import {Link} from "react-router-dom";

/**
 * Recent Products component
 * @param onQuickViewClick
 * @returns {*}
 * @constructor
 */
function RecentProducts({onQuickViewClick}) {

    /**
     * slider settings
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
            {/* start trendy-product-section */}
            <section className="best-seller-section section-padding">
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="section-title-s2">
                                <h2>Best Seller</h2>
                            </div>
                            <a href="#" className="more-products">More products</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="products-wrapper">
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
                                                            <ShopAction onQuickViewClick={onQuickViewClick} item={item} />
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <h4>
                                                            <Link to="/single-slider-images">
                                                                {item.title}
                                                            </Link></h4>
                                                        <span className="woocommerce-Price-amount amount">
                                                            <ins>
                                                                <span className="woocommerce-Price-amount amount">
                                                                <bdi>
                                                                    <span
                                                                      className="woocommerce-Price-currencySymbol">{item.Symbol}</span>{item.price}</bdi>
                                                                </span>
                                                            </ins>
                                                            {parseInt(item.price) < parseInt(item.oldPrice) ?
                                                                <del>
                                                                    <span className="woocommerce-Price-amount amount">
                                                                        <bdi>
                                                                            <span className="woocommerce-Price-currencySymbol">{item.Symbol}
                                                                            </span>{item.oldPrice}
                                                                        </bdi>
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
                        </div>
                    </div>
                </div>
                {/* end container-1410 */}
            </section>
            {/* end trendy-product-section */}
            <ReactTooltip className='tool-tip' effect='solid'/>
        </Fragment>
    );
}

export default RecentProducts;