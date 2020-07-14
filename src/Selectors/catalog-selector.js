import { createSelector } from '@reduxjs/toolkit';
import STATE_NAMES from '../helpers/StateNames';

const catalog = STATE_NAMES.CATALOG;

const loadingSelector = createSelector(
  (state) => state[catalog].loading,
  (loading) => loading,
);

const catalogSelector = createSelector(
  (state) => state[catalog],
  (state) => state,
);

const categoriesSelector = createSelector(
  (state) => state[catalog]?.categories?.baseCategories,
  (categories) => categories,
);

const categoriesErrorSelector = createSelector(
  (state) => state[catalog].categoriesError,
  (categoriesError) => categoriesError,
);

const selectedCategoriesProductSelector = createSelector(
  (state) => state[catalog].selectedCategoriesProduct,
  (selectedCategoriesProduct) => selectedCategoriesProduct,
);

const selectedCategoriesProductErrorSelector = createSelector(
  (state) => state[catalog].selectedCategoriesProductError,
  (selectedCategoriesProductError) => selectedCategoriesProductError,
);

const searchResultSelector = createSelector(
  (state) => state[catalog].searchResult,
  (searchResult) => searchResult,
);

const searchResultSelectorError = createSelector(
  (state) => state[catalog].searchResultError,
  (searchResultError) => searchResultError,
);

export default {
  loadingSelector,
  catalogSelector,

  categoriesSelector,
  categoriesErrorSelector,

  selectedCategoriesProductSelector,
  selectedCategoriesProductErrorSelector,

  searchResultSelector,
  searchResultSelectorError,
};
