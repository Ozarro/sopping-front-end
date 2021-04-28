import React, {Fragment} from 'react';
import PartnersItem from "./PartnersItem";

/**
 * partners show on home page style 2
 * @returns {*}
 * @constructor
 */
function Partners() {
    return (
        <Fragment>
            {/* start partners-section */}
            <section className="partners-section section-padding">
                <h2 className="hidden">Partners</h2>
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="partners-grid class">
                                <PartnersItem link="#" img={process.env.PUBLIC_URL + "assets/images/partners/img-1.png"}/>
                                <PartnersItem link="#" img={process.env.PUBLIC_URL + "assets/images/partners/img-2.png"}/>
                                <PartnersItem link="#" img={process.env.PUBLIC_URL + "assets/images/partners/img-3.png"}/>
                                <PartnersItem link="#" img={process.env.PUBLIC_URL + "assets/images/partners/img-4.png"}/>
                                <PartnersItem link="#" img={process.env.PUBLIC_URL + "assets/images/partners/img-5.png"}/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end container-1410 */}
            </section>
            {/* end partners-section */}
        </Fragment>
    );
}

export default Partners;