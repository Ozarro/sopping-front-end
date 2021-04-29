import React, {useState, Fragment, useEffect} from 'react';

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
import OrderingToolbar from "../../components/shop/OrderingToolbar";
import Products from "../../components/shop/Products";

import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";


import {getAllProducts} from "../../store/product/select";
import { thunks } from "../../store/index";

import './shop.css';

/**
 * demo data
 */
// const products = [...productsData, ...productsData_2];

/**
 * Shop page with Right Sidebar
 * @param options
 * @returns {*}
 * @constructor
 */
function RightSidebar({ options }) {
    const dispatch = useDispatch();
    /**
     * states
     */
    const [showQuickView, setShowQuickView] = useState(false);
    const [quickViewData, setQuickViewData] = useState({});

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [ordering, setOrdering] = useState(1);

    const products = useSelector(getAllProducts);

    useEffect(async () => {
        setLoading(true);
        const res = await dispatch(thunks.product.getAllProducts());
        setLoading(false);
        if (res && res.status !== 200) {
            setError(true);
            toast.error(res.message);
        }
    }, []);

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

            <PageTitle name="Shop Right Sidebar"/>


            {/* start shop-section */}
            <section className="shop-section shop-right-sidebar section-padding">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="shop-area clearfix">
                                <div className="woocommerce-content-wrap">
                                    <div className="woocommerce-content-inner">
                                        {/* <div className="woocommerce-toolbar-top">
                                            <p className="woocommerce-result-count">Showing 1–12 of 70 results</p>
                                            
                                            <OrderingToolbar
                                                HandleOrderingStatus={HandleOrderingStatus}
                                                ordering={ordering}
                                            />
                                            
                                            <Ordering/>
                                        </div> */}

                                        <Products
                                            HandelQuickViewData={HandelQuickViewData}
                                            products={products}
                                            ordering={ordering}
                                        />

                                    </div>
                                    <Pagination extraClass=""/>
                                </div>
                                <div className="shop-sidebar">
                                    {/* <SearchWidget title=""/> */}
                                    {/* <PriceFilterWidget/> */}
                                    <ProductCategoriesWidget/>
                                    <ColorFilterWidget/>
                                    {/* <TagFilterWidget/> */}
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

export default RightSidebar;