import { createSelector } from "@reduxjs/toolkit";

const loadingSelector = createSelector(
  (state) => state[address].loading,
  (loading) => loading
);

const insertedAddressSelector = createSelector(
  (state) => state[address].insertedAddress,
  (insertedAddress) => insertedAddress
);

const insertedAddressErrorSelector = createSelector(
  (state) => state[address].insertedAddressError,
  (insertedAddressError) => insertedAddressError
);

const addressListSelector = createSelector(
  (state) => state[address].addressList,
  (addressList) => addressList
);

const addressListErrorSelector = createSelector(
  (state) => state[address].addressListError,
  (addressListError) => addressListError
);

const addressSelector = createSelector(
  (state) => state[address],
  (state) => state
);

export default {
  loadingSelector,
  insertedAddressSelector,
  addressSelector,
  addressListSelector,
  insertedAddressErrorSelector,
  addressListErrorSelector,
};
