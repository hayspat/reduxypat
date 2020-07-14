import { createSelector } from "@reduxjs/toolkit";
import { RootStateLib } from "../Helpers/store";

const loadingSelector = createSelector(
  (state: RootStateLib) => state.products.getBaseCategories.loading,
  (state: RootStateLib) => state.products.getProductDetails.loading,
  (state: RootStateLib) => state.products.getProductFilterList.loading,
  (state: RootStateLib) => state.products.getProductListByLatLong.loading,
  (state: RootStateLib) =>
    state.products.getProductListByMerchantBranch.loading,
  (state: RootStateLib) => state.products.getSubCategories.loading,
  (state: RootStateLib) => state.products.getSubCategoriesWithProduct.loading,
  (state: RootStateLib) =>
    state.products.getSubCategoriesWithProductsAndCategory.loading,
  (state: RootStateLib) => state.products.searchCategoriesAsync.loading,
  (state: RootStateLib) => state.products.searchProductByMerchantBranch.loading,
  (state: RootStateLib) => state.products.searchProductsByLatLong.loading,

  (
    getBaseCategories,
    getProductDetails,
    getProductFilterList,
    getProductListByLatLong,
    getProductListByMerchantBranch,
    getSubCategories,
    getSubCategoriesWithProduct,
    getSubCategoriesWithProductsAndCategory,
    searchCategoriesAsync,
    searchProductByMerchantBranch,
    searchProductsByLatLong
  ) => ({
    getBaseCategories,
    getProductDetails,
    getProductFilterList,
    getProductListByLatLong,
    getProductListByMerchantBranch,
    getSubCategories,
    getSubCategoriesWithProduct,
    getSubCategoriesWithProductsAndCategory,
    searchCategoriesAsync,
    searchProductByMerchantBranch,
    searchProductsByLatLong,
  })
);

const catalogSelector = createSelector(
  (state: RootStateLib) => state.products.getProductListByMerchantBranch,
  (state) => state
);

const categoriesSelector = createSelector(
  (state: RootStateLib) =>
    state.products.getBaseCategories.response.baseCategories,
  (categories) => categories
);

const categoriesErrorSelector = createSelector(
  (state: RootStateLib) => state.products.getBaseCategories.messages,
  (categoriesError) => categoriesError
);

const selectedCategoriesProductSelector = createSelector(
  (state: RootStateLib) =>
    state.products.getSubCategoriesWithProductsAndCategory.response,
  (selectedCategoriesProduct) => selectedCategoriesProduct
);

const selectedCategoriesProductErrorSelector = createSelector(
  (state: RootStateLib) =>
    state.products.getSubCategoriesWithProductsAndCategory.messages,
  (selectedCategoriesProductError) => selectedCategoriesProductError
);

const searchResultSelector = createSelector(
  (state: RootStateLib) =>
    state.products.searchProductByMerchantBranch.response,
  (searchResult) => searchResult
);

const searchResultSelectorError = createSelector(
  (state: RootStateLib) =>
    state.products.searchProductByMerchantBranch.messages,
  (searchResultError) => searchResultError
);

const productTableSelector = createSelector(
  (state: RootStateLib) => state.products.getProductFilterList,
  (state) => state
);

export const ProductsSelector = {
  loadingSelector,
  catalogSelector,
  categoriesSelector,
  categoriesErrorSelector,
  selectedCategoriesProductSelector,
  selectedCategoriesProductErrorSelector,
  searchResultSelector,
  searchResultSelectorError,
  productTableSelector,
};
