import { AuthReducer, AuthActions } from "./Slices/auth-slice";
import { OrdersReducer, OrderActions } from "./Slices/orders-slice";
import { ProductsReducer, ProductsActions } from "./Slices/products-slice";
import { BasketReducer, BasketActions } from "./Slices/basket-slice";
import { CampaignReducer, CampaignActions } from "./Slices/campaign-slice";
import { CarrierReducer, CarrierActions } from "./Slices/carrier-slice";
import { MerchantReducer, MerchantActions } from "./Slices/merchant-slice";
import { Api as ApiInstance, withAuth as ApiAuth } from "./Api/api";
import { SliceTypes } from "./Helpers/enums";
import { AuthSelectors } from "./Selectors/auth-selectors";
import { BasketSelector } from "./Selectors/basket-selectors";
import { OrdersSelector } from "./Selectors/order-selectors";
import { ProductsSelector } from "./Selectors/product-selectors";

export const Slices = {
  [SliceTypes.auth]: AuthReducer,
  [SliceTypes.basket]: BasketReducer,
  [SliceTypes.campaign]: CampaignReducer,
  [SliceTypes.carrier]: CarrierReducer,
  [SliceTypes.merchant]: MerchantReducer,
  [SliceTypes.orders]: OrdersReducer,
  [SliceTypes.products]: ProductsReducer,
};

export const Actions = {
  [SliceTypes.auth]: AuthActions,
  [SliceTypes.basket]: BasketActions,
  [SliceTypes.campaign]: CampaignActions,
  [SliceTypes.carrier]: CarrierActions,
  [SliceTypes.merchant]: MerchantActions,
  [SliceTypes.orders]: OrderActions,
  [SliceTypes.products]: ProductsActions,
};

export const Selectors = {
  [SliceTypes.auth]: AuthSelectors,
  [SliceTypes.basket]: BasketSelector,
  [SliceTypes.orders]: OrdersSelector,
  [SliceTypes.products]: ProductsSelector,
};

export const Api = ApiInstance;
export const withAuth = ApiAuth;
