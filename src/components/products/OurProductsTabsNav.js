import React, {Fragment} from 'react';

/**
 * Our Products Tabs Nav
 * @param tabSelected
 * @param onTabClick
 * @returns {*}
 * @constructor
 */
function OurProductsTabsNav({tabSelected, onTabClick}) {

    return (
        <Fragment>
            {/* Nav tabs */}
            <div className="tablinks">
                <ul>
                    <li className={"" + (tabSelected === 1 ? 'active' : '')}>
                        <a
                            onClick={(e) => {
                                onTabClick(e, 1)
                            }}
                            href="#" data-toggle="tab">New Arrival</a>
                    </li>
                    <li className={"" + (tabSelected === 2 ? 'active' : '')}>
                        <a
                            onClick={(e) => {
                                onTabClick(e, 2)
                            }}
                            href="#" data-toggle="tab">Best sellers</a>
                    </li>
                    <li className={"" + (tabSelected === 3 ? 'active' : '')}>
                        <a
                            onClick={(e) => {
                                onTabClick(e, 3)
                            }}
                            href="#" data-toggle="tab">Sale product</a>
                    </li>
                </ul>
            </div>
            {/* Tab panes */}
        </Fragment>
    );
}

export default OurProductsTabsNav;