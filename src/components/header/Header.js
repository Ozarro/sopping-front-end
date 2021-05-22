import React, {Fragment, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import HeaderRight from './HeaderRight';
import HeaderLeft from './HeaderLeft';
import Navbar from './Navbar';

/**
 * demo data
 */
import data from '../../data/topbar-text.json';
import {useDispatch, useSelector} from "react-redux";
import {    selectAllCoupons} from "../../store/order/select";
import {thunks, actions, cleanQuery} from "../../store";
import {toast} from "react-toastify";

/**
 * Header component
 * @param options
 * @returns {*}
 * @constructor
 */
function Header({ options }) {
    const dispatch = useDispatch();
    const coupons = useSelector(selectAllCoupons);
    const [coupon, setCoupon] = useState();
    const [fCoupons, setFCoupon] = useState(coupons);

    const randomCoupon = () => {
        return fCoupons[Math.floor(Math.random() * fCoupons.length)];
    }


    useEffect( async () => {
        dispatch(actions.ui.setPreloadShow(true));
        const res1 = await dispatch(thunks.order.getAllCoupons());
        dispatch(actions.ui.setPreloadShow(false));
        if (res1.status  != 200 ) {
            return;
        }

    } ,[])

    useEffect( () => {
        const temp = coupons.filter(item => item.amountType === 'Discount')
        setFCoupon(temp);
    }, [coupons])

    useEffect( async () => {
        setCoupon(randomCoupon())
    } ,[fCoupons])


    return (
        <Fragment>
            {/* Start header */}
            <header id="header" className="site-header header-style-1">
                <div className="topbar">
                    <div className="topbar-text">
                        <p>{`Join our showroom and get offers Coupon code : ${(coupon) ? coupon.couponCode : ""}`}</p>
                    </div>
                </div>
                {/* end topbar */}
                <nav className="navigation navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="open-btn" onClick={options.onMobileNavClick}>
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                            </button>
                            <Link className="mobile-only navbar-brand" to="/">
                                <img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt=""/>
                            </Link>

                        </div>

                        <HeaderLeft options={options}/>

                        <Navbar options={options}/>

                        <HeaderRight options={options} />

                    </div>
                    {/* end of container */}
                </nav>
            </header>
            {/* end of header */}
        </Fragment>
    );
}

export default Header;