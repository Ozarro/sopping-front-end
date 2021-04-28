import React, {Fragment} from 'react';
import Slider from "react-slick";
import '../Hero/hero.css';

/**
 * hero demo data
 */
import heroData from '../../data/hero2.json';
import {NavLink} from "react-router-dom";

/**
 * Hero for home style 2
 * @returns {*}
 * @constructor
 */
function Hero2() {

    /**
     * slider settings with parameters
     * @type {{fade: boolean, dots: boolean, infinite: boolean, slidesToScroll: number, focusOnSelect: boolean, slidesToShow: number, lazyLoad: boolean, speed: number, autoplay: boolean}}
     */
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        focusOnSelect: false,
        fade: true,
        lazyLoad: false
    };

    return (
        <Fragment>
            <section className="hero-2">
                <Slider {...settings}>
                    {
                        heroData.map((item, index) => (
                            <div key={index} className="swiper-slide">
                                <div className="slide-inner slide-bg-image"
                                     style={{backgroundImage: `url(${process.env.PUBLIC_URL + item.img})`}}>
                                    <div className="container-1410">
                                        <div className="row">
                                            <div className="col col-xs-12">
                                                <div className="inner">
                                                    <div className="sell-off">
                                                        <p>50% sell off for limited time</p>
                                                    </div>
                                                    <div className="slide-title">
                                                        <h2>Fashion</h2>
                                                    </div>
                                                    <div className="clearfix"/>
                                                    <div className="slide-btns">
                                                        <NavLink to="/shop-right-sidebar" className="theme-btn-s7 shop-new">Shop Now</NavLink>
                                                        <NavLink to="/shop-right-sidebar" className="theme-btn-s7">Find More</NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </section>
        </Fragment>
    );
}

export default Hero2;