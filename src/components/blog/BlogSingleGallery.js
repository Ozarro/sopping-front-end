import React, {Fragment} from 'react';
import Slider from "react-slick";
import EntryMeta from "./EntryMeta";
import {NavLink} from "react-router-dom";

/**
 * single blog with gallery
 * @param data
 * @returns {*}
 * @constructor
 */
function BlogSingleGallery({data}) {

    /**
     * settings for images gallery
     * @type {{fade: boolean, dots: boolean, infinite: boolean, slidesToScroll: number, focusOnSelect: boolean, slidesToShow: number, lazyLoad: boolean, speed: number, autoplay: boolean}}
     */
    const settings = {
        dots: false,
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
            <div className="post format-gallery">
                <div className="entry-media post-slider">
                    <Slider {...settings}>
                        {
                            data.gallery.map((item, index) => (
                                <img key={index} src={process.env.PUBLIC_URL + item.img} alt=""/>
                            ))
                        }
                    </Slider>
                </div>
                <div className="entry-details">
                    <EntryMeta data={data} />
                    <h3><NavLink to={data.link}>{data.title}</NavLink></h3>
                    <p>{data.content}</p>
                    <NavLink to={data.link} className="read-more">Read More <i
                        className="fi flaticon-next"/></NavLink>
                </div>
            </div>
        </Fragment>
    );
}

export default BlogSingleGallery;