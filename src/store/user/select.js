import { createDraftSafeSelector } from "@reduxjs/toolkit";

export const getUserId = createDraftSafeSelector(
  (state) => state.user,
  (user) => user.userData.userId
);

export const getImage = createDraftSafeSelector(
    (state) => state.user,
    (user) => user.userData.image
);

export const getAccountType = createDraftSafeSelector(
  (state) => state.user,
  (user) => user.userData.type
);

export const getAccessToken = createDraftSafeSelector(
  (state) => state.user,
  (user) => user.tokens.access
);

export const getRefreshToken = createDraftSafeSelector(
  (state) => state.user,
  (user) => user.tokens.refresh
);

export const getProfileData = createDraftSafeSelector(
  (state) => state.user,
  (user) => user.profileData
);

export const getAllAdmins = createDraftSafeSelector(
    (state) => state.user,
    (user) => user.admins
);
