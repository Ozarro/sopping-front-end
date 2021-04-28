import React, {Fragment} from 'react';
import CommentItem from "./CommentItem";

/**
 * blog Comments Component
 * @returns {*}
 * @constructor
 */
function BlogCommentsArea() {

    /**
     * demo data for comments
     */
    const comment = {
        id: "comment-1",
        icon: "/assets/images/blog-details/comments-author/img-1.jpg",
        name: "Dichel newn",
        date: "Nov 25, 2020",
        comment: "Housed in a nice, gilded frame. It showed a lady\n" +
            "                                        fitted out with a fur hat and fur boa who sat\n" +
            "                                        upright, raising a heavy fur muff that covered the\n" +
            "                                        whole of her lower arm towards",

        children: {
            icon: "/assets/images/blog-details/comments-author/img-2.jpg",
            name: "Dichel newn",
            date: "Nov 25, 2020",
            comment: "Housed in a nice, gilded frame. It showed a lady\n" +
                "                                        fitted out with a fur hat and fur boa who sat\n" +
                "                                        upright, raising a heavy fur muff that covered the\n" +
                "                                        whole of her lower arm towards",
            childrenAnswer: {
                icon: "/assets/images/blog-details/comments-author/img-3.jpg",
                name: "Dichel newn",
                date: "Nov 25, 2020",
                comment: "Housed in a nice, gilded frame. It showed a lady\n" +
                    "                                        fitted out with a fur hat and fur boa who sat\n" +
                    "                                        upright, raising a heavy fur muff that covered the\n" +
                    "                                        whole of her lower arm towards",
            }
        }
    };

    return (
        <Fragment>
            <ol className="comments">
                <li className="comment even thread-even depth-1" id={comment.id}>
                    <div id="div-comment-1">
                        <div className="comment-theme">
                            <div className="comment-image"><img src={process.env.PUBLIC_URL + comment.icon} alt=""/></div>
                        </div>
                        <div className="comment-main-area">
                            <div className="comment-wrapper">
                                <div className="comments-meta">
                                    <h4> {comment.name}<span className="comments-date">{comment.date}</span>
                                    </h4>
                                </div>
                                <div className="comment-area">
                                    <p>{comment.comment} </p>
                                    <div className="comments-reply">
                                        <a className="comment-reply-link" href="#"> <i
                                            className="pe-7s-repeat"/><span>Reply</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        comment.children ?
                            <ul className="children">
                                <li className="comment">
                                    <div>
                                        <div className="comment-theme">
                                            <div className="comment-image"><img src={process.env.PUBLIC_URL + comment.children.icon} alt=""/>
                                            </div>
                                        </div>
                                        <CommentItem data={comment.children}/>
                                    </div>
                                    {
                                        comment.children.childrenAnswer ?
                                            <ul>
                                                <li className="comment">
                                                    <div>
                                                        <div className="comment-theme">
                                                            <div className="comment-image"><img
                                                                src={process.env.PUBLIC_URL +comment.children.childrenAnswer.icon} alt=""/>
                                                            </div>
                                                        </div>
                                                        <CommentItem data={comment.children.childrenAnswer}/>
                                                    </div>
                                                </li>
                                            </ul>
                                            : ""
                                    }
                                </li>
                            </ul>
                            : ""
                    }
                </li>
                <li className="comment">
                    <div>
                        <div className="comment-theme">
                            <div className="comment-image"><img
                                src={process.env.PUBLIC_URL + "/assets/images/blog-details/comments-author/img-1.jpg"}
                                alt=""/></div>
                        </div>
                        <CommentItem data={comment}/>
                    </div>
                </li>
            </ol>
        </Fragment>
    );
}

export default BlogCommentsArea;