import React, {Fragment, useState} from 'react';
import ClientReviewItem from "./ClientReviewItem";
import AddReview from "./AddReview";

/**
 * Product Info Tabs Component
 * @returns {*}
 * @constructor
 */
function ProductInfoTabs() {

    /**
     * demo data
     */
    const review = "Samsa was a travelling salesman and above it there hung a picture that he had recently cut\n" +
        "                            out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted\n" +
        "                            out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the\n" +
        "                            whole of her lower arm towards the viewer. Gregor then turned to look out the window at the\n" +
        "                            dull weather.\n";

    const [openTab, setOpenTab] = useState(1);

    const HandleOpenTabStatus = (event, data) => {
        event.preventDefault();
        setOpenTab(data);
    };

    return (
        <Fragment>
            <div className="single-product-info">
                {/* Nav tabs */}
                <ul className="nav nav-tabs" role="tablist">
                    <li onClick={(event) => {
                        HandleOpenTabStatus(event, 1)
                    }} className={" " + (openTab == 1 ? 'active' : '')}><a href="#01" data-toggle="tab">Description</a>
                    </li>
                    <li onClick={(event) => {
                        HandleOpenTabStatus(event, 2)
                    }} className={" " + (openTab == 2 ? 'active' : '')}><a href="#02" data-toggle="tab">Review (03)</a>
                    </li>
                </ul>
                {/* Tab panes */}
                <div className="tab-content">
                    <div role="tabpanel" className={"tab-pane fade " + (openTab == 1 ? 'in active' : '')} id="01">
                        <p> {review} </p>
                    </div>
                    <div role="tabpanel" className={"tab-pane fade " + (openTab == 2 ? 'in active' : '')} id="02">
                        <div className="row">
                            <div className="col col-xs-12">
                                <ClientReviewItem img={process.env.PUBLIC_URL +"/assets/images/shop/shop-single/review/img-1.jpg"} time="1 day ago" text={review} />
                                <ClientReviewItem img={process.env.PUBLIC_URL +"/assets/images/shop/shop-single/review/img-3.jpg"} time="1 day ago" text={review} />
                                <ClientReviewItem img={process.env.PUBLIC_URL +"/assets/images/shop/shop-single/review/img-2.jpg"} time="2 days ago" text={review} />
                            </div>
                            {/* end col */}
                            <div className="col col-xs-12 review-form-wrapper">
                                <AddReview/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ProductInfoTabs;