import { createSelector } from "@reduxjs/toolkit";
import { RootStateLib } from "../Helpers/store";

const loadingSelector = createSelector(
  (state: RootStateLib) => state.auth,
  (loading) => loading
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
};
