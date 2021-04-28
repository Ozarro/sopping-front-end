import React, {Fragment, useState} from 'react';
import ModalVideo from "react-modal-video";
import EntryMeta from "./EntryMeta";
import {NavLink} from "react-router-dom";

/**
 * single blog with video component
 * @param data
 * @returns {*}
 * @constructor
 */
function BlogSingleVideo({data}) {

    /**
     * video open state
     */
    const [isOpen, setOpen] = useState(false);

    /**
     * handle change video show status
     * @param e
     */
    const handleShowVideo = (e) => {
        e.preventDefault();
        setOpen(true);
    };

    return (
        <Fragment>
            <div className="post format-video">
                <div className="entry-media video-holder">
                    <img src={process.env.PUBLIC_URL + data.img} alt=""/>

                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={data.videoId}
                                onClose={() => setOpen(false)}/>
                    <a href="#" className="video-btn" onClick={handleShowVideo}>
                        <i className="fi flaticon-play-button"/>
                    </a>

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

export default BlogSingleVideo;