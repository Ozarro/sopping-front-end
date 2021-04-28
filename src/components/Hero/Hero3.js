import React, {Fragment} from 'react';
import Slider from "react-slick";
import '../Hero/hero.css';

/**
 * hero demo data
 */
import heroData from '../../data/hero3.json';

/**
 * Hero for home style 3
 * @returns {*}
 * @constructor
 */
function Hero3() {

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
            <section className="hero-3">
                <Slider {...settings}>
                    {
                        heroData.map((item, index) => (
                            <div key={index}>
                                <div className="swiper-slide" style={{background: `${item.color}`}}>
                                    <div className="slide-inner">
                                        <div className="slide-title">
                                            <h2>{item.title}</h2>
                                        </div>
                                        <div className="clearfix"/>
                                        <div className="slide-img">
                                            <img src={process.env.PUBLIC_URL + item.img} alt=""/>
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

export default Hero3;