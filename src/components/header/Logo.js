import React, {Fragment} from 'react';
import {Link} from "react-router-dom";


/**
 * logo component
 * @returns {*}
 * @constructor
 */
function Logo() {

    return (
        <Fragment>
            <Link className="logo-middle" to="/">
                <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt=""/>
            </Link>
        </Fragment>
    );
}

export default Logo;