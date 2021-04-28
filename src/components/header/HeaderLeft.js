import React, {Fragment} from 'react';

/**
 * side info left menu component
 * @param options
 * @returns {*}
 * @constructor
 */
function HeaderLeft({options}) {

    return (
        <Fragment>
            <div className="header-left">
                <div className="side-info-bars" onClick={options.onSideInfoClick}>
                    <span/>
                    <span/>
                    <span/>
                </div>
                <div className={"side-info-content " + (options.sideInfo ? 'toggle-side-info' : '')}>
                    <button className="btn side-info-close-btn" onClick={options.onSideInfoClick}><i className="ti-close"/>
                    </button>
                    <div className="logo">
                        <img src={process.env.PUBLIC_URL + "/assets/images/slidbar-logo.png"} alt=""/>
                    </div>
                    <div className="text">
                        <p>Covered the whole of her lower arm towards the viewer gregor then turned to look out
                            the window</p>
                        <ul className="info">
                            <li>Contact us: ++8801682530219</li>
                            <li>Mail us: eoard@gmail.com</li>
                        </ul>
                        <ul className="social-links">
                            <li><a href="#"><i className="ti-facebook"/></a></li>
                            <li><a href="#"><i className="ti-twitter-alt"/></a></li>
                            <li><a href="#"><i className="ti-pinterest"/></a></li>
                            <li><a href="#"><i className="ti-vimeo-alt"/></a></li>
                        </ul>
                    </div>
                </div>
                <div className="search-area">
                    <form>
                        <button type="submit"><i className="fi flaticon-search"/></button>
                        <input type="text" placeholder="Search for.."/>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

export default HeaderLeft;