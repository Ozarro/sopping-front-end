import jwtDecode from "jwt-decode";
import _ from "lodash";
import api, { registerAccessToken } from "./../../api";

import {
  setCoupons,
  setOrders,
    setCartItems,
    setZoneArray,
    setZoneCities
} from "./index";

export default class orderThunk {
  /**
   * Add Order
   */
  static addOrder( orderData) {
    return async (dispatch, getState) => {
      registerAccessToken(getState().user.tokens.access);
      const [res, data] = await api.order.add.order(orderData);
      if (res.status === 200) {
        const [res1, data] = await api.order.get.userOrders();
        if (res1.status === 200) {
          dispatch(setOrders(data));
        }
      }
      return res;
    }
  }

  /**
   * ------------------Update------------------------------
   */

  /**
   * Update coupon
   */
  static updateCartItem(itemId, itemData) {
    return async (dispatch, getState) => {
      registerAccessToken(getState().user.tokens.access);
      const [res, data] = await api.cart.put.updateCartItem(itemId, itemData);
      if (res.status === 200) {
        const [res1, data] = await api.cart.get.userCartItems();
        if (res1.status === 200) {
          dispatch(setCartItems(data));
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
  static getAllCartItems(query) {
    return async (dispatch, getState) => {
      registerAccessToken(getState().user.tokens.access);
      const [res, data] = await api.cart.get.userCartItems(query);
      if (res.status === 200) {
        dispatch(setCartItems(data));
      }
      return res;
    }
  }

  /**
   * Get All Orders
   */
  static getAllUserOrders(query) {
    return async (dispatch, getState) => {
      registerAccessToken(getState().user.tokens.access);
      const [res, data] = await api.order.get.userOrders(query);
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

  /**
   * get all zone cities
   */
  static getAllZoneCities(query) {
    return async (dispatch, getState) => {
      registerAccessToken(getState().user.tokens.access);
      const [res, data] = await api.zone.get.zoneCities(query);
      if (res.status === 200) {
        dispatch(setZoneCities(data));
      }
      return res;
    }
  }

  /**
   * get all zone array
   */
  static getAllZoneArray(query) {
    return async (dispatch, getState) => {
      registerAccessToken(getState().user.tokens.access);
      const [res, data] = await api.zone.get.zoneCityArray(query);
      if (res.status === 200) {
        dispatch(setZoneArray(data));
      }
      return res;
    }
  }

  /**
   * --------------------Delete----------------------------------------
   */
  /**
   * Get All Orders
   */
  static removeCartItem(itemId) {
    return async (dispatch, getState) => {
      registerAccessToken(getState().user.tokens.access);
      const [res] = await api.cart.delete.deleteCartItem(itemId);
      if (res.status === 200) {
        const [res1, data] = await api.cart.get.userCartItems();
        if (res1.status === 200) {
          dispatch(setCartItems(data));
        }
      }
      return res;
    }
  }
}
