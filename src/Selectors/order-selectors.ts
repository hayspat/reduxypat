import { createSelector } from "@reduxjs/toolkit";
import { RootStateLib } from "../Helpers/store";

const loadingSelector = createSelector(
  (state: RootStateLib) => state.orders.getCarrierOrdersByOrderStatus.loading,
  (state: RootStateLib) => state.orders.getMerchantBranchSummary.loading,
  (state: RootStateLib) => state.orders.getOrderByIdAsync.loading,
  (state: RootStateLib) => state.orders.getOrdersByUserIdAsync.loading,
  (state: RootStateLib) => state.orders.getUserActiveOrder.loading,
  (state: RootStateLib) => state.orders.insertOrderAsync.loading,
  (state: RootStateLib) => state.orders.searchOrderAsync.loading,
  (state: RootStateLib) => state.orders.updateOrderAsync.loading,
  (state: RootStateLib) => state.orders.updateOrderStatusAsync.loading,

  (
    getCarrierOrdersByOrderStatus,
    getMerchantBranchSummary,
    getOrderByIdAsync,
    getOrdersByUserIdAsync,
    getUserActiveOrder,
    insertOrderAsync,
    searchOrderAsync,
    updateOrderAsync,
    updateOrderStatusAsync
  ) => ({
    getCarrierOrdersByOrderStatus,
    getMerchantBranchSummary,
    getOrderByIdAsync,
    getOrdersByUserIdAsync,
    getUserActiveOrder,
    insertOrderAsync,
    searchOrderAsync,
    updateOrderAsync,
    updateOrderStatusAsync,
  })
);

const ordersSelector = createSelector(
  (state: RootStateLib) => state.orders.getOrdersByUserIdAsync.response,
  (orders) => orders
);

const getOrdersByUserIdErrorSelector = createSelector(
  (state: RootStateLib) => state.orders.getOrdersByUserIdAsync.messages,
  (getOrdersByUserIdError) => getOrdersByUserIdError
);

const orderSelector = createSelector(
  (state: RootStateLib) => state.orders.getOrderByIdAsync.response,
  (order) => order
);
const orderErrorSelector = createSelector(
  (state: RootStateLib) => state.orders.getOrderByIdAsync.messages,
  (insertedOrderError) => insertedOrderError
);

const insertOrderErrorSelector = createSelector(
  (state: RootStateLib) => state.orders.insertOrderAsync.messages,
  (insertOrderError) => insertOrderError
);

const orderSliceSelector = createSelector(
  (state: RootStateLib) => state.orders,
  (state) => state
);

const orderTableSelector = createSelector(
  (state: RootStateLib) => state.orders.searchOrderAsync,
  (state) => state
);

enum ActiveOrderStatusTypes {
  NEW = 1,
  PREPARING,
  READY,
  ASSIGNED,
  SHIPPING,
}

const activeLastOrderSelector = createSelector(
  (state: RootStateLib) => state.orders.getOrdersByUserIdAsync.response.orders,
  (orders) => {
    return [...(orders || [])].reverse().filter((_) => {
      return ActiveOrderStatusTypes[
        _.orderStatus as keyof typeof ActiveOrderStatusTypes
      ];
    });
  }
);

export const OrdersSelector = {
  ordersSelector,
  getOrdersByUserIdErrorSelector,
  orderSelector,
  orderErrorSelector,
  insertOrderErrorSelector,
  orderSliceSelector,
  activeLastOrderSelector,
  loadingSelector,
  orderTableSelector,
};
