import React, {Fragment} from 'react';

/**
 * import demo categories data
 */
import categoriesData from '../../data/categories.json';
import {NavLink} from "react-router-dom";

/**
 * draw categories on home page
 * @returns {*}
 * @constructor
 */
function Categories() {

    return (
        <Fragment>
            {/* start category-section-area */}
            <section className="category-section-area section-padding">
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="section-title-s3">
                                <h2>Azedw Categories</h2>
                                <p>Our campaigns, latest trends and new collections</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="all-cat">
                                <ul className="clearfix">
                                    {
                                        categoriesData.map((item, index) => (
                                            <li key={index}>
                                                <NavLink to={item.link}>
                                                    <i className={"fi " + item.icon}/>
                                                    <span>{item.name}</span>
                                                </NavLink>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end container-1410 */}
            </section>
            {/* end category-section-area */}
        </Fragment>
    );
}


export default Categories;