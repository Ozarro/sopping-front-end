import React, {Fragment} from 'react';

/**
 * Preloader component
 * @returns {*}
 * @constructor
 */
function Preloader() {
    return (
        <Fragment>
            {/* start preloader */}
            <div className="preloader">
                <div className="sk-chase">
                    <div className="sk-chase-dot"/>
                    <div className="sk-chase-dot"/>
                    <div className="sk-chase-dot"/>
                    <div className="sk-chase-dot"/>
                    <div className="sk-chase-dot"/>
                    <div className="sk-chase-dot"/>
                </div>
            </div>
            {/* end preloader */}
        </Fragment>
    );
}

export default Preloader;