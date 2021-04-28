import React, {Fragment} from 'react';
import EntryMeta from "./EntryMeta";
import {NavLink} from "react-router-dom";

/**
 * Standard singe blog with image component
 * @param data
 * @returns {*}
 * @constructor
 */
function BlogSingleStandardImage({data}) {

    return (
        <Fragment>
            <div className="post format-standard-image">
                <div className="entry-media">
                    <img src={process.env.PUBLIC_URL + data.img} alt=""/>
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

export default BlogSingleStandardImage;