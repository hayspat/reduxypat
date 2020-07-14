import { createSelector } from "@reduxjs/toolkit";
import { RootStateLib } from "../Helpers/store";

const loadingSelector = createSelector(
  (state: RootStateLib) => state.auth.createForgetPasswordRequest.loading,
  (state: RootStateLib) => state.auth.getCurrentUserAddress.loading,
  (state: RootStateLib) => state.auth.getUserAddresses.loading,
  (state: RootStateLib) => state.auth.insertUserAddress.loading,
  (state: RootStateLib) => state.auth.registerUser.loading,
  (state: RootStateLib) => state.auth.setCurrentUserAddress.loading,
  (state: RootStateLib) => state.auth.updateForgetPasswordRequest.loading,
  (state: RootStateLib) => state.auth.updateUserAddress.loading,
  (state: RootStateLib) => state.auth.userDetails.loading,
  (state: RootStateLib) => state.auth.validateForgetPasswordRequest.loading,
  (state: RootStateLib) => state.auth.validateUser.loading,

  (
    createForgetPasswordRequest,
    getCurrentUserAddress,
    getUserAddresses,
    insertUserAddress,
    registerUser,
    setCurrentUserAddress,
    updateForgetPasswordRequest,
    updateUserAddress,
    userDetails,
    validateForgetPasswordRequest,
    validateUser
  ) => ({
    createForgetPasswordRequest,
    getCurrentUserAddress,
    getUserAddresses,
    insertUserAddress,
    registerUser,
    setCurrentUserAddress,
    updateForgetPasswordRequest,
    updateUserAddress,
    userDetails,
    validateForgetPasswordRequest,
    validateUser,
  })
);

const tokenSelector = createSelector(
  (state: RootStateLib) => state.auth.validateUser.response.token,
  (token) => token
);

const merchantBranchIdSelector = createSelector(
  (state: RootStateLib) => state.auth.userDetails.response.merchantBranchId,
  (merchantBranchId) => merchantBranchId
);

const refreshTokenSelector = createSelector(
  (state: RootStateLib) => state.auth.validateUser.response.refreshToken,
  (refreshToken) => refreshToken
);

const userDetailSelector = createSelector(
  (state: RootStateLib) => state.auth.userDetails.response,
  (userDetail) => userDetail
);

const userDetailErrorSelector = createSelector(
  (state: RootStateLib) => state.auth.userDetails.messages,
  (userDetailError) => userDetailError
);

const registerSelector = createSelector(
  (state: RootStateLib) => state.auth.registerUser.result,
  (isRegisterSuccess) => isRegisterSuccess
);

const registerErrorSelector = createSelector(
  (state: RootStateLib) => state.auth.registerUser.messages,
  (registerUserError) => registerUserError
);

const createForgotPasswordErrorSelector = createSelector(
  (state: RootStateLib) => state.auth.createForgetPasswordRequest.messages,
  (createForgotPasswordError) => createForgotPasswordError
);

const reateForgotPasswordSuccessSelector = createSelector(
  (state: RootStateLib) => state.auth.createForgetPasswordRequest.result,
  (createForgotPasswordSuccess) => createForgotPasswordSuccess
);

const validateForgotPasswordErrorSelector = createSelector(
  (state: RootStateLib) => state.auth.createForgetPasswordRequest.messages,
  (validateForgotPasswordError) => validateForgotPasswordError
);

const validateForgotPasswordSuccessSelector = createSelector(
  (state: RootStateLib) => state.auth.validateForgetPasswordRequest.result,
  (validateForgotPasswordSuccess) => validateForgotPasswordSuccess
);

const rupdateForgotPasswordErrorSelector = createSelector(
  (state: RootStateLib) => state.auth.updateForgetPasswordRequest.messages,
  (updateForgotPasswordError) => updateForgotPasswordError
);

const updateForgotPasswordSuccessSelector = createSelector(
  (state: RootStateLib) => state.auth.updateForgetPasswordRequest.result,
  (updateForgotPasswordSuccess) => updateForgotPasswordSuccess
);

const authSelector = createSelector(
  (state: RootStateLib) => state.auth,
  (state) => state
);

const insertedAddressSelector = createSelector(
  (state: RootStateLib) => state.auth.insertUserAddress.response,
  (insertedAddress) => insertedAddress
);

const insertedAddressErrorSelector = createSelector(
  (state: RootStateLib) => state.auth.insertUserAddress.messages,
  (insertedAddressError) => insertedAddressError
);

const addressListSelector = createSelector(
  (state: RootStateLib) => state.auth.getUserAddresses.response.addressList,
  (addressList) => addressList
);

const addressListErrorSelector = createSelector(
  (state: RootStateLib) => state.auth.getUserAddresses.messages,
  (addressListError) => addressListError
);

export const AuthSelectors = {
  authSelector,
  loadingSelector,
  tokenSelector,
  refreshTokenSelector,
  userDetailSelector,
  merchantBranchIdSelector,
  userDetailErrorSelector,
  registerSelector,
  registerErrorSelector,
  createForgotPasswordErrorSelector,
  reateForgotPasswordSuccessSelector,
  validateForgotPasswordErrorSelector,
  validateForgotPasswordSuccessSelector,
  rupdateForgotPasswordErrorSelector,
  updateForgotPasswordSuccessSelector,
  insertedAddressSelector,
  insertedAddressErrorSelector,
  addressListSelector,
  addressListErrorSelector,
};
