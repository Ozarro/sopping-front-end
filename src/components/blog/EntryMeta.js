import React, {Fragment} from 'react';

/**
 * Entry Meta component
 * @param data
 * @returns {*}
 * @constructor
 */
function EntryMeta({data}) {

    return (
        <Fragment>
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
        </Fragment>
    );
}

export default EntryMeta;