import React, {Fragment} from 'react';

import Footer from '../../components/global/Footer';
import Instagram from '../../components/global/Instagram';
import PageTitle from '../../components/global/PageTitle';
import Header from '../../components/header/Header';
import AboutWidget from '../../components/widget/AboutWidget';
import CategoryWidget from '../../components/widget/CategoryWidget';
import RecentPostWidget from '../../components/widget/RecentPostWidget';
import SearchWidget from '../../components/widget/SearchWidget';
import TagWidget from '../../components/widget/TagWidget';

import './blog.css';

/**
 * demo data
 */
import BlogCommentsArea from "../../components/blog/BlogCommentsArea";

/**
 * single promotion age
 * @param options
 * @returns {*}
 * @constructor
 */
function BlogSingle({ options }) {

    /**
     * blog demo data
     */
    const data = {
        title: "Appearance is the first impression you convey to others major factor that contributes",
        date: "27 Nov 2020",
        img: "/assets/images/blog/img-1.jpg",
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
        contentBeforeQuote:"Wasn't a dream. His room, a proper human room although a little too small, lay\n" +
            "                                        peacefully between its four familiar walls. A collection of textile samples lay\n" +
            "                                        spread out on the table - Samsa was a travelling salesman - and above it there\n" +
            "                                        hung a picture that he had recently cut out of an illustrated magazine and\n" +
            "                                        housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and\n" +
            "                                        fur boa who sat upright, raising a heavy fur muff that covered the whole of her\n" +
            "                                        lower arm towards.",
        quote: "Wasn't a dream. His room, a proper human room although a little too\n" +
            "                                        small, lay peacefully between its four familiar walls. A collection of textile\n" +
            "                                        samples lay spread",
        contentAfterQuote: "Rcently cut out of an illustrated magazine and housed in a nice, gilded frame. It\n" +
            "                                        showed a lady fitted out with a fur hat and fur boa who sat upright, raising a\n" +
            "                                        heavy fur muff that covered the whole of her lower arm towards the viewer\n" +
            "                                        dregor. hat he had recently cut out of an illustrated magazine and housed in a\n" +
            "                                        nice, gilded frame.",
        author: "Shaim jone",
        authorText: "Housed in a nice, gilded frame. It showed a lady fitted out with a fur hat\n" +
            "                                            and fur boa who sat upright, raising a heavy fur muff that covered the whole\n" +
            "                                            of her lower arm towards"


    };

    return (
        <Fragment>
            <Header options={options} />

            <PageTitle name="Blog Single"/>

            {/* start blog-single-section */}
            <section className="blog-single-section section-padding">
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-md-9">
                            <div className="blog-content">
                                <div className="post format-standard-image">
                                    <div className="entry-media">
                                        <img src={process.env.PUBLIC_URL + data.img} alt=""/>
                                    </div>
                                    <div className="entry-meta">
                                        <div className="date">{data.date}</div>
                                        <div className="tags">
                                            {
                                                data.tags.map((item, index) => (
                                                    <a key={index} href={item.link}>{item.name}</a>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <h2>{data.title}</h2>
                                    <p>{data.contentBeforeQuote}</p>
                                    <blockquote>{data.quote}</blockquote>
                                    <p>{data.contentAfterQuote}</p>
                                </div>
                                <div className="share">
                                    <i className="pe-7s-share"/>
                                    <ul>
                                        <li><a href="#">Facebook</a></li>
                                        <li><a href="#">Twitter</a></li>
                                        <li><a href="#">Pinterest</a></li>
                                        <li><a href="#">Instagram</a></li>
                                    </ul>
                                </div>
                                <div className="author-box">
                                    <div className="author-avatar">
                                        <a href="#" target="_blank">
                                            <img src={process.env.PUBLIC_URL + "/assets/images/blog-details/author.jpg"} alt=""/>
                                        </a>
                                    </div>
                                    <div className="author-content">
                                        <a href="#" className="author-name">Author: {data.author}</a>
                                        <p>{data.authorText}</p>
                                        <div className="socials">
                                            <ul className="social-link">
                                                <li><a href="#"><i className="ti-facebook"/></a></li>
                                                <li><a href="#"><i className="ti-twitter-alt"/></a></li>
                                                <li><a href="#"><i className="ti-linkedin"/></a></li>
                                                <li><a href="#"><i className="ti-instagram"/></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* end author-box */}
                                <div className="more-posts">
                                    <div className="previous-post">
                                        <a href="#">
                                            <span className="post-control-link">Previous Post</span>
                                        </a>
                                    </div>
                                    <div className="next-post">
                                        <a href={0}>
                                            <span className="post-control-link">Next Post</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="comments-area">
                                    <div className="comments-section">
                                        <h3 className="comments-title">3 Comments</h3>
                                        <BlogCommentsArea />
                                    </div>
                                    {/* end comments-section */}
                                    <div className="comment-respond">
                                        <h3 className="comment-reply-title">Leave your thought</h3>
                                        <form method="post" id="commentform" className="comment-form">
                                            <div className="form-textarea">
                                                <textarea id="comment" placeholder="Write Your Comments..."
                                                          defaultValue={""}/>
                                            </div>
                                            <div className="form-inputs">
                                                <input placeholder="Website" type="url"/>
                                                <input placeholder="Name" type="text"/>
                                                <input placeholder="Email" type="email"/>
                                            </div>
                                            <div className="form-submit">
                                                <input id="submit" defaultValue="Post Comment" type="submit"/>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                {/* end comments-area */}
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
            {/* end blog-single-section */}

            <Instagram/>
            <Footer/>

        </Fragment>
    );
}

export default BlogSingle;