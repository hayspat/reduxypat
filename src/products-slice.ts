import { createSlice, AnyAction, SerializedError } from "@reduxjs/toolkit";
import { IProductState, ResponseModel } from "./Helpers/state-types";
import { generateThunk, Api } from "./Api/api";
import { ThunkActionTypes, SliceNames } from "./Helpers/enums";

const initialState: IProductState = {
  getProductFilterList: ResponseModel,
};

export const asyncGetProducts = generateThunk(
  ThunkActionTypes.getProducts,
  Api.v1ProductGetproductfilterlistList
);

const productListSlice = createSlice({
  name: SliceNames.productList,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      (
        action: AnyAction
      ): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith("product") && action.type.endsWith("/fulfilled"),
      (state, action) => {
        const subSlice: keyof IProductState = action.type.split("/")[1];
        state[subSlice] = { ...action.payload, loading: false };
      }
    );

    builder.addMatcher(
      (
        action: AnyAction
      ): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith("product") && action.type.endsWith("/pending"),
      (state, action) => {
        const subSlice: keyof IProductState = action.type.split("/")[1];

        state[subSlice] = { ...initialState[subSlice], loading: true };
      }
    );

    builder.addMatcher(
      (
        action: AnyAction
      ): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith("product") && action.type.endsWith("/rejected"),
      (state, action) => {
        const subSlice: keyof IProductState = action.type.split("/")[1];

        state[subSlice] = { ...action.payload, loading: false };
      }
    );
  },
});

export const productsSlice = productListSlice.reducer;
