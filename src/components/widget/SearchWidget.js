import React, {Fragment} from 'react';

/**
 * Search Widget
 * @param title
 * @returns {*}
 * @constructor
 */
function SearchWidget({title}) {

    return (
        <Fragment>
            <div className="widget search-widget">
                {
                    title.length > 0 ? <h3>{title}</h3> : ''
                }

                <form>
                    <div>
                        <input type="text" placeholder="Search Post.."/>
                        <button type="submit"><i className="ti-search"/></button>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

export default SearchWidget;