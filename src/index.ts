import { AuthReducer, AuthActions } from "./Slices/auth-slice";
import { OrdersReducer, OrderActions } from "./Slices/orders-slice";
import { ProductsReducer, ProductsActions } from "./Slices/products-slice";
import { BasketReducer, BasketActions } from "./Slices/basket-slice";
import { CampaignReducer, CampaignActions } from "./Slices/campaign-slice";
import { CarrierReducer, CarrierActions } from "./Slices/carrier-slice";
import { MerchantReducer, MerchantActions } from "./Slices/merchant-slice";
import { Api as ApiInstance, withAuth as ApiAuth } from "./Api/api";
import { SliceTypes } from "./Helpers/enums";

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

export const Api = ApiInstance;
export const withAuth = ApiAuth;
