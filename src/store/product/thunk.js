import jwtDecode from "jwt-decode";
import _ from "lodash";
import api, { registerAccessToken } from "./../../api";

import {
  setCategories,
    setProducts
} from "./index";

export default class productThunk {

  /**
   * --------------------Getters----------------------------------------
   */
  /**
   * Get All Products
   */
  static getAllProducts(query) {
    return async (dispatch, getState) => {
      registerAccessToken(getState().user.tokens.access);
      const [res, data] = await api.product.get.allProducts(query);
      if (res.status === 200) {
          dispatch(setProducts(data));
      }
      return res;
    }
  }

  /**
   * get all categories
   */
  static getAllCategory(query) {
    return async (dispatch, getState) => {
      registerAccessToken(getState().user.tokens.access);
      const [res, data] = await api.category.get.allCategories(query);
      if (res.status === 200) {
        dispatch(setCategories(data));
      }
      return res;
    }
  }
}
