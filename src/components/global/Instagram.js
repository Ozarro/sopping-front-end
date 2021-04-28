import React, {Fragment} from 'react';
import InstagramItem from "./InstagramItem";

/**
 * demo data
 */
const instagramItems = [
    {
        id:"1",
        img: "/assets/images/instagram/1.jpg",
        link: "#"
    },
    {
        id:"2",
        img: "/assets/images/instagram/2.jpg",
        link: "#"
    },
    {
        id:"3",
        img: "/assets/images/instagram/3.jpg",
        link: "#"
    },
    {
        id:"4",
        img: "/assets/images/instagram/4.jpg",
        link: "#"
    },
    {
        id:"5",
        img: "/assets/images/instagram/5.jpg",
        link: "#"
    },
    {
        id:"6",
        img: "/assets/images/instagram/6.jpg",
        link: "#"
    }
];

/**
 * Instagram images component
 * @returns {*}
 * @constructor
 */
function Instagram() {

    return (
        <Fragment>
            {/* start instagram-section */}
            <section className="instagram-section">
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="instagram-inner">
                                <div className="instagram-text">
                                    <h3>Follow our instagram</h3>
                                    <p>@aviwp.studio</p>
                                </div>
                                <div className="instagram-grids clearfix">
                                    {
                                        instagramItems.map((item, index) => (
                                            <InstagramItem key={index} link={item.link} img={process.env.PUBLIC_URL + item.img} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end instagram-section */}
        </Fragment>
    );
}

export default Instagram;