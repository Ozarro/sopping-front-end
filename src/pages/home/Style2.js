import React from 'react';
import {useState, Fragment} from 'react';

import Header from '../../components/header/Header';
import Hero2 from '../../components/Hero/Hero2';
import QuickView from '../../components/products/QuickView';
import NewsletterPopup from '../../components/global/NewsletterPopup';
import Instagram from '../../components/global/Instagram';
import Footer from '../../components/global/Footer';
import Feature1 from '../../components/features/Feature1';
import OurProducts from '../../components/products/OurProducts';
import Deal from '../../components/features/Deal';
import Partners from '../../components/features/Partners';
import FromOurBlog from '../../components/blog/FromOurBlog';

/**
 * Home page 2
 * @param options
 * @returns {*}
 * @constructor
 */
function Style2({ options }) {

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

            <Hero2/>

            <Feature1 extraClass=''/>

            <OurProducts onQuickViewClick={HandelQuickViewData}/>

            <Deal/>

            <Partners/>

            <FromOurBlog/>

            <Instagram/>

            <Footer/>

            <NewsletterPopup/>
        </Fragment>
    );
}

export default Style2;