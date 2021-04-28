import React, {useState, Fragment} from 'react';

import Footer from '../../components/global/Footer';
import Instagram from '../../components/global/Instagram';
import Header from '../../components/header/Header';
import PageTitle from '../../components/global/PageTitle';
import Ordering from '../../components/shop/Ordering';
import QuickView from '../../components/products/QuickView';
import Pagination from '../../components/global/Pagination';
import SearchWidget from '../../components/widget/SearchWidget';
import PriceFilterWidget from '../../components/widget/PriceFilterWidget';
import ProductCategoriesWidget from '../../components/widget/ProductCategoriesWidget';
import ColorFilterWidget from '../../components/widget/ColorFilterWidget';
import TagFilterWidget from '../../components/widget/TagFilterWidget';

import './shop.css';

import OrderingToolbar from "../../components/shop/OrderingToolbar";
import Products from "../../components/shop/Products";

/**
 * demo data
 */
import productsData from '../../data/products.json';
import productsData_2 from '../../data/products.json';
const products = [...productsData, ...productsData_2];


/**
 * Shop Page with Left Sidebar
 * @param options
 * @returns {*}
 * @constructor
 */
function LeftSidebar({ options }) {

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

            <PageTitle name="Shop Left Sidebar"/>


            {/* start shop-section */}
            <section className="shop-section section-padding">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="shop-area clearfix">
                                <div className="woocommerce-content-wrap">
                                    <div className="woocommerce-content-inner">
                                        <div className="woocommerce-toolbar-top">
                                            <p className="woocommerce-result-count">Showing 1–12 of 70 results</p>

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
                                <div className="shop-sidebar">
                                    <SearchWidget title=""/>
                                    <PriceFilterWidget/>
                                    <ProductCategoriesWidget/>
                                    <ColorFilterWidget/>
                                    <TagFilterWidget/>
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

export default LeftSidebar;