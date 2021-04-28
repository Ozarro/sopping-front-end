import { createDraftSafeSelector } from "@reduxjs/toolkit";

export const getAllProducts = createDraftSafeSelector(
    (state) => state.product,
    (product) => product.products
);

export const getAllCategories = createDraftSafeSelector(
    (state) => state.product,
    (product) => product.categories
);