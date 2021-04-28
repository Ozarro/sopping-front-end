import { createDraftSafeSelector } from "@reduxjs/toolkit";

export const selectAllOrders = createDraftSafeSelector(
    (state) => state.order,
    (order) => order.orders
);

export const selectAllCoupons = createDraftSafeSelector(
    (state) => state.order,
    (order) => order.coupons
);

export const selectAllCartItems = createDraftSafeSelector(
    (state) => state.order,
    (order) => order.cartItems
);

export const selectZoneCities = createDraftSafeSelector(
    (state) => state.order,
    (order) => order.zoneCities
);

export const selectZoneArray = createDraftSafeSelector(
    (state) => state.order,
    (order) => order.zoneArray
);