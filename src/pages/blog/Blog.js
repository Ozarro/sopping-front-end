import React, {useState, Fragment} from 'react';

import Footer from '../../components/global/Footer';
import Instagram from '../../components/global/Instagram';
import PageTitle from '../../components/global/PageTitle';
import Header from '../../components/header/Header';
import AboutWidget from '../../components/widget/AboutWidget';
import CategoryWidget from '../../components/widget/CategoryWidget';
import RecentPostWidget from '../../components/widget/RecentPostWidget';
import SearchWidget from '../../components/widget/SearchWidget';
import TagWidget from '../../components/widget/TagWidget';
import BlogSingleStandard from "../../components/blog/BlogSingleStandard";
import BlogSingleStandardImage from "../../components/blog/BlogSingleStandardImage";
import Pagination from "../../components/global/Pagination";
import BlogSingleGallery from "../../components/blog/BlogSingleGallery";
import BlogSingleQuote from "../../components/blog/BlogSingleQuote";
import BlogSingleVideo from "../../components/blog/BlogSingleVideo";

import './blog.css';


/**
 * Blog page
 * @param options
 * @returns {*}
 * @constructor
 */
function Blog({ options }) {

    /**
     * demo blog Standard Image data
     */
    const blogStandardImage = {
        title: "Appearance is the first impression you convey to others major factor that contributes",
        tags: [
            {
                name: "Fashion",
                link: "#"
            },
            {
                name: "Trend",
                link: "#"
            }
        ],
        date: "27 Nov 2020",
        content: "Hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked out the entire.",
        link: "/blog-single",
        img: "/assets/images/blog/img-1.jpg"
    };

    /**
     * demo blog Standard data
     */
    const blogStandard = {
        title: "Clothing stores and looking for clothing store slogans that could perfectly describe your outfits to customers then",
        tags: [
            {
                name: "Fashion",
                link: "#"
            },
            {
                name: "Trend",
                link: "#"
            }
        ],
        date: "27 Nov 2020",
        content: "Collection of textile samples lay spread out on the table - Samsa was travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with",
        link: "/blog-single"
    };

    /**
     * demo Blog Gallery data
     */
    const BlogGallery = {
        title: "Clothing stores and looking for clothing store slogans that could perfectly describe your outfits to customers then",
        tags: [
            {
                name: "Fashion",
                link: "#"
            },
            {
                name: "Trend",
                link: "#"
            }
        ],
        date: "27 Nov 2020",
        content: "Collection of textile samples lay spread out on the table - Samsa was travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with",
        link: "/blog-single",
        gallery: [
            {
                img: "/assets/images/blog/img-1.jpg"
            },
            {
                img: "/assets/images/blog/img-2.jpg"
            }
        ]
    };

    /**
     * demo Blog Quote data
     */
    const BlogQuote = {
        title: "Clothing stores and looking for clothing store slogans that could perfectly describe your outfits to customers then",
        tags: [
            {
                name: "Fashion",
                link: "#"
            },
            {
                name: "Trend",
                link: "#"
            }
        ],
        date: "27 Nov 2020",
        link: "/blog-single",
    };

    /**
     * demo blog Video data
     */
    const blogVideo = {
        title: "Clothing stores and looking for clothing store slogans that could perfectly describe your outfits to customers then",
        tags: [
            {
                name: "Fashion",
                link: "#"
            },
            {
                name: "Trend",
                link: "#"
            }
        ],
        date: "27 Nov 2020",
        content: "Collection of textile samples lay spread out on the table - Samsa was travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with",
        link: "/blog-single",
        videoId: "7e90gBu4pas",
        img: "/assets/images/blog/img-3.jpg"
    };

    return (
        <Fragment>
            <Header options={options} />

            <PageTitle name="Blog"/>

            {/* start blog-pg-section */}
            <section className="blog-pg-section section-padding">
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-md-9">
                            <div className="blog-content">

                                <BlogSingleStandardImage data={blogStandardImage} />

                                <BlogSingleStandard data={blogStandard}/>

                                <BlogSingleGallery data={BlogGallery}/>

                                <BlogSingleQuote data={BlogQuote} />

                                <BlogSingleVideo data={blogVideo} />

                                <Pagination extraClass="pagination-wrapper-left"/>

                            </div>
                        </div>
                        <div className="col col-md-3">
                            <div className="blog-sidebar">
                                <SearchWidget title="Search"/>
                                <CategoryWidget/>
                                <RecentPostWidget/>
                                <AboutWidget/>
                                <TagWidget/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end container */}
            </section>
            {/* end blog-pg-section */}

            <Instagram/>
            <Footer/>
        </Fragment>
    );
}

export default Blog;