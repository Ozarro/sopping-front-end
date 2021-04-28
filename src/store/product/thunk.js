import jwtDecode from "jwt-decode";
import _ from "lodash";
import api, { registerAccessToken } from "./../../api";

import {
  setCategories,
    setProducts
} from "./index";

export default class productThunk {

  /**
   * ------------------Add------------------------------
   */

  /**
   * Add Product
   */
  static addProduct(productData) {
    return async (dispatch, getState) => {
      registerAccessToken(getState().user.tokens.access);
      const [res, data] = await api.product.add.product(productData);
      if (res.status === 200) {
        const [res1, data] = await api.product.get.allProducts();
        if (res1.status === 200) {
          dispatch(setProducts(data));
        }
      }
      return res;
    }
  }

  /**
   * Add Category
   */
  static addCategory(categoryData) {
    return async (dispatch, getState) => {
      registerAccessToken(getState().user.tokens.access);
      const [res, data] = await api.category.add.category(categoryData);
      if (res.status === 200) {
        const [res1, data] = await api.category.get.allCategories();
        if (res1.status === 200) {
          dispatch(setCategories(data));
        }
      }
      return res;
    }
  }

  /**
   * ------------------Update------------------------------
   */
  /**
   * Update Product
   */
  static updateProduct(pCode, productData) {
    return async (dispatch, getState) => {
      registerAccessToken(getState().user.tokens.access);
      const [res, data1] = await api.product.put.updateProduct(pCode, productData);
      if (res.status === 200) {
        const [res1, data] = await api.product.get.allProducts();
        if (res1.status === 200) {
          dispatch(setProducts(data));
        }
      }
      return res;
    }
  }

  /**
   * Update Category
   */
  static updateCategory(categoryId, categoryData) {
    return async (dispatch, getState) => {
      registerAccessToken(getState().user.tokens.access);
      console.log("Thunk check",categoryId, categoryData);
      const [res] = await api.category.put.updateCategory(categoryId, categoryData);
      if (res.status === 200) {
        const [res1, data] = await api.category.get.allCategories();
        if (res1.status === 200) {
          dispatch(setCategories(data));
        }
      }
      return res;
    }
  }

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
