import { SliceTypes } from "./Helpers/enums";
import { AuthReducer, AuthActions } from "./auth-slice";
import { OrdersReducer, OrderActions } from "./orders-slice";
import { ProductsReducer, ProductsActions } from "./products-slice";

export const Slices = {
  [SliceTypes.auth]: AuthReducer,
  [SliceTypes.orders]: OrdersReducer,
  [SliceTypes.products]: ProductsReducer,
};

export const Actions = {
  Auth: AuthActions,
  Order: OrderActions,
  Product: ProductsActions,
};
