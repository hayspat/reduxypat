import { createSlice, AnyAction, SerializedError } from "@reduxjs/toolkit";
import { ThunkActionTypes, SliceNames } from "../Helpers/enums";
import { generateThunk, Api } from "../Api/api";
import { ResponseModel, IAuthState } from "../Helpers/state-types";

const initialState: IAuthState = {
  validateUser: ResponseModel,
  userDetails: ResponseModel,
  registerUser: ResponseModel,
  createForgetPasswordRequest: ResponseModel,
  validateForgetPasswordRequest: ResponseModel,
  updateForgetPasswordRequest: ResponseModel,
  insertUserAddress: ResponseModel,
  updateUserAddress: ResponseModel,
  getUserAddresses: ResponseModel,
  getCurrentUserAddress: ResponseModel,
  setCurrentUserAddress: ResponseModel,
};

const verifyUser = generateThunk(
  ThunkActionTypes.validateUser,
  Api.v1AuthenticationValidateuserCreate
);

const getUserDetails = generateThunk(
  ThunkActionTypes.userDetails,
  Api.v1AuthenticationGetuserdetailsList
);

const createForgotPassword = generateThunk(
  ThunkActionTypes.createForgetPasswordRequest,
  Api.v1AuthenticationCreateforgetpasswordrequestCreate
);

const validateForgotPassword = generateThunk(
  ThunkActionTypes.validateForgetPasswordRequest,
  Api.v1AuthenticationValidateforgetpasswordrequestCreate
);

const updateForgetPassword = generateThunk(
  ThunkActionTypes.updateForgetPasswordRequest,
  Api.v1AuthenticationUpdateforgetpasswordrequestUpdate
);

const insertUserAddress = generateThunk(
  ThunkActionTypes.insertUserAddress,
  Api.v1AuthenticationInsertuseraddressCreate
);

const updateUserAddress = generateThunk(
  ThunkActionTypes.updateUserAddress,
  Api.v1AuthenticationUpdateuseraddressUpdate
);

const getUserAddresses = generateThunk(
  ThunkActionTypes.getUserAddresses,
  Api.v1AuthenticationGetuseraddressesList
);

const getCurrentUserAddress = generateThunk(
  ThunkActionTypes.getCurrentUserAddress,
  Api.v1AuthenticationGetcurrentuseraddressList
);

const setCurrentUserAddress = generateThunk(
  ThunkActionTypes.setCurrentUserAddress,
  Api.v1AuthenticationSetcurrentuseraddressUpdate
);

const AuthSlice = createSlice({
  name: SliceNames.auth,
  initialState,
  reducers: {
    setToken: (state, action) => {
      if (state.validateUser.response) {
        state.validateUser.response.token = action.payload;
      } else {
        state.validateUser.response = { token: action.payload };
      }
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (
        action: AnyAction
      ): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith("auth") && action.type.endsWith("/fulfilled"),
      (state, action) => {
        const subSlice: keyof IAuthState = action.type.split("/")[1];
        state[subSlice] = { ...action.payload, loading: false };
      }
    );

    builder.addMatcher(
      (
        action: AnyAction
      ): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith("auth") && action.type.endsWith("/pending"),
      (state, action) => {
        const subSlice: keyof IAuthState = action.type.split("/")[1];
        state[subSlice] = { ...action.payload, loading: true };
      }
    );

    builder.addMatcher(
      (
        action: AnyAction
      ): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith("auth") && action.type.endsWith("/rejected"),
      (state, action) => {
        const subSlice: keyof IAuthState = action.type.split("/")[1];
        state[subSlice] = { ...action.payload, loading: false };
      }
    );
  },
});

export const AuthActions = {
  ...AuthSlice.actions,
  createForgotPassword,
  verifyUser,
  getUserDetails,
  validateForgotPassword,
  updateForgetPassword,
  insertUserAddress,
  updateUserAddress,
  getUserAddresses,
  getCurrentUserAddress,
  setCurrentUserAddress,
};

export const AuthReducer = AuthSlice.reducer;
