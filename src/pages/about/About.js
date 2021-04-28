import React, {Fragment} from 'react';
import Slider from "react-slick";
import Footer from '../../components/global/Footer';
import Instagram from '../../components/global/Instagram';
import PageTitle from '../../components/global/PageTitle';
import Header from '../../components/header/Header';

import './about.css';

/**
 * demo data
 */
import testimonialsData from '../../data/testimonial.json';
import postsData from '../../data/posts.json';
import {NavLink} from "react-router-dom";

/**
 * About page
 * @param options
 * @returns {*}
 * @constructor
 */
function About({ options }) {

    /**
     * slider settings
     */
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        focusOnSelect: false
    };

    return (
        <Fragment>
            <Header options={options} />

            <PageTitle name="About us"/>

            {/* start about-section */}
            <section className="about-section section-padding">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col col-lg-8">
                            <div className="about-area">
                                <div className="info">
                                    <span>About us</span>
                                    <h2>Clothes that will be your best friends</h2>
                                    <p>Compared with the size of the rest of him, waved about helplessly as he looked to
                                        me gregor then turned to look</p>
                                    <NavLink to="/contact" className="theme-btn-s3">Contact us</NavLink>
                                </div>
                                <div className="img-holder">
                                    <img loading="lazy" src={process.env.PUBLIC_URL + "/assets/images/about.jpg"} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-4">
                            <div className="mission-vision-area">
                                <div>
                                    <h3>Our mission</h3>
                                    <p>Pitifully thin compared with the size of the rest of him, waved about helplessly
                                        as he looked. "What's happened to me gregor then turned to look out the window
                                        at the dull weather deal to the day</p>
                                </div>
                                <div>
                                    <h3>Goal of our business</h3>
                                    <p>Pitifully thin compared with the size of the rest of him, waved about helplessly
                                        as he looked. "What's happened to me gregor then turned to look out the window
                                        at the dull weather deal to the day</p>
                                </div>
                                 <NavLink to="/shop-full-width" className="theme-btn">Go to shop</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end about-section */}

            {/* start testimonials-section */}
            <section className="testimonials-section">
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="section-title-s4">
                                <h2>Client's quote</h2>
                                <p>Travelling salesman and above it there hung a picture</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-md-6">
                            <div className="testimonial-grids testimonials-slider">
                                <Slider {...settings}>
                                    {
                                        testimonialsData.map((item, index) => (
                                            <div key={index} className="grid">
                                                <p>“{item.text}”</p>
                                                <div className="client-info">
                                                    <h5>{item.name}</h5>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end testimonials-section */}

            {/* start blog-section */}
            <section className="blog-section section-padding">
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="section-title">
                                <span>Recent news</span>
                                <h2>From our blog</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="blog-grids clearfix">
                                {
                                    postsData.map((item, index) => (
                                        <div key={index} className="post">
                                            <div className="entry-media">
                                                <img src={process.env.PUBLIC_URL + item.mainImg} alt=""/>
                                            </div>
                                            <div className="entry-details">
                                                <div className="entry-meta">
                                                    <div className="date">{item.createdDate}</div>
                                                    <div className="tags">
                                                        {
                                                            item.categories.map((category, i) =>
                                                                <a key={i} href={category.link}>{category.name}</a>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                                <h3><a href="#">{item.title}</a></h3>
                                                <a href="#" className="read-more">Read More <i
                                                    className="fi flaticon-next"/></a>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end blog-section */}
            <Instagram/>
            <Footer/>
        </Fragment>
    );
}

export default About;