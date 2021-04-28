import React from 'react';
import {useState, Fragment} from 'react';

import Header from '../../components/header/Header';
import Hero3 from '../../components/Hero/Hero3';
import QuickView from '../../components/products/QuickView';
import NewsletterPopup from '../../components/global/NewsletterPopup';
import Instagram from '../../components/global/Instagram';
import Footer from '../../components/global/Footer';
import Feature1 from '../../components/features/Feature1';
import Feature2 from '../../components/features/Feature2';
import Feature3 from '../../components/features/Feature3';
import OurProducts from '../../components/products/OurProducts';

/**
 * Home page 3
 * @param options
 * @returns {*}
 * @constructor
 */
function Style3({ options }) {

    /**
     * state
     */
    const [showQuickView, setShowQuickView] = useState(false);
    const [quickViewData, setQuickViewData] = useState({});

    /**
     * Handel Quick View Data
     * @param e
     * @param item
     * @constructor
     */
    const HandelQuickViewData = (e, item) => {
        e.preventDefault();
        setShowQuickView(!showQuickView);
        setQuickViewData(item);
    };

    /**
     * Handel Quick View Close
     * @param e
     * @constructor
     */
    const HandelQuickViewClose = (e) => {
        e.preventDefault();
        setShowQuickView(false);
        setQuickViewData({});
    };

    return (
        <Fragment>
            {showQuickView
                ? <QuickView
                    data={quickViewData}
                    onQuickViewCloseClick={HandelQuickViewClose}
                />
                : ''
            }

            <Header options={options} />

            <Hero3/>

            <Feature2/>

            <OurProducts onQuickViewClick={HandelQuickViewData}/>

            <Feature3/>

            <Feature1 extraClass='home-feature-section-s2'/>

            <Instagram/>

            <Footer/>

            <NewsletterPopup/>
        </Fragment>
    );
}

export default Style3;