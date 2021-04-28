import React, {Fragment} from 'react';
import EntryMeta from "./EntryMeta";
import {NavLink} from "react-router-dom";

/**
 * single blog Quote component
 * @param data
 * @returns {*}
 * @constructor
 */
function BlogSingleQuote({data}) {

    return (
        <Fragment>
            <div className="post format-quote">
                <div className="entry-details">
                    <EntryMeta data={data} />
                    <h3><NavLink to={data.link}>{data.title}</NavLink></h3>
                </div>
            </div>
        </Fragment>
    );
}

export default BlogSingleQuote;