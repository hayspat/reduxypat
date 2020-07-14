import { createSlice, AnyAction, SerializedError } from "@reduxjs/toolkit";
import { SliceNames, ThunkActionTypes } from "../Helpers/enums";
import { ResponseModel, IBasketState } from "../Helpers/state-types";
import { Api, generateThunk } from "../Api/api";

const initialState: IBasketState = {
  insertBasketItem: ResponseModel,
  getUserBasketByAddressIdAsync: ResponseModel,
  removeBasketItemAsync: ResponseModel,
  removeUserBasketAsync: ResponseModel,
};

const insertBasketItem = generateThunk(
  ThunkActionTypes.insertBasketItem,
  Api.v1BasketInsertbasketitemCreate
);

const getUserBasketByAddressId = generateThunk(
  ThunkActionTypes.getUserBaskerByAddressIdAsync,
  Api.v1BasketGetuserbasketbyaddressidasyncList
);

const removeBasketItem = generateThunk(
  ThunkActionTypes.removeBasketItemAsync,
  Api.v1BasketRemovebasketitemasyncDelete
);

const removeUserBasket = generateThunk(
  ThunkActionTypes.removeUserBasketAsync,
  Api.v1BasketRemoveuserbasketasyncDelete
);

const BasketSlice = createSlice({
  name: SliceNames.basket,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      (
        action: AnyAction
      ): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith("basket") && action.type.endsWith("/fulfilled"),
      (state, action) => {
        const subSlice: keyof IBasketState = action.type.split("/")[1];
        state[subSlice] = { ...action.payload, loading: false };
      }
    );

    builder.addMatcher(
      (
        action: AnyAction
      ): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith("basket") && action.type.endsWith("/pending"),
      (state, action) => {
        const subSlice: keyof IBasketState = action.type.split("/")[1];
        state[subSlice] = { ...action.payload, loading: true };
      }
    );

    builder.addMatcher(
      (
        action: AnyAction
      ): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith("basket") && action.type.endsWith("/rejected"),
      (state, action) => {
        const subSlice: keyof IBasketState = action.type.split("/")[1];
        state[subSlice] = { ...action.payload, loading: false };
      }
    );
  },
});

export const BasketActions = {
  ...BasketSlice.actions,
  insertBasketItem,
  getUserBasketByAddressId,
  removeBasketItem,
  removeUserBasket,
};

export const BasketReducer = BasketSlice.reducer;
