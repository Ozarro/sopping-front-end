import axios from "axios";

/**
 * Setup Axios
 */
const BASE_URL_HEROKU = process.env.BASE_URL_HEROKU;
// const BASE_URL_HEROKU = process.env.BASE_URL_HEROKU;
// const BASE_URL_LOCAL = process.env.BASE_URL_LOCAL;
const BASE_URL_LOCAL = "http://localhost:8000/api";

axios.defaults.baseURL = BASE_URL_HEROKU;

/**
 * Register Access token with axios
 * @param token
 */
export const registerAccessToken = (token) => {
  axios.defaults.headers["authorization"] = `Bearer ${token}`;
};

/**
 * Convert Axios Response into
 *      status: http status code
 *      message: message from backend api
 * @param res
 */
function readStatus(res) {
  console.log("read status res", res);
  if (!res || !res.status) {
    return {
      status: 408,
      message: "Check your internet connection",
    };
  }
  return {
    status: res.status,
    message: res.data.message,
  };
}

/**
 * Resolve Axios Response
 * @param axiosRes
 * @param options
 */
async function ajaxResolver(axiosRes, options = null) {
  try {
    const res = await axiosRes;
    console.log("Ajax Resolver Response", res);
    if (options && options.fullBody) return [readStatus(res), res.data];
    else return [readStatus(res), res.data.data];
  } catch (e) {
    const res = e.response;
    console.log("Ajax error", e);
    return [readStatus(res), null];
  }
}

/**
 * Form data config
 */
const formDataConfig = {
  headers: { 'content-type': 'multipart/form-data' }
}

export default {
  user: {
    login: {
      async user(email, password) {
        return ajaxResolver(
          axios.post("/user/login/user", { email, password }),
          { fullBody: true }
        );
      },
    },

    add: {
      async user(data) {
        return ajaxResolver(axios.post("/user/register/user", data));
      },
    },

    get: {
      async userProfile() {
        return ajaxResolver(axios.get("/user/get-profile"));
      }
    },

    put: {
      async changeUserPassword(data) {
        return ajaxResolver(axios.put(`/user/change-password/user`, data));
      },
      async updateUserProfile(profileData) {
        return ajaxResolver(
          axios.put(`/user/update-profile/user`, profileData,formDataConfig)
        );
      }
    },
  },
  product: {

    get: {
      async allProducts(query) {
        return ajaxResolver(axios.get(`/product/get-all-products`, { params: query }));
      },
    },
  },

  category: {
    get: {
      async allCategories(query) {
        return ajaxResolver(axios.get(`/product/get-categories`, { params: query }));
      },
    },
  },
  coupon: {
    get: {
      async allCoupons(query) {
        return ajaxResolver(axios.get(`/order/get-coupons`, { params: query }));
      },
      async couponByCode(couponCode){
        return ajaxResolver(axios.get(`/order/get-coupon/${couponCode}`))
      }
    },
  },
  order: {
    add : {
      async order(orderData) {
        return ajaxResolver(axios.get(`/order/add-order`,orderData));
      },
    },
    get: {
      async userOrders(query) {
        return ajaxResolver(axios.get(`/order/get-user-orders`, { params: query }));
      },
    },

  },
  cart: {
    add : {
      async cartItem(itemData) {
        return ajaxResolver(axios.get(`/order/add-cart-item`,itemData));
      },
    },
    get: {
      async userCartItems(query) {
        return ajaxResolver(axios.get(`/order/get-user-cart-items`, { params: query }));
      },
    },
  },
  zone: {
    get: {
      async zoneCities(query) {
        return ajaxResolver(axios.get(`/order/get-zone-cities`, { params: query }));
      },
      async zoneCityArray(query) {
        return ajaxResolver(axios.get(`/order/get-zone-array`, { params: query }));
      },
    },
  },


};
