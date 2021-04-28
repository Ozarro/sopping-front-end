import React, {Fragment} from 'react';

/**
 * product Ordering Toolbar component
 * @param HandleOrderingStatus
 * @param ordering
 * @returns {*}
 * @constructor
 */
function OrderingToolbar({HandleOrderingStatus, ordering}) {

    return (
        <Fragment>
            <div className="products-sizes">
                <a href="#" onClick={(event) => {
                    HandleOrderingStatus(event, 1)
                }} className={"grid-4 " + (ordering == 1 ? 'active' : '')}>
                    <div className="grid-draw">
                        <span/><span/><span/><span/>
                    </div>
                    <div className="grid-draw">
                        <span/><span/><span/><span/>
                    </div>
                    <div className="grid-draw">
                        <span/><span/><span/><span/>
                    </div>
                </a>
                <a href="#" onClick={(event) => {
                    HandleOrderingStatus(event, 2)
                }} className={"grid-3 " + (ordering == 2 ? 'active' : '')}>
                    <div className="grid-draw">
                        <span/><span/><span/>
                    </div>
                    <div className="grid-draw">
                        <span/><span/><span/>
                    </div>
                    <div className="grid-draw">
                        <span/><span/><span/>
                    </div>
                </a>
                <a href="#" onClick={(event) => {
                    HandleOrderingStatus(event, 3)
                }} className={"list-view " + (ordering == 3 ? 'active' : '')}>
                    <div className="grid-draw-line">
                        <span/><span/>
                    </div>
                    <div className="grid-draw-line">
                        <span/><span/>
                    </div>
                    <div className="grid-draw-line">
                        <span/><span/>
                    </div>
                </a>
            </div>
        </Fragment>
    );
}

export default OrderingToolbar;