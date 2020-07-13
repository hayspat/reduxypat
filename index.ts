import { SliceTypes } from "./Helpers/enums";
import { authSlice } from "./auth-slice";
import { ordersSlice } from "./orders-slice";
import { productsSlice } from "./products-slice";
import { statisticsSlice } from "./statistics-slice";

export default {
  [SliceTypes.auth]: authSlice,
  [SliceTypes.orders]: ordersSlice,
  [SliceTypes.products]: productsSlice,
  [SliceTypes.stats]: statisticsSlice,
};
