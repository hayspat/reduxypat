import {
  ValidateUserResponseDTO,
  RegisterUserResponseDTO,
  GetUserDetailsResponseDTO,
  OperationResultDTO,
  OperationResultMessage,
  OrderSearchResponseDTOPagingDTO,
  ProductFilterResponseDTOPagingDTO,
  MerchantBranchSummaryDTO,
  BasketInfoDTO,
  InsertCarrierResponseDTO,
  UpdateCarrierResponseDTO,
  GetCarrierResponseDTOPagingDTO,
  InsertOrderDeliveryCodeResponseDTO,
  UpdateCarrierTrackingInfoResponseDTO,
  GetCarrierTrackingInfoResponseDTO,
  InsertCarrierTrackingInfoResponseDTO,
  CampaignResponseDTO,
  SliderResponseDTO,
  InsertOrderResponseDTO,
  OrderResponseDTO,
  GetOrderListResponseDTO,
  UserActiveOrderDTO,
  CarrierOrderListItem,
  SubCategoryWithProductsDTOPagingDTO,
  ProductItemListDTOPagingDTO,
  GetCategoryResponseDTOPagingDTO,
  GetBaseCategoriesResponseDTO,
  GetSubCategoriesResponseDTO,
  GetProductDetailResponseDTO,
  GetCarrierResponseDTO,
  CampaignResponseDTOPagingDTO,
  SliderResponseDTOPagingDTO,
  InsertUserAddressResponseDTO,
  UpdateUserAddressResponseDTO,
  UserAddressItemResponseDTO,
  UserAddressListResponseDTO,
} from "../Api/api-types";

export interface IResponse<T = null> extends OperationResultDTO {
  response: T | null;
  loading: boolean;
  messages: OperationResultMessage[] | null;
  result: boolean;
}

export const ResponseModel = {
  response: null,
  loading: false,
  messages: [{}],
  result: false,
};

export interface IAuthState {
  validateUser: IResponse<ValidateUserResponseDTO>;
  registerUser: IResponse<RegisterUserResponseDTO>;
  userDetails: IResponse<GetUserDetailsResponseDTO>;
  createForgetPasswordRequest: IResponse;
  validateForgetPasswordRequest: IResponse;
  updateForgetPasswordRequest: IResponse;
  insertUserAddress: IResponse<InsertUserAddressResponseDTO>;
  updateUserAddress: IResponse<UpdateUserAddressResponseDTO>;
  getUserAddresses: IResponse<UserAddressListResponseDTO>;
  getCurrentUserAddress: IResponse<UserAddressItemResponseDTO>;
  setCurrentUserAddress: IResponse<UserAddressItemResponseDTO>;
}

export interface IBasketState {
  insertBasketItem: IResponse<BasketInfoDTO>;
  getUserBasketByAddressIdAsync: IResponse<BasketInfoDTO>;
  removeBasketItemAsync: IResponse<BasketInfoDTO>;
  removeUserBasketAsync: IResponse<BasketInfoDTO>;
}

export interface IOrderState {
  searchOrderAsync: IResponse<OrderSearchResponseDTOPagingDTO>;
  getMerchantBranchSummary: IResponse<MerchantBranchSummaryDTO>;
  insertOrderAsync: IResponse<InsertOrderResponseDTO>;
  getOrderByIdAsync: IResponse<OrderResponseDTO>;
  getOrdersByUserIdAsync: IResponse<GetOrderListResponseDTO>;
  updateOrderAsync: IResponse<OrderResponseDTO>;
  updateOrderStatusAsync: IResponse<OrderResponseDTO>;
  getUserActiveOrder: IResponse<UserActiveOrderDTO>;
  getCarrierOrdersByOrderStatus: IResponse<CarrierOrderListItem>;
}

export interface IProductState {
  getProductFilterList: IResponse<ProductFilterResponseDTOPagingDTO>;
  getSubCategoriesWithProductsAndCategory: IResponse<
    SubCategoryWithProductsDTOPagingDTO
  >;
  searchProductByMerchantBranch: IResponse<ProductItemListDTOPagingDTO>;
  getProductListByMerchantBranch: IResponse<ProductItemListDTOPagingDTO>;
  getProductListByLatLong: IResponse<ProductItemListDTOPagingDTO>;
  searchProductsByLatLong: IResponse<ProductItemListDTOPagingDTO>;
  searchCategoriesAsync: IResponse<GetCategoryResponseDTOPagingDTO>;
  getBaseCategories: IResponse<GetBaseCategoriesResponseDTO>;
  getSubCategories: IResponse<GetSubCategoriesResponseDTO>;
  getSubCategoriesWithProduct: IResponse<GetSubCategoriesResponseDTO>;
  getProductDetails: IResponse<GetProductDetailResponseDTO>;
}

export interface ICarrierState {
  insertCarrier: IResponse<InsertCarrierResponseDTO>;
  updateCarrier: IResponse<UpdateCarrierResponseDTO>;
  getCarrier: IResponse<GetCarrierResponseDTO>;
  getCarriers: IResponse<GetCarrierResponseDTOPagingDTO>;
  searchCarrier: IResponse<GetCarrierResponseDTOPagingDTO>;
  deleteCarrier: IResponse;
  insertOrderDeliveryCode: IResponse<InsertOrderDeliveryCodeResponseDTO>;
  updateCarrierTrackingInfo: IResponse<UpdateCarrierTrackingInfoResponseDTO>;
  getCarrierTrackingInfo: IResponse<GetCarrierTrackingInfoResponseDTO>;
  insertCarrierTrackingInfo2: IResponse<InsertCarrierTrackingInfoResponseDTO>;
}

export interface ICampaignState {
  insertCampaign: IResponse<CampaignResponseDTO>;
  updateCampaign: IResponse<CampaignResponseDTO>;
  campaign: IResponse<CampaignResponseDTO>;
  campaigns: IResponse<CampaignResponseDTOPagingDTO>;
  searchCampaign: IResponse<CampaignResponseDTOPagingDTO>;
  deleteCampaign: IResponse;
  insertSlider: IResponse<SliderResponseDTO>;
  updateSlider: IResponse<SliderResponseDTO>;
  slider: IResponse<SliderResponseDTO>;
  sliders: IResponse<SliderResponseDTOPagingDTO>;
  searchSlider: IResponse<SliderResponseDTOPagingDTO>;
  deleteSlider: IResponse;
}

export interface IMerchantState {
  getMerchantBranchIdByAddressId: IResponse<number | null>;
  getMerchantBranchIdByLatLong: IResponse<number | null>;
}
