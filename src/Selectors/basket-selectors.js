import { createSelector } from "@reduxjs/toolkit";
import STATE_NAMES from "../helpers/StateNames";

const basket = STATE_NAMES.BASKET;

const loadingSelector = createSelector(
  (state) => state[basket].loading,
  (loading) => loading
);

const basketSelector = createSelector(
  (state) => state[basket].basket,
  (basket) => basket
);

const insertBasketItemSelector = createSelector(
  (state) => state[basket].insertBasketItemSuccess,
  (insertBasketItemSuccess) => insertBasketItemSuccess
);

const getBasketByAddressIdSuccessSelectors = createSelector(
  (state) => state[basket].getBasketByAdressIdSuccess,
  (getBasketByAddressIdSuccess) => getBasketByAddressIdSuccess
);

const removeBasketSuccessSelectors = createSelector(
  (state) => state[basket].removeBasketSuccess,
  (removeBasketSuccess) => removeBasketSuccess
);

const removeBasketItemSuccessSelectors = createSelector(
  (state) => state[basket].removeBasketItemSuccess,
  (removeBasketItemSuccess) => removeBasketItemSuccess
);

const basketItemSelector = createSelector(
  (state) => state[basket]?.basket?.items,
  (items) => items
);

const addedProductQuantity = createSelector(
  (state) => state[basket]?.basket,
  (basket) => {
    const items = {};
    basket?.items?.map((item) => {
      items[item.productId] = {
        ...item,
      };
    });

    return items;
  }
);

export default {
  basketSelector,
  loadingSelector,
  basketItemSelector,
  addedProductQuantity,
  insertBasketItemSelector,
  removeBasketSuccessSelectors,
  removeBasketItemSuccessSelectors,
  getBasketByAddressIdSuccessSelectors,
};
