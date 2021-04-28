import jwtDecode from "jwt-decode";
import _ from "lodash";
import api, { registerAccessToken } from "./../../api";
import {
  setAdmins,
  setProfileData,
  setTokenData,
  setUserData,
  updateProfileData,
} from "./index";
import {setOrders} from "../order";

export default class userThunk {
  
  // static userLogin(email, password) {
  //   return async (dispatch, getState) => {
  //     const [res, data] = await api.user.login.user(email, password);
  //     if (res.status === 200) {
  //       dispatch(setUserData(data.data));
  //       dispatch(setTokenData(data.token));
  //     }
  //     return res;
  //   };
  // }
  /**
   * Login
   * @param email
   * @param password
   * @returns {function(*, *): {message: string, status: number}|{message: *, status: *}}
   */
  static adminLogin(email, password) {
    return async (dispatch, getState) => {
      const [res, data] = await api.user.login.admin(email, password);
      console.log(res);
      if (res.status === 200) {
        dispatch(setUserData(data.data));
        dispatch(setProfileData(data.data));
        dispatch(setTokenData(data.token));
      }
      return res;
    };
  }

  /**
   * Token check
   * @returns {function(*, *): undefined}
   */
  static checkToken() {
    return (dispatch, getState) => {
      const accessToken = localStorage.getItem("ozarro-access-token");
      if (!accessToken) return;
      const payload = jwtDecode(accessToken);
      if (!payload) return;

      dispatch(
        setUserData(
          _.pick(payload, [
            "userId",
            "name",
            "userType",
            "mobile",
              "image"
          ])
        )
      );

      const refreshToken = localStorage.getItem("pv-refresh-token");
      if (!refreshToken) {
        // refreshToken = "";
      }

      dispatch(
        setTokenData({
          access: accessToken,
          refresh: refreshToken,
        })
      );
    };
  }

  /**
   * Getters
   * @returns {function(*, *): Promise<{message: string, status: number}|{message: *, status: *}|{status: number}>}
   */
  static getProfileDetails() {
    return async (dispatch, getState) => {
      if (Object.keys(getState().user.profileData).length === 0) {
        registerAccessToken(getState().user.tokens.access);
        const [res, data] = await api.user.get.adminProfile();
        if (res.status === 200) {
          dispatch(setProfileData(data));
        }
        return res;
      } else {
        return { status: 200 };
      }
    };
  }

  static getAllAdmins() {
    return async (dispatch , getState) => {
      registerAccessToken(getState().user.tokens.access);
      const [res,data] =  await api.user.get.admins();
      if (res.status === 200) {
        dispatch(setAdmins(data));
      }
      return res;
    }
  }

  /**
   * Update
   * @param profileData
   * @returns
   */
  static updateAdminProfile(profileData) {
    return async (dispatch, getState) => {
      registerAccessToken(getState().user.tokens.access);
      const [res, data] = await api.user.put.updateAdminProfile(profileData);
      if (res.status === 200) {
        const [res, data] = await api.user.get.adminProfile();
        if (res.status === 200) {
          dispatch(setProfileData(data));
          dispatch(setUserData(data));

        }
      }
      return res;
    };
  }

  static changeAdminPassword(passwordData) {
    return async (dispatch, getState) => {
      registerAccessToken(getState().user.tokens.access);
      const [res, data] = await api.user.put.changeAdminPassword(passwordData);
      return res;
    };
  }

  static updateAdminStatus(userId, status) {
    return async (dispatch, getState) => {
      registerAccessToken(getState().user.tokens.access);
      const [res, data] = await api.user.put.changeStatus(userId, status);
      if (res.status === 200) {
        const [res,data] =  await api.user.get.admins();
        if (res.status === 200) {
          dispatch(setAdmins(data));
        }
      }
      return res;
    };
  }

}
