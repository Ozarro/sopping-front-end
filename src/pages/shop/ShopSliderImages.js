import React, {useState, Fragment, useEffect} from 'react';
import Slider from "react-slick";
import { useHistory , useLocation} from "react-router-dom";

import Footer from '../../components/global/Footer';
import Instagram from '../../components/global/Instagram';
import PageTitle from '../../components/global/PageTitle';
import Header from '../../components/header/Header';
import ProductInfoTabs from '../../components/products/ProductInfoTabs';
import QuickView from '../../components/products/QuickView';
import RecentSingleProducts from '../../components/products/RecentSingleProducts';
import {useParams} from "react-router";
import {BACK_END_URL} from "../../api/index";
const FILE_URL = BACK_END_URL.DEFAULT_FILE_URL;


import './shop.css';

/**
 * demo data
 */
import data from '../../data/singleProductDemo.json';
import {useDispatch, useSelector} from "react-redux";
import {getAllCategories, getAllProducts} from "../../store/product/select";
import {thunks, actions} from "../../store";
import {toast} from "react-toastify";
import { getUserId } from '../../store/user/select';


/**
 * single shop page with  Slider Images
 * @param options
 * @returns {*}
 * @constructor
 */
function ShopSliderImages({options}) {
    const dispatch = useDispatch();
    let location = useLocation();
    let history = useHistory();
    const {pCode} = location;

    const [error, setError] = useState(false);
    const [product, setProduct] = useState({});
    const [itemData, setItemData] = useState({})

    const getProductByCode = (pCode , products) => {
        let product ;
        if(products){
            product = products.find((item) => {
               return item.pCode == pCode;
            })
        }else{
            toast.error("Product not found");
            return;
        }
        return product;
    }

    const products = useSelector(getAllProducts);
    const userId = useSelector(getUserId);

    useEffect(async () => {
        dispatch(actions.ui.setPreloadShow(true));
        const res1 = await dispatch(thunks.product.getAllProducts());
        if (res1.status  != 200) {
            setError(true);
            toast.error(res1.message);
        }
        setProduct(getProductByCode(pCode, products));
        dispatch(actions.ui.setPreloadShow(false));
    },[]);

    /**
     * states
     */
    const [showQuickView, setShowQuickView] = useState(false);
    const [quickViewData, setQuickViewData] = useState({});
    const [productCount, setProductCount] = useState(1);

    /**
     * Handle Add to cart function
     */
    const handleAddToCart = async (e) => {
        e.preventDefault();
        const itemData = {
            pCode : product.pCode,
            quantity : productCount,
            price : product.price
        }
        if(!userId){
            toast.error("Only logged in user are allowed to add items to cart");
            return;
        }
        dispatch(actions.ui.setPreloadShow(true));
        const res = await dispatch(thunks.order.addCartItem());
        dispatch(actions.ui.setPreloadShow(false));
        if (res.status  != 200) {
            setError(true);
            toast.error(res.message);
        }
    }

    /**
     * Handle Product Count
     */
    const HandleProductCount = (e, data) => {
        e.preventDefault();
        if (data == 'plus') {
            setProductCount(productCount + 1);
        } else {
            if (productCount > 1) {
                setProductCount(productCount - 1);
            } else {
                setProductCount(1);
            }
        }
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

    /**
     * slider settings
     */
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 2000,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
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

            <Header options={options}/>

            <PageTitle name="Shop Product"/>

            {/* start shop-single-section */}
            <section className="shop-single-section section-padding">
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-md-6">
                            <div className="shop-single-slider slider-thumbnail">
                                    {
                                    <div >
                                        <img src={ (product) ? FILE_URL+product.image : ""}/>
                                    </div>
                                    }
                                <div className="slider-nav"></div>
                            </div>
                        </div>
                        <div className="col col-md-6">
                            <div className="product-details">
                                <h2>{(product) ? product.pName : ""}</h2>
                                <div className="price">
                                    <span className="current">Rs.  {(product) ? product.price : ""}</span>
                                </div>

                                <p>{(product) ? product.description : ""}</p>
                                <div className="product-option">
                                    <form className="form">
                                        <div className="product-row">
                                            <div className="touchspin-wrap">
                                                <button
                                                    onClick={(e) => {
                                                        HandleProductCount(e, 'plus')
                                                    }} id="slider-thumbnail-touchspin-up" className="btn btn-default "
                                                    type="button"><i className="glyphicon glyphicon-chevron-up"></i>
                                                </button>
                                                <button
                                                    onClick={(e) => {
                                                        HandleProductCount(e, 'minus')
                                                    }}
                                                    id="slider-thumbnail-touchspin-down" className="btn btn-default "
                                                    type="button"><i className="glyphicon glyphicon-chevron-down"></i>
                                                </button>
                                                <input readOnly className="product-count" type="text"
                                                       value={productCount} name="product-count"/>
                                            </div>
                                            <div>
                                                <button type="submit"
                                                onClick={handleAddToCart} 
                                                >Add to cart</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* end col */}
                    </div>
                    {/* end row */}
                    {/* <div className="row">
                        <div className="col col-md-8 col-md-offset-2">
                            <ProductInfoTabs/>
                        </div>
                    </div> */}
                    {/* end row */}
                    {/* <div className="row">
                        <div className="col col-xs-12">
                            <RecentSingleProducts onQuickViewClick={HandelQuickViewData}/>
                        </div>
                    </div> */}
                </div>
                {/* end of container */}
            </section>
            {/* end of shop-single-section */}
            {/* <Instagram/> */}
            <Footer/>
        </Fragment>
    );
}

export default ShopSliderImages;