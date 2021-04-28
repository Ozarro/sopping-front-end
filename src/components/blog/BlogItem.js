import React, {Fragment} from 'react';

/**
 * return blog item for home pages display
 * @param item
 * @param index
 * @returns {*}
 * @constructor
 */
function BlogItem({item}) {
    return (
        <Fragment>
            <div className="post">
                <div className="entry-media">
                    <img src={process.env.PUBLIC_URL + item.mainImg} alt=""/>
                </div>
                <div className="entry-details">
                    <div className="entry-meta">
                        <div className="date">{item.createdDate}</div>
                        <div className="tags">
                            {
                                item.categories.map((category, i) => (
                                    <a key={i} href={category.link}>{category.name}</a>
                                ))
                            }
                        </div>
                    </div>
                    <h3><a href={item.link}>{item.title}</a></h3>
                    <a href={item.link} className="read-more">Read More <i
                        className="fi flaticon-next"/></a>
                </div>
            </div>
        </Fragment>
    );
}

export default BlogItem;