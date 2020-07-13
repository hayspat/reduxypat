import {
  ValidateUserResponseDTO,
  RegisterUserResponseDTO,
  GetUserDetailsResponseDTO,
  OperationResultDTO,
  OperationResultMessage,
  OrderSearchResponseDTOPagingDTO,
  ProductFilterResponseDTOPagingDTO,
  MerchantBranchSummaryDTO,
} from "../Api/api-types";

export interface IResponse<T> {
  response: T;
  loading: boolean;
  messages: OperationResultMessage[] | null;
  result: boolean;
}

export const ResponseModel = {
  response: {},
  loading: false,
  messages: [{}],
  result: false,
};

export interface IAuthState {
  validateUser: IResponse<ValidateUserResponseDTO>;
  registerUser: IResponse<RegisterUserResponseDTO>;
  userDetails: IResponse<GetUserDetailsResponseDTO>;
  createForgetPasswordRequest: IResponse<OperationResultDTO>;
  validateForgetPasswordRequest: IResponse<OperationResultDTO>;
  updateForgetPasswordRequest: IResponse<OperationResultDTO>;
}

export interface IStatisticsState {
  getMerchantBranchSummary: IResponse<MerchantBranchSummaryDTO>;
}

export interface IOrderState {
  searchOrderAsync: IResponse<OrderSearchResponseDTOPagingDTO>;
}

export interface IProductState {
  getProductFilterList: IResponse<ProductFilterResponseDTOPagingDTO>;
}
