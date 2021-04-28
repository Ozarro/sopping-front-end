import React, {useState, Fragment} from 'react';

import Footer from '../../components/global/Footer';
import Instagram from '../../components/global/Instagram';
import Header from '../../components/header/Header';
import PageTitle from '../../components/global/PageTitle';
import Ordering from '../../components/shop/Ordering';
import QuickView from '../../components/products/QuickView';
import Pagination from "../../components/global/Pagination";
import OrderingToolbar from "../../components/shop/OrderingToolbar";
import Products from "../../components/shop/Products";

import './shop.css';

/**
 * demo data
 */
import productsData from '../../data/products.json';
import productsData_2 from '../../data/products.json';
import productsData_3 from '../../data/products.json';
const products = [...productsData, ...productsData_2, ...productsData_3];

/**
 * Shop page Full Width
 * @param options
 * @returns {*}
 * @constructor
 */
function FullWidth({ options }) {

    /**
     * states
     */
    const [showQuickView, setShowQuickView] = useState(false);
    const [quickViewData, setQuickViewData] = useState({});
    const [ordering, setOrdering] = useState(1);

    /**
     * Handle Ordering Status
     */
    const HandleOrderingStatus = (event, data) => {
        event.preventDefault();
        setOrdering(data);
    };

    /**
     * Handel Quick View Data
     */
    const HandelQuickViewData = (e, item) => {
        e.preventDefault();
        setShowQuickView(!showQuickView);
        setQuickViewData(item);
    };

    /**
     * Handel Quick View Close
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

            <PageTitle name="Shop"/>


            {/* start shop-section */}
            <section className="shop-section shop-style-2 section-padding">
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="shop-area clearfix">
                                <div className="woocommerce-content-wrap">
                                    <div className="woocommerce-content-inner">
                                        <div className="woocommerce-toolbar-top">
                                            <p className="woocommerce-result-count">
                                                Showing all {products.length} results
                                            </p>

                                            <OrderingToolbar
                                                HandleOrderingStatus={HandleOrderingStatus}
                                                ordering={ordering}
                                            />

                                            <Ordering/>
                                        </div>

                                        <Products
                                            HandelQuickViewData={HandelQuickViewData}
                                            products={products}
                                            ordering={ordering}
                                        />

                                    </div>

                                    <Pagination extraClass=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end container */}
            </section>
            {/* end shop-section */}

            <Instagram/>
            <Footer/>
        </Fragment>
    );
}

export default FullWidth;