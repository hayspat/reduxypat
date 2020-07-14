import { createSlice, AnyAction, SerializedError } from "@reduxjs/toolkit";
import { IProductState, ResponseModel } from "../Helpers/state-types";
import { generateThunk, Api } from "../Api/api";
import { ThunkActionTypes, SliceNames } from "../Helpers/enums";

const initialState: IProductState = {
  getProductFilterList: ResponseModel,
  getSubCategoriesWithProductsAndCategory: ResponseModel,
  searchProductByMerchantBranch: ResponseModel,
  getProductListByMerchantBranch: ResponseModel,
  getProductListByLatLong: ResponseModel,
  searchProductsByLatLong: ResponseModel,
  searchCategoriesAsync: ResponseModel,
  getBaseCategories: ResponseModel,
  getSubCategories: ResponseModel,
  getSubCategoriesWithProduct: ResponseModel,
  getProductDetails: ResponseModel,
};

const getSubCategoriesWithProductsAndCategory = generateThunk(
  ThunkActionTypes.getSubCategoriesWithProductsAndCategory,
  Api.v1ProductGetsubcategorieswithproductsandcategoryList
);

const searchProductByMerchantBranch = generateThunk(
  ThunkActionTypes.searchProductByMerchantBranch,
  Api.v1ProductSearchproductbymerchantbranchList
);

const getProductListByMerchantBranch = generateThunk(
  ThunkActionTypes.getProductListByMerchantBranch,
  Api.v1ProductGetproductlistbymerchantbranchList
);

const getProductFilterList = generateThunk(
  ThunkActionTypes.getProductFilterList,
  Api.v1ProductGetproductfilterlistList
);

const getProductListByLatLong = generateThunk(
  ThunkActionTypes.getProductListByLatLong,
  Api.v1ProductGetproductlistbylatlongCreate
);

const searchProductsByLatLong = generateThunk(
  ThunkActionTypes.searchProductsByLatLong,
  Api.v1ProductSearchproductsbylatlongCreate
);

const searchCategoryAsync = generateThunk(
  ThunkActionTypes.searchCategoryAsync,
  Api.v1ProductSearchcategoryasyncCreate
);

const getBaseCategories = generateThunk(
  ThunkActionTypes.getBaseCategories,
  Api.v1ProductGetbasecategoriesList
);

const getSubCategories = generateThunk(
  ThunkActionTypes.getSubCategories,
  Api.v1ProductGetsubcategoriesList
);

const getSubCategoriesWithProduct = generateThunk(
  ThunkActionTypes.getSubCategoriesWithProduct,
  Api.v1ProductGetsubcategorieswithproductList
);

const getProductDetails = generateThunk(
  ThunkActionTypes.getProductDetails,
  Api.v1ProductGetproductdetailsCreate
);
const productsSlice = createSlice({
  name: SliceNames.products,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      (
        action: AnyAction
      ): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith("product") && action.type.endsWith("/fulfilled"),
      (state, action) => {
        const subSlice: keyof IProductState = action.type.split("/")[1];
        state[subSlice] = { ...action.payload, loading: false };
      }
    );

    builder.addMatcher(
      (
        action: AnyAction
      ): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith("product") && action.type.endsWith("/pending"),
      (state, action) => {
        const subSlice: keyof IProductState = action.type.split("/")[1];

        state[subSlice] = { ...initialState[subSlice], loading: true };
      }
    );

    builder.addMatcher(
      (
        action: AnyAction
      ): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith("product") && action.type.endsWith("/rejected"),
      (state, action) => {
        const subSlice: keyof IProductState = action.type.split("/")[1];

        state[subSlice] = { ...action.payload, loading: false };
      }
    );
  },
});

export const ProductsActions = {
  ...productsSlice.actions,
  getSubCategoriesWithProductsAndCategory,
  searchProductByMerchantBranch,
  getProductListByMerchantBranch,
  getProductFilterList,
  getProductListByLatLong,
  searchProductsByLatLong,
  searchCategoryAsync,
  getBaseCategories,
  getSubCategories,
  getSubCategoriesWithProduct,
  getProductDetails,
};

export const ProductsReducer = productsSlice.reducer;
