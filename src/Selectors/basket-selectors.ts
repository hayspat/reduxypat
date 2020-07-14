import { createSelector } from "@reduxjs/toolkit";
import { RootStateLib } from "../Helpers/store";
import { BasketItemListDTO } from "../Api/api-types";

const loadingSelector = createSelector(
  (state: RootStateLib) => state.basket.getUserBasketByAddressIdAsync.loading,
  (state: RootStateLib) => state.basket.insertBasketItem.loading,
  (state: RootStateLib) => state.basket.removeBasketItemAsync.loading,
  (state: RootStateLib) => state.basket.removeUserBasketAsync.loading,

  (
    getUserBasketByAddressIdAsync,
    insertBasketItem,
    removeBasketItemAsync,
    removeUserBasketAsync
  ) => ({
    getUserBasketByAddressIdAsync,
    insertBasketItem,
    removeBasketItemAsync,
    removeUserBasketAsync,
  })
);

const basketSelector = createSelector(
  (state: RootStateLib) => state.basket.getUserBasketByAddressIdAsync.response,
  (basket) => basket
);

const insertBasketItemSelector = createSelector(
  (state: RootStateLib) => state.basket.insertBasketItem.result,
  (insertBasketItemSuccess) => insertBasketItemSuccess
);

const getBasketByAddressIdSuccessSelectors = createSelector(
  (state: RootStateLib) => state.basket.getUserBasketByAddressIdAsync.result,
  (getBasketByAddressIdSuccess) => getBasketByAddressIdSuccess
);

const removeBasketSuccessSelectors = createSelector(
  (state: RootStateLib) => state.basket.removeUserBasketAsync.result,
  (removeBasketSuccess) => removeBasketSuccess
);

const removeBasketItemSuccessSelectors = createSelector(
  (state: RootStateLib) => state.basket.removeBasketItemAsync,
  (removeBasketItemSuccess) => removeBasketItemSuccess
);

const basketItemSelector = createSelector(
  (state: RootStateLib) =>
    state.basket.getUserBasketByAddressIdAsync.response.items,
  (items) => items
);

const addedProductQuantity = createSelector(
  (state: RootStateLib) => state.basket.getUserBasketByAddressIdAsync.response,
  (basket) => {
    const items: { [key: number]: BasketItemListDTO } = {};
    basket?.items?.map((item) => {
      items[item.productId!] = {
        ...item,
      };
    });

    return items;
  }
);

export const BasketSelector = {
  basketSelector,
  loadingSelector,
  basketItemSelector,
  addedProductQuantity,
  insertBasketItemSelector,
  removeBasketSuccessSelectors,
  removeBasketItemSuccessSelectors,
  getBasketByAddressIdSuccessSelectors,
};
