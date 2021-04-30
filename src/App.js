import React, {useState, useEffect, Fragment} from 'react';
import {Switch, Route} from "react-router-dom";

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
import ProtectedRouter from "./components/common/protectedRouter";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch, useSelector} from "react-redux";

import {thunks, actions} from "./store";

function App() {
    const dispatch = useDispatch();
    dispatch(thunks.user.checkToken());
    /**
     * mini cart state
     * left side info state
     * mobile nav state
     * loader state
     */

    const [showMiniCart, setShowMiniCart] = useState(false);
    const [showMiniUser, setShowMiniUser] = useState(false);
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

    const HandelMiniUserStatus = () => {
        setShowMiniUser(!showMiniUser);
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
        setShowMiniUser(false);
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
        miniUser : showMiniUser,
        onSideInfoClick: HandelSideInfoStatus,
        onMobileNavClick: HandelMobileNavStatus,
        onMiniCartClick: HandelMiniCartStatus,
        onMiniUserClick: HandelMiniUserStatus
    };

    return (
        <HttpsRedirect>
            <Fragment>
                <div
                    className={"page-wrapper " + (showSideInfo || showMobileNav || showMiniUser|| showMiniCart  ? 'active-body-overlay' : '')}>

                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />

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

                        <ProtectedRouter exact 
                        isLoggedIn={true}
                        path="/checkout">
                            <Checkout options={options}/>
                        </ProtectedRouter>

                        <ProtectedRouter 
                            isLoggedIn={true}
                            exact path="/cart"
                            >
                            <Cart options={options}/>
                        </ProtectedRouter>

                        <Route exact path="/shop-right-sidebar">
                            <RightSidebar options={options}/>
                        </Route>


                        <Route exact path="/single-slider-images">
                            <ShopSliderImages options={options}/>
                        </Route>

                        <Route path="*">
                            <NotFound options={options}/>
                        </Route>

                    </Switch>
                </div>
            </Fragment>
        </HttpsRedirect>
        
    );
}
export default App;
