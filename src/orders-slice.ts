import { createSlice, AnyAction, SerializedError } from "@reduxjs/toolkit";
import { IOrderState, ResponseModel } from "./Helpers/state-types";
import { generateThunk, Api } from "./Api/api";
import { ThunkActionTypes, SliceNames } from "./Helpers/enums";

const initialState: IOrderState = {
  searchOrderAsync: ResponseModel,
};

export const asyncGetOrders = generateThunk(
  ThunkActionTypes.getOrders,
  Api.v1OrderSearchorderasyncCreate
);

export const asyncGetOrdersFake = generateThunk(
  ThunkActionTypes.getOrdersFake,
  Api.v1OrderSearchorderasyncCreate
);

const orderListSlice = createSlice({
  name: SliceNames.orderList,
  initialState,
  reducers: {
    setDefault: (state, action) => {
      state.searchOrderAsync.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (
        action: AnyAction
      ): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith("order") && action.type.endsWith("/fulfilled"),
      (state, action) => {
        const subSlice: keyof IOrderState = action.type.split("/")[1];
        state[subSlice] = { ...action.payload, loading: false };
      }
    );

    builder.addMatcher(
      (
        action: AnyAction
      ): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith("order") && action.type.endsWith("/pending"),
      (state, action) => {
        const subSlice: keyof IOrderState = action.type.split("/")[1];

        state[subSlice] = { ...initialState[subSlice], loading: true };
      }
    );

    builder.addMatcher(
      (
        action: AnyAction
      ): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith("order") && action.type.endsWith("/rejected"),
      (state, action) => {
        const subSlice: keyof IOrderState = action.type.split("/")[1];

        state[subSlice] = { ...action.payload, loading: false };
      }
    );
  },
});

export const ordersSlice = orderListSlice.reducer;