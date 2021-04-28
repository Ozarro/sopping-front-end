import jwtDecode from "jwt-decode";
import _ from "lodash";
import api, { registerAccessToken } from "./../../api";

import {
  setCoupons,
  setOrders
} from "./index";

export default class orderThunk {

  /**
   * ------------------Add------------------------------
   */

  /**
   * Add coupon
   */
  static addCoupon(couponData) {
    return async (dispatch, getState) => {
      registerAccessToken(getState().user.tokens.access);
      const [res, data] = await api.coupon.add.coupon(couponData);
      if (res.status === 200) {
        const [res1, data] = await api.coupon.get.allCoupons();
        if (res1.status === 200) {
          dispatch(setCoupons(data));
        }
      }
      return res;
    }
  }

  /**
   * ------------------Update------------------------------
   */
  /**
   * Update order
   */
  static updateOrder(orderId, orderData) {
    return async (dispatch, getState) => {
      registerAccessToken(getState().user.tokens.access);
      const [res, data1] = await api.order.put.updateOrder(orderId, orderData);
      if (res.status === 200) {
        const [res1, data] = await api.order.get.allOrders();
        if (res1.status === 200) {
          dispatch(setOrders(data));
        }
      }
      return res;
    }
  }

  /**
   * Update coupon
   */
  static updateCoupon(couponId, couponData) {
    return async (dispatch, getState) => {
      registerAccessToken(getState().user.tokens.access);
      const [res, data] = await api.coupon.put.updateCoupon(couponId, couponData);
      if (res.status === 200) {
        const [res1, data] = await api.coupon.get.allCoupons();
        if (res1.status === 200) {
          dispatch(setCoupons(data));
        }
      }
      return res;
    }
  }

  /**
   * --------------------Getters----------------------------------------
   */
  /**
   * Get All Orders
   */
  static getAllOrders(query) {
    return async (dispatch, getState) => {
      registerAccessToken(getState().user.tokens.access);
      const [res, data] = await api.order.get.allOrders(query);
      if (res.status === 200) {
        dispatch(setOrders(data));
      }
      return res;
    }
  }

  /**
   * get all Coupons
   */
  static getAllCoupons(query) {
    return async (dispatch, getState) => {
      registerAccessToken(getState().user.tokens.access);
      const [res, data] = await api.coupon.get.allCoupons(query);
      if (res.status === 200) {
        dispatch(setCoupons(data));
      }
      return res;
    }
  }
}
