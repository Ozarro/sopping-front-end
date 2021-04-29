import { createDraftSafeSelector } from "@reduxjs/toolkit";

export const getPreloadShow = createDraftSafeSelector(
    (state) => state.ui,
    (ui) => ui.preloadShow
);