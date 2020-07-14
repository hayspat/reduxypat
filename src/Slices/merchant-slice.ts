import { createSlice, AnyAction, SerializedError } from "@reduxjs/toolkit";
import { SliceNames, ThunkActionTypes } from "../Helpers/enums";
import { ResponseModel, IMerchantState } from "../Helpers/state-types";
import { generateThunk, Api } from "../Api/api";

const initialState: IMerchantState = {
  getMerchantBranchIdByAddressId: { ...ResponseModel, response: null },
  getMerchantBranchIdByLatLong: { ...ResponseModel, response: null },
};

const getMerchantBranchIdByAddressId = generateThunk(
  ThunkActionTypes.insertCarrier,
  Api.v1CarrierInsertcarrierCreate
);

const getMerchantBranchIdByLatLong = generateThunk(
  ThunkActionTypes.insertCarrier,
  Api.v1CarrierInsertcarrierCreate
);

const MerchantSlice = createSlice({
  name: SliceNames.merchant,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      (
        action: AnyAction
      ): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith("merchant") &&
        action.type.endsWith("/fulfilled"),
      (state, action) => {
        const subSlice: keyof IMerchantState = action.type.split("/")[1];
        state[subSlice] = { ...action.payload, loading: false };
      }
    );

    builder.addMatcher(
      (
        action: AnyAction
      ): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith("merchant") && action.type.endsWith("/pending"),
      (state, action) => {
        const subSlice: keyof IMerchantState = action.type.split("/")[1];
        state[subSlice] = { ...action.payload, loading: true };
      }
    );

    builder.addMatcher(
      (
        action: AnyAction
      ): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith("merchant") && action.type.endsWith("/rejected"),
      (state, action) => {
        const subSlice: keyof IMerchantState = action.type.split("/")[1];
        state[subSlice] = { ...action.payload, loading: false };
      }
    );
  },
});

export const MerchantActions = {
  ...MerchantSlice.actions,
  getMerchantBranchIdByAddressId,
  getMerchantBranchIdByLatLong,
};

export const MerchantReducer = MerchantSlice.reducer;
