import React from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import Footer from '../../components/global/Footer';
import Instagram from '../../components/global/Instagram';
import PageTitle from '../../components/global/PageTitle';
import Header from '../../components/header/Header';
import Pagination from "../../components/global/Pagination";

import './blog.css';

/**
 * demo data
 */
import blogMasonryData from '../../data/masonry-blog.json';
import {NavLink} from "react-router-dom";

/**
 * Masonary blog page
 * @param options
 * @returns {*}
 * @constructor
 */
function Masonary({ options }) {

    return (
        <>
            <Header options={options} />
            <PageTitle name="Cart"/>

            {/* start blog-pg-section */}
            <section className="blog-pg-section blog-masonry-4-columns section-padding">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="blog-content masonry-grids">
                                <ResponsiveMasonry
                                    columnsCountBreakPoints={{350: 1, 750: 2, 900: 3, 1024: 4}}
                                >
                                    <Masonry>
                                        {
                                            blogMasonryData.map((item, index) => (
                                                <div key={index} className="post format-standard-image">
                                                    <div className="entry-media">
                                                        <img src={process.env.PUBLIC_URL + item.mainImg} alt=""/>
                                                    </div>
                                                    <div className="entry-details">
                                                        <div className="entry-meta">
                                                            <div className="date">{item.date}</div>
                                                            <div className="tags">
                                                                {
                                                                    item.categories.map((data, i) =>
                                                                        <NavLink key={i} to={data.link}> {data.name}</NavLink>
                                                                    )
                                                                }
                                                            </div>
                                                        </div>
                                                        <h3>
                                                            <NavLink to={item.link}> {item.title}</NavLink>
                                                        </h3>
                                                        <p>{item.miniContent}</p>
                                                        <NavLink to={item.link} className="read-more">
                                                            Read More <i className="fi flaticon-next"/></NavLink>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </Masonry>
                                </ResponsiveMasonry>
                            </div>

                            <Pagination extraClass=""/>

                        </div>
                    </div>
                </div>
                {/* end container */}
            </section>
            {/* end blog-pg-section */}

            <Instagram/>
            <Footer/>
        </>
    );
}

export default Masonary;