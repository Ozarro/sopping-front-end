import React, {Fragment} from 'react';

/**
 * Pagination component
 * @param extraClass
 * @returns {*}
 * @constructor
 */
function Pagination({extraClass}) {
    return (
        <Fragment>
            <div className={"pagination-wrapper " + extraClass}>
                <ul className="pg-pagination">
                    <li>
                        <a href="#" aria-label="Previous">
                            <i className="fi flaticon-back"/>
                        </a>
                    </li>
                    <li className="active"><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li>
                        <a href="#" aria-label="Next">
                            <i className="fi flaticon-next"/>
                        </a>
                    </li>
                </ul>
            </div>
        </Fragment>
    );
}

export default Pagination;