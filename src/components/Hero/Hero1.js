import React, {Fragment} from 'react';
import Slider from "react-slick";
import '../Hero/hero.css';

/**
 * hero demo data
 */
import heroData from '../../data/hero1.json';
import {NavLink} from "react-router-dom";

/**
 * Hero for home style 1
 * @returns {*}
 * @constructor
 */
function Hero1() {

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
        lazyLoad: true
    };

    return (
        <Fragment>
            <section className="hero-1">
                <Slider {...settings}>
                    {
                        heroData.map((item, index) => (
                            <div key={index} className="swiper-slide">
                                <div className="slide-inner slide-bg-image"
                                     style={{backgroundImage: `url(${process.env.PUBLIC_URL + item.img})`}}>
                                    <div className="container-1410">
                                        <div className="slide-text">
                                            <p>{item.text}</p>
                                        </div>
                                        <div className="slide-title">
                                            <h2></h2>
                                        </div>
                                        <div className="clearfix"/>
                                        <div className="slide-btns">
                                            <NavLink to="/shop-right-sidebar" className="theme-btn-s7">Shop Now</NavLink>
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

export default Hero1;