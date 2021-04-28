import React, {Fragment} from 'react';
import FromOurBlogData from '../../data/posts.json';
import BlogItem from "./BlogItem";

/**
 * our blog display 3 posts on home page
 * @returns {*}
 * @constructor
 */
function FromOurBlog() {
    return (
        <Fragment>
            {/* start blog-section */}
            <section className="blog-section hm-pg-blog-section section-padding">
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
                                    FromOurBlogData.map((item, index) => (
                                        <BlogItem key={index} item={item}/>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end blog-section */}
        </Fragment>
    );
}

export default FromOurBlog;