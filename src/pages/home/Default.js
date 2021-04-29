import React from 'react';
import {useState, Fragment} from 'react';

import Header from '../../components/header/Header';
import Hero1 from '../../components/Hero/Hero1';
import FeaturedProducts from '../../components/products/FeaturedProducts';
import Categories from '../../components/categories/Categories';
import CtaSection from '../../components/CTA/CtaSection';
import RecentProducts from '../../components/products/RecentProducts';
import BestSeller from '../../components/products/BestSeller';
import QuickView from '../../components/products/QuickView';
import NewsletterPopup from '../../components/global/NewsletterPopup';
import Instagram from '../../components/global/Instagram';
import Footer from '../../components/global/Footer';


/**
 * Home style 1
 * @param options
 * @returns {*}
 * @constructor
 */
function HomeDefault({ options }) {

    /**
     * state
     */
    const [showQuickView, setShowQuickView] = useState(false);
    const [quickViewData, setQuickViewData] = useState({});

    /**
     * Handle Quick View Data
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
     * Handle Quick View Close
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
            {/* {showQuickView
                ? <QuickView
                    data={quickViewData}
                    onQuickViewCloseClick={HandelQuickViewClose}
                />
                : ''
            } */}

            <Header options={options} />

            <Hero1/>

            <FeaturedProducts/>

            <RecentProducts onQuickViewClick={HandelQuickViewData}/>

            {/* <Categories/> */}

            <CtaSection/>

            {/* <BestSeller onQuickViewClick={HandelQuickViewData}/> */}

            {/* <Instagram/> */}

            <Footer/>

            {/* <NewsletterPopup/> */}
        </Fragment>
    );
}

export default HomeDefault;