import { createSlice, AnyAction, SerializedError } from "@reduxjs/toolkit";
import { IOrderState, ResponseModel } from "../Helpers/state-types";
import { generateThunk, Api } from "../Api/api";
import { ThunkActionTypes, SliceNames } from "../Helpers/enums";

const initialState: IOrderState = {
  searchOrderAsync: ResponseModel,
  getMerchantBranchSummary: ResponseModel,
  insertOrderAsync: ResponseModel,
  getOrderByIdAsync: ResponseModel,
  getOrdersByUserIdAsync: ResponseModel,
  updateOrderAsync: ResponseModel,
  updateOrderStatusAsync: ResponseModel,
  getUserActiveOrder: ResponseModel,
  getCarrierOrdersByOrderStatus: ResponseModel,
};

const searchOrderAsync = generateThunk(
  ThunkActionTypes.searchOrderAsync,
  Api.v1OrderSearchorderasyncCreate
);

const insertOrder = generateThunk(
  ThunkActionTypes.insertOrderAsync,
  Api.v1OrderInsertorderasyncCreate
);

const getOrderById = generateThunk(
  ThunkActionTypes.getOrderByIdAsync,
  Api.v1OrderGetorderbyidasyncList
);
const getOrdersByUserId = generateThunk(
  ThunkActionTypes.getOrdersByUserIdAsync,
  Api.v1OrderGetordersbyuseridasyncList
);
const updateOrder = generateThunk(
  ThunkActionTypes.updateOrderAsync,
  Api.v1OrderUpdateorderasyncCreate
);
const updateOrderStatus = generateThunk(
  ThunkActionTypes.updateOrderStatusAsync,
  Api.v1OrderUpdateorderstatusasyncCreate
);
const getUserActiveOrder = generateThunk(
  ThunkActionTypes.getUserActiveOrder,
  Api.v1OrderGetuseractiveorderList
);

/* const getCarrierOrdersByOrderStatus = generateThunk(
  ThunkActionTypes.getCarrierOrdersByOrderStatus,
  Api.v1OrderGetcarrierordersbyorderstatusCreate
); */

const getMerchantBranchSummary = generateThunk(
  ThunkActionTypes.getMerchantBranchSummary,
  Api.v1OrderGetmerchantbranchsummaryList
);

const ordersSlice = createSlice({
  name: SliceNames.orders,
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
        state[subSlice] = { ...action.payload, loading: true };
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

export const OrderActions = {
  ...ordersSlice.actions,
  searchOrderAsync,
  getMerchantBranchSummary,
  insertOrder,
  getOrdersByUserId,
  getOrderById,
  updateOrder,
  updateOrderStatus,
  getUserActiveOrder,
};

export const OrdersReducer = ordersSlice.reducer;
