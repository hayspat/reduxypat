import { createSlice, AnyAction, SerializedError } from "@reduxjs/toolkit";
import { ThunkActionTypes, SliceNames } from "./Helpers/enums";
import { generateThunk, Api } from "./Api/api";
import { ResponseModel, IAuthState } from "./Helpers/state-types";

const initialState: IAuthState = {
  validateUser: ResponseModel,
  userDetails: ResponseModel,
  registerUser: ResponseModel,
  createForgetPasswordRequest: ResponseModel,
  validateForgetPasswordRequest: ResponseModel,
  updateForgetPasswordRequest: ResponseModel,
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

const AuthSlice = createSlice({
  name: SliceNames.auth,
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.validateUser.response.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (
        action: AnyAction
      ): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.endsWith("/fulfilled"),
      (state, action) => {
        const subSlice: keyof IAuthState = action.type.split("/")[1];
        state[subSlice] = { ...action.payload, loading: false };
      }
    );

    builder.addMatcher(
      (
        action: AnyAction
      ): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.endsWith("/pending"),
      (state, action) => {
        const subSlice: keyof IAuthState = action.type.split("/")[1];
        state[subSlice] = { ...action.payload, loading: true };
      }
    );

    builder.addMatcher(
      (
        action: AnyAction
      ): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.endsWith("/rejected"),
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
};

export const AuthReducer = AuthSlice.reducer;
