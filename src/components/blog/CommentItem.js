import React, {Fragment} from 'react';

/**
 * Comment Item component
 * @param data
 * @returns {*}
 * @constructor
 */
function CommentItem({data}) {

    return (
        <Fragment>
            <div className="comment-main-area">
                <div className="comment-wrapper">
                    <div className="comments-meta">
                        <h4>{data.name} <span
                            className="comments-date">{data.date}</span>
                        </h4>
                    </div>
                    <div className="comment-area">
                        <p>{data.comment}</p>
                        <div className="comments-reply">
                            <a className="comment-reply-link" href="#">
                                <i className="pe-7s-repeat"/><span>Reply</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default CommentItem;