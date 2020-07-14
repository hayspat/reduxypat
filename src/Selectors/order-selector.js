import { createSelector } from '@reduxjs/toolkit';
import STATE_NAMES from '../helpers/StateNames';

const order = STATE_NAMES.ORDER;

const loadingSelector = createSelector(
  (state) => state[order].loading,
  (loading) => loading,
);

const ordersSelector = createSelector(
  (state) => state[order].orders,
  (orders) => orders,
);

const orderSelector = createSelector(
  (state) => state[order].insertedOrder,
  (order) => order,
);
const orderErrorSelector = createSelector(
  (state) => state[order].insertedOrderError,
  (insertedOrderError) => insertedOrderError,
);

const pageCountSelector = createSelector(
  (state) => state[order].pageCount,
  (pageCount) => pageCount,
);

const currentPageSelector = createSelector(
  (state) => state[order].currentPage,
  (currentPage) => currentPage,
);

const totalCountSelector = createSelector(
  (state) => state[order].totalCount,
  (totalCount) => totalCount,
);

const getOrdersByUserIdErrorSelector = createSelector(
  (state) => state[order].getOrdersByUserIdError,
  (getOrdersByUserIdError) => getOrdersByUserIdError,
);

const insertOrderErrorSelector = createSelector(
  (state) => state[order].insertOrderError,
  (insertOrderError) => insertOrderError,
);

const orderSliceSelector = createSelector(
  (state) => state[order],
  (state) => state,
);

const selectedOrderSelector = createSelector(
  state => state[order].selectedOrder,
  selectedOrder => selectedOrder
);

const selectedOrderLoadingSelector = createSelector(
  state => state[order].selectedOrderLoading,
  selectedOrderLoading => selectedOrderLoading
);

const selectedOrderErrorSelector = createSelector(
  state => state[order].selectedOrderError,
  selectedOrderError => selectedOrderError
);

const OrderStatusTypes = {
  NEW: true,
  PREPARING: true,
  READY: true,
  ASSIGNED: true,
  SHIPPING: true
}

const activeLastOrderSelector = createSelector(
  state => state[order]?.orders,
  orders => {
    return [...orders].reverse().filter(_ => {
      return OrderStatusTypes[_.orderStatus];
    })
  }
)


export default {
  orderSelector,
  ordersSelector,
  loadingSelector,
  pageCountSelector,
  
  selectedOrderSelector,
  selectedOrderErrorSelector,
  selectedOrderLoadingSelector,

  activeLastOrderSelector,

  currentPageSelector,
  totalCountSelector,
  orderSliceSelector,
  orderErrorSelector,
  insertOrderErrorSelector,
  getOrdersByUserIdErrorSelector,
};
