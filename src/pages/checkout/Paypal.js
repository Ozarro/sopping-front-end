import React, { useDebugValue, useEffect, useRef } from 'react';
import {useState, Fragment} from 'react';


import {useDispatch, useSelector} from "react-redux";
import {selectAllCartItems, selectZoneCities,
    selectAllCoupons} from "../../store/order/select";
import {thunks, actions, cleanQuery} from "../../store";
import {toast} from "react-toastify";


/**
 * Checkout page
 * @param options
 * @returns {*}
 * @constructor
 */
function Paypal({ grandTotal, handleOrderPlaceSubmit }) {
    const dispatch = useDispatch();

    /**
     * Use Effects
     */
    useEffect( async () => {
        console.log("this is grand total", grandTotal);
        window.paypal.Buttons( {
            createOrder : (data,actions, err) => {
                return actions.order.create({
                    intent:"CAPTURE",
                    purchase_units : [
                        {
                            description: "Ozarro clothing payment",
                            amount : {
                                currency_code : "USD",
                                value : grandTotal,
                            }
                        }
                    ]
                })
            },
            onApprove : async (data, actions) => {
                handleOrderPlaceSubmit();
            },
            onError : (err) => {
                toast.error("Error occurs during paypal payment");
                console.log(err);
            }
        }).render(paypal.current)

    } ,[])

    return (
        <Fragment>
            <div  ref={paypal}></div>
        </Fragment>
    );

}

export default Paypal;