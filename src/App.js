import React, {useState, useEffect, Fragment} from 'react';
import {Switch, Route} from "react-router-dom";
import {useSelector} from "react-redux";

import HttpsRedirect from 'react-https-redirect';

/**
 * import components
 */
import Preloader from './components/global/Preloader';
import HomeDefault from './pages/home/Default';
import Style2 from './pages/home/Style2';
import Style3 from './pages/home/Style3';
import NotFound from './pages/404/NotFound';
import ContactUs from './pages/contactUs/ContactUs';
import About from './pages/about/About';
import MyAccount from './pages/myAccount/MyAccount';
import Checkout from './pages/checkout/Checkout';
import Cart from './pages/cart/Cart';
import Masonary from './pages/blog/Masonary';
import FullWidth from './pages/shop/FullWidth';
import LeftSidebar from './pages/shop/LeftSidebar';
import RightSidebar from './pages/shop/RightSidebar';
import Blog from './pages/blog/Blog';
import BlogSingle from './pages/blog/Single';
import SingleVerticalThumbnail from './pages/shop/SingleVerticalThumbnail';
import ShopSliderImages from './pages/shop/ShopSliderImages';
import ScrollToTop from "./ScrollToTop";
import {getPreloadShow} from "./store/ui/select";
import { ToastContainer } from "react-toastify";


function App() {

    /**
     * mini cart state
     * left side info state
     * mobile nav state
     * loader state
     */

    const [showMiniCart, setShowMiniCart] = useState(false);
    const [showSideInfo, setShowSideInfo] = useState(false);
    const [showMobileNav, setShowMobileNav] = useState(false);
    const showPreloader = useSelector(getPreloadShow);

    /**
     * change mini cart state
     * @constructor
     */
    const HandelMiniCartStatus = () => {
        setShowMiniCart(!showMiniCart);
    };

    /**
     * change left side info state
     * @constructor
     */
    const HandelSideInfoStatus = () => {
        setShowSideInfo(!showSideInfo);
    };

    /**
     * change mobile nav state
     * @constructor
     */
    const HandelMobileNavStatus = () => {
        setShowMobileNav(!showMobileNav);
    };

    /**
     * set default states
     * @constructor
     */
    const HandelOverlayStatus = () => {
        setShowMiniCart(false);
        setShowSideInfo(false);
        setShowMobileNav(false);
    };

    /**
     * state and dandle function for change states
     * send this options to child component
     * @type {{
     *          onSideInfoClick: HandelSideInfoStatus,
     *          onMiniCartClick: HandelMiniCartStatus,
     *          mobileNav: boolean,
     *          sideInfo: boolean,
     *          onMobileNavClick: HandelMobileNavStatus,
     *          miniCart: boolean
     *       }}
     */
    const options = {
        sideInfo: showSideInfo,
        mobileNav: showMobileNav,
        miniCart: showMiniCart,
        onSideInfoClick: HandelSideInfoStatus,
        onMobileNavClick: HandelMobileNavStatus,
        onMiniCartClick: HandelMiniCartStatus
    };

    return (
        <HttpsRedirect>
            <Fragment>
                <div
                    className={"page-wrapper " + (showSideInfo || showMobileNav || showMiniCart ? 'active-body-overlay' : '')}>

                    <div
                        className="body-overlay"
                        onClick={HandelOverlayStatus}
                    />

                    {showPreloader ? <Preloader/> : ''}

                    <ScrollToTop/>
                    <Switch>

                        <Route exact path="/">
                            <HomeDefault options={options}/>
                        </Route>

                        <Route exact path="/home">
                            <HomeDefault options={options}/>
                        </Route>

                        <Route exact path="/home-style-2">
                            <Style2 options={options}/>
                        </Route>

                        <Route exact path="/home-style-3">
                            <Style3 options={options}/>
                        </Route>

                        <Route exact path="/404">
                            <NotFound options={options}/>
                        </Route>

                        <Route exact path="/contact">
                            <ContactUs options={options}/>
                        </Route>

                        <Route exact path="/about">
                            <About options={options}/>
                        </Route>

                        <Route exact path="/my-account">
                            <MyAccount options={options}/>
                        </Route>

                        <Route exact path="/checkout">
                            <Checkout options={options}/>
                        </Route>

                        <Route exact path="/cart">
                            <Cart options={options}/>
                        </Route>

                        <Route exact path="/blog-masonary">
                            <Masonary options={options}/>
                        </Route>

                        <Route exact path="/shop-full-width">
                            <FullWidth options={options}/>
                        </Route>

                        <Route exact path="/shop-left-sidebar">
                            <LeftSidebar options={options}/>
                        </Route>

                        <Route exact path="/shop-right-sidebar">
                            <RightSidebar options={options}/>
                        </Route>

                        <Route exact path="/blog">
                            <Blog options={options}/>
                        </Route>

                        <Route exact path="/blog-single">
                            <BlogSingle options={options}/>
                        </Route>

                        {/* <Route exact path="/single-vertical-thumbnail">
                            <SingleVerticalThumbnail options={options}/>
                        </Route> */}

                        <Route exact path="/single-slider-images/:pCode">
                            <ShopSliderImages options={options}/>
                        </Route>

                        <Route path="*">
                            <NotFound options={options}/>
                        </Route>

                    </Switch>
                    <ToastContainer
                        position="top-right"
                        autoClose={10000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        />
                </div>
            </Fragment>
        </HttpsRedirect>
        
    );
}
export default App;
