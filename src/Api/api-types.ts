/* tslint:disable */
/* eslint-disable */

/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface UpdateUserRequestDTO {
  name?: string | null;
  surname?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
}

export type UpdateUserResponseDTO = object;

export interface OperationResultMessage {
  code?: string | null;
  message?: string | null;
}

export interface UpdateUserResponseDTOOperationResultDTO {
  response?: UpdateUserResponseDTO | null;
  result?: boolean;
  messages?: OperationResultMessage[] | null | null;
}

export type StatusType = 0 | 1;

export interface InsertUserAddressRequestDTO {
  description?: string | null;
  countryId?: number;
  cityId?: number;
  districtId?: number;
  neighborhood?: string | null;
  street?: string | null;
  building?: string | null;
  department?: string | null;
  fullAddress?: string | null;
  contactTitle?: string | null;
  longitude?: number;
  latitude?: number;
  addressType?: number;
  isCurrent?: boolean;
  status?: StatusType;
}

export interface InsertUserAddressResponseDTO {
  id?: number;
  description?: string | null;
  countryId?: number;
  cityId?: number;
  districtId?: number;
  neighborhood?: string | null;
  street?: string | null;
  building?: string | null;
  department?: string | null;
  fullAddress?: string | null;
  contactTitle?: string | null;
  longitude?: number;
  latitude?: number;
  addressType?: number;
  isDeleted?: boolean;
  isCurrent?: boolean;
  creatorUserId?: number;
  creationTime?: string;
}

export interface InsertUserAddressResponseDTOOperationResultDTO {
  response?: InsertUserAddressResponseDTO | null;
  result?: boolean;
  messages?: OperationResultMessage[] | null | null;
}

export interface UpdateUserAddressRequestDTO {
  addressId?: number;
  description?: string | null;
  countryId?: number;
  cityId?: number;
  districtId?: number;
  neighborhood?: string | null;
  street?: string | null;
  building?: string | null;
  department?: string | null;
  isCurrent?: boolean;
  fullAddress?: string | null;
  contactTitle?: string | null;
  longitude?: number;
  latitude?: number;
  status?: StatusType;
  addressType?: number;
}

export interface UpdateUserAddressResponseDTO {
  addressId?: number;
  name?: string | null;
  description?: string | null;
  countryId?: number;
  cityId?: number;
  districtId?: number;
  neighborhood?: string | null;
  street?: string | null;
  building?: string | null;
  department?: string | null;
  isCurrent?: boolean;
  fullAddress?: string | null;
  contactTitle?: string | null;
  longitude?: number;
  latitude?: number;
  addressType?: number;
}

export interface UpdateUserAddressResponseDTOOperationResultDTO {
  response?: UpdateUserAddressResponseDTO | null;
  result?: boolean;
  messages?: OperationResultMessage[] | null | null;
}

export interface RegisterUserRequestDTO {
  phoneNumber?: string | null;
  name?: string | null;
  surname?: string | null;
  email?: string | null;
  password?: string | null;
}

export interface RegisterUserResponseDTO {
  id?: number;
  username?: string | null;
  name?: string | null;
  surname?: string | null;
  email?: string | null;
  creatorUserId?: number;
  modifierUserId?: number | null;
  creationTime?: string;
  lastModTime?: string | null;
  isDeleted?: boolean;
}

export interface RegisterUserResponseDTOOperationResultDTO {
  response?: RegisterUserResponseDTO | null;
  result?: boolean;
  messages?: OperationResultMessage[] | null | null;
}

export interface GetUserDetailsResponseDTO {
  id?: number;
  username?: string | null;
  name?: string | null;
  surname?: string | null;
  email?: string | null;
  merchantBranchId?: number | null;
  phoneNumber?: string | null;
  addressId?: number | null;
}

export interface GetUserDetailsResponseDTOOperationResultDTO {
  response?: GetUserDetailsResponseDTO | null;
  result?: boolean;
  messages?: OperationResultMessage[] | null | null;
}

export interface UserAddressItemResponseDTO {
  id?: number;
  description?: string | null;
  countryId?: number;
  cityId?: number;
  districtId?: number;
  neighborhood?: string | null;
  street?: string | null;
  building?: string | null;
  department?: string | null;
  fullAddress?: string | null;
  contactTitle?: string | null;
  longitude?: string | null;
  latitude?: string | null;
  addressType?: number;
  isCurrent?: boolean;
  creatorUserId?: number;
  creationTime?: string;
}

export interface UserAddressItemResponseDTOOperationResultDTO {
  response?: UserAddressItemResponseDTO | null;
  result?: boolean;
  messages?: OperationResultMessage[] | null | null;
}

export interface DeleteUserRequestDTO {
  id?: number;
}

export interface ValidateUserRequestDTO {
  username?: string | null;
  password?: string | null;
  userTypeId?: number;
}

export interface ValidateUserResponseDTO {
  id?: number;
  username?: string | null;
  name?: string | null;
  surname?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  merchantBranchId?: number | null;
  addressId?: number | null;
  token?: string | null;
  refreshToken?: string | null;
  tokenExpireDate?: string;
}

export interface ValidateUserResponseDTOOperationResultDTO {
  response?: ValidateUserResponseDTO | null;
  result?: boolean;
  messages?: OperationResultMessage[] | null | null;
}

export interface CreateForgetPasswordRequestDTO {
  phoneNumber?: string | null;
}

export interface OperationResultDTO {
  result?: boolean;
  messages?: OperationResultMessage[] | null | null;
}

export interface ValidateForgetPasswordRequestDTO {
  code?: string | null;
  phoneNumber?: string | null;
}

export interface ChangeForgetPasswordRequestDTO {
  code?: string | null;
  phoneNumber?: string | null;
  password?: string | null;
  confirmPassword?: string | null;
}

export interface UpdatePasswordRequest {
  password?: string | null;
  newPassword?: string | null;
  reTypeNewPassword?: string | null;
}

export interface InsertBasketItemDTO {
  productId?: number;
  productItemId?: number;
  quantity?: number;
}

export interface InsertBasketItemRequestDTO {
  addressId?: number;
  basketItem?: InsertBasketItemDTO | null;
}

export interface BasketItemListDTO {
  productId?: number;
  productItemId?: number;
  productName?: string | null;
  productImage?: string | null;
  price?: number;
  quantity?: number;
  stockStatus?: boolean;
  stockStatusMessage?: string | null;
}

export interface BasketInfoDTO {
  userId?: number;
  items?: BasketItemListDTO[] | null | null;
  amount?: number;
  totalAmount?: number;
  shippingPrice?: number;
  discount?: number;
  isMinAmount?: boolean;
  freeShipping?: boolean;
  freeShippingLimit?: number;
  statusMessage?: string | null;
}

export interface BasketInfoDTOOperationResultDTO {
  response?: BasketInfoDTO | null;
  result?: boolean;
  messages?: OperationResultMessage[] | null | null;
}

export interface RemoveBasketItemDTO {
  addressId?: number;
  productId?: number;
  productItemId?: number;
}

export interface StringOperationResultDTO {
  response?: string | null;
  result?: boolean;
  messages?: OperationResultMessage[] | null | null;
}

export interface InsertCarrierRequestDTO {
  merchantId?: number;
  phoneNumber?: string | null;
  name?: string | null;
  surname?: string | null;
  email?: string | null;
  password?: string | null;
  carrierType?: number;
}

export type InsertCarrierResponseDTO = object;

export interface InsertCarrierResponseDTOOperationResultDTO {
  response?: InsertCarrierResponseDTO | null;
  result?: boolean;
  messages?: OperationResultMessage[] | null | null;
}

export interface UpdateCarrierRequestDTO {
  carrierId?: number;
  merchantId?: number;
  phoneNumber?: string | null;
  name?: string | null;
  surname?: string | null;
  email?: string | null;
  carrierType?: number;
}

export type UpdateCarrierResponseDTO = object;

export interface UpdateCarrierResponseDTOOperationResultDTO {
  response?: UpdateCarrierResponseDTO | null;
  result?: boolean;
  messages?: OperationResultMessage[] | null | null;
}

export interface GetCarrierResponseDTO {
  userId?: number;
  fullName?: string | null;
  carrierType?: number;
  merchantId?: number;
}

export interface GetCarrierResponseDTOOperationResultDTO {
  response?: GetCarrierResponseDTO | null;
  result?: boolean;
  messages?: OperationResultMessage[] | null | null;
}

export interface GetCarrierListRequestDTO {
  pageIndex?: number;
  pageSize?: number;
  orderBy?: string | null;
  orderDir?: string | null;
}

export interface GetCarrierResponseDTOPagingOperationResultDTO {
  totalCount?: number;
  pageIndex?: number;
  pageSize?: number;
  pageCount?: number;
  response?: GetCarrierResponseDTO[] | null | null;
  result?: boolean;
  messages?: OperationResultMessage[] | null | null;
}

export interface SearchCarrierRequestDTO {
  fullName?: string | null;
  pageIndex?: number;
  pageSize?: number;
  orderBy?: string | null;
  orderDir?: string | null;
}

export interface InsertOrderDeliveryCodeRequestDTO {
  orderId?: number;
  carrierId?: number;
}

export type InsertOrderDeliveryCodeResponseDTO = object;

export interface InsertOrderDeliveryCodeResponseDTOOperationResultDTO {
  response?: InsertOrderDeliveryCodeResponseDTO | null;
  result?: boolean;
  messages?: OperationResultMessage[] | null | null;
}

export interface UpdateCarrierTrackingInfoRequestDTO {
  carrierTrackingInfoId?: number;
  carrierId?: number;
  longitude?: number;
  latitude?: number;
  isMoving?: boolean;
}

export interface UpdateCarrierTrackingInfoResponseDTO {
  id?: number;
  orderId?: number;
  carrierId?: number;
  longitude?: number;
  latitude?: number;
  isMoving?: boolean;
}

export interface UpdateCarrierTrackingInfoResponseDTOOperationResultDTO {
  response?: UpdateCarrierTrackingInfoResponseDTO | null;
  result?: boolean;
  messages?: OperationResultMessage[] | null | null;
}

export interface GetCarrierTrackingInfoRequestDTO {
  carrierTrackingInfoId?: number;
}

export interface GetCarrierTrackingInfoResponseDTO {
  id?: number;
  orderId?: number;
  carrierId?: number;
  longitude?: number;
  latitude?: number;
  isMoving?: boolean;
}

export interface GetCarrierTrackingInfoResponseDTOOperationResultDTO {
  response?: GetCarrierTrackingInfoResponseDTO | null;
  result?: boolean;
  messages?: OperationResultMessage[] | null | null;
}

export interface InsertCarrierTrackingInfoResponseDTO {
  id?: number;
  orderId?: number;
  carrierId?: number;
  longitude?: number;
  latitude?: number;
  isMoving?: boolean;
}

export interface InsertCarrierTrackingInfoResponseDTOOperationResultDTO {
  response?: InsertCarrierTrackingInfoResponseDTO | null;
  result?: boolean;
  messages?: OperationResultMessage[] | null | null;
}

export interface InsertCampaignRequestDTO {
  title?: string | null;
  merchantBranchId?: number;
  subTitle?: string | null;
  description?: string | null;
  imageUrl?: string | null;
  order?: number;
}

export interface CampaignResponseDTO {
  id?: number;
  title?: string | null;
  subTitle?: string | null;
  description?: string | null;
  imageUrl?: string | null;
  order?: number;
}

export interface CampaignResponseDTOOperationResultDTO {
  response?: CampaignResponseDTO | null;
  result?: boolean;
  messages?: OperationResultMessage[] | null | null;
}

export interface UpdateCampaignRequestDTO {
  campaignId?: number;
  title?: string | null;
  subTitle?: string | null;
  description?: string | null;
  imageUrl?: string | null;
  order?: number;
}

export interface GetCampaignsRequestDTO {
  merchantBranchId?: number;
}

export interface CampaignResponseDTOPagingOperationResultDTO {
  totalCount?: number;
  pageIndex?: number;
  pageSize?: number;
  pageCount?: number;
  response?: CampaignResponseDTO[] | null | null;
  result?: boolean;
  messages?: OperationResultMessage[] | null | null;
}

export interface SearchCampaignsRequestDTO {
  title?: string | null;
  pageIndex?: number;
  pageSize?: number;
  orderBy?: string | null;
  orderDir?: string | null;
}

export interface InsertSliderRequestDTO {
  title?: string | null;
  subTitle?: string | null;
  imageUrl?: string | null;
}

export interface SliderResponseDTO {
  id?: number;
  title?: string | null;
  subTitle?: string | null;
  imageUrl?: string | null;
}

export interface SliderResponseDTOOperationResultDTO {
  response?: SliderResponseDTO | null;
  result?: boolean;
  messages?: OperationResultMessage[] | null | null;
}

export interface UpdateSliderRequestDTO {
  sliderId?: number;
  title?: string | null;
  subTitle?: string | null;
  imageUrl?: string | null;
}

export type GetSlidersRequestDTO = object;

export interface SliderResponseDTOPagingOperationResultDTO {
  totalCount?: number;
  pageIndex?: number;
  pageSize?: number;
  pageCount?: number;
  response?: SliderResponseDTO[] | null | null;
  result?: boolean;
  messages?: OperationResultMessage[] | null | null;
}

export interface SearchSlidersRequestDTO {
  title?: string | null;
  pageIndex?: number;
  pageSize?: number;
  orderBy?: string | null;
  orderDir?: string | null;
}

export interface FileRequestDTO {
  files?: File | null;
}

export interface ResponseHeader {
  isSuccess?: boolean;
  responseCode?: string | null;
  message?: string | null;
}

export interface ResponseDataInfo {
  totalCount?: number;
}

export interface FileResponseDTO {
  header?: ResponseHeader | null;
  dataInfo?: ResponseDataInfo | null;
}

export interface Int64OperationResultDTO {
  response?: number;
  result?: boolean;
  messages?: OperationResultMessage[] | null | null;
}

export interface InsertOrderRequestDTO {
  notes?: string | null;
  addressId?: number;
}

export interface InsertOrderResponseDTO {
  id?: number;
  userId?: number;
  orderDate?: string;
  orderNumber?: string | null;
  deliveryType?: number;
  deliveryStartDate?: string;
  deliveryEndDate?: string;
  notes?: string | null;
  merchantBranchId?: number;
}

export interface InsertOrderResponseDTOOperationResultDTO {
  response?: InsertOrderResponseDTO | null;
  result?: boolean;
  messages?: OperationResultMessage[] | null | null;
}

export interface OrderProductItemListDTO {
  productId?: number;
  productItemId?: number;
  productName?: string | null;
  sku?: string | null;
  price?: number;
  productTotalAmount?: number | null;
  quantity?: number;
  unit?: number;
  imageUrl?: string | null;
}

export interface OrderResponseDTO {
  id?: number;
  userId?: number;
  customer?: string | null;
  orderDate?: string;
  orderNumber?: string | null;
  deliveryType?: string | null;
  deliveryStartDate?: string;
  deliveryEndDate?: string;
  deliveryDate?: string | null;
  amount?: number;
  totalAmount?: number;
  shippingPrice?: number;
  notes?: string | null;
  merchantBranchId?: number;
  orderStatus?: string | null;
  statusDescription?: string | null;
  lastStatusBysUser?: string | null;
  carrierId?: number;
  addressTitle?: string | null;
  contactPhoneNumber?: string | null;
  fullAddress?: string | null;
  products?: OrderProductItemListDTO[] | null | null;
}

export interface OrderResponseDTOOperationResultDTO {
  response?: OrderResponseDTO | null;
  result?: boolean;
  messages?: OperationResultMessage[] | null | null;
}

export interface GetOrderListResponseDTO {
  orders?: OrderResponseDTO[] | null | null;
  totalCount?: number;
  currentPage?: number;
  pageCount?: number;
}

export interface GetOrderListResponseDTOOperationResultDTO {
  response?: GetOrderListResponseDTO | null;
  result?: boolean;
  messages?: OperationResultMessage[] | null | null;
}

export interface SearchOrderRequestDTO {
  deliveryType?: number | null;
  orderDateStart?: string | null;
  orderDateEnd?: string | null;
  deliveryStartDate?: string | null;
  deliveryEndDate?: string | null;
  notes?: string | null;
  merchantId?: number | null;
  merchantBranchId?: number | null;
  isDeleted?: boolean;
  status?: string | null;
  modifierUserId?: number | null;
  userType?: string | null;
  searchValue?: string | null;
  pageIndex?: number;
  pageSize?: number;
  orderBy?: string | null;
  orderDir?: string | null;
}

export interface OrderSearchResponseDTO {
  id?: number;
  userId?: number;
  customer?: string | null;
  orderDate?: string;
  orderNumber?: string | null;
  deliveryType?: string | null;
  deliveryStartDate?: string;
  deliveryEndDate?: string;
  deliveryDate?: string | null;
  amount?: number;
  totalAmount?: number;
  shippingPrice?: number;
  notes?: string | null;
  merchantBranchId?: number;
  orderStatus?: string | null;
  statusDescription?: string | null;
  lastStatusBysUser?: string | null;
  carrierId?: number;
  orderAddress?: string | null;
  products?: OrderProductItemListDTO[] | null | null;
}

export interface OrderSearchResponseDTOPagingDTO {
  totalCount?: number;
  pageIndex?: number;
  pageSize?: number;
  pageCount?: number;
  data?: OrderSearchResponseDTO[] | null | null;
}

export interface OrderSearchResponseDTOPagingOperationDTO {
  response?: OrderSearchResponseDTOPagingDTO | null;
  result?: boolean;
  messages?: OperationResultMessage[] | null | null;
}

export interface UpdateOrderRequestDTO {
  id?: number;
  deliveryType?: number | null;
  deliveryStartDate?: string | null;
  deliveryEndDate?: string | null;
  notes?: string | null;
  addressId?: number | null;
  isDeleted?: boolean | null;
  status?: string | null;
}

export interface UpdateOrderStatusRequestDTO {
  orderId?: number;
  notes?: string | null;
  orderStatus?: string | null;
}

export interface UserActiveOrderDTO {
  userId?: number;
  addressTitle?: string | null;
  addressDetail?: string | null;
  orderStatus?: string | null;
  orderId?: number;
  orderNumber?: string | null;
  userLong?: number;
  userLat?: number;
  carrierLong?: number;
  carrierLat?: number;
  totalAmount?: number;
  orderDate?: string;
  orderStatusTitle?: string | null;
  orderStatusDescription?: string | null;
  orderProducts?: string | null;
}

export interface UserActiveOrderDTOOperationResultDTO {
  response?: UserActiveOrderDTO | null;
  result?: boolean;
  messages?: OperationResultMessage[] | null | null;
}

export interface GetCarrierOrderDTO {
  orderStatus?: string | null;
}

export interface CarrierOrderListItem {
  id?: number;
  userId?: number;
  customer?: string | null;
  orderDate?: string;
  orderNumber?: string | null;
  deliveryStartDate?: string;
  deliveryEndDate?: string;
  amount?: number;
  totalAmount?: number;
  shippingPrice?: number;
  notes?: string | null;
  orderStatus?: string | null;
  statusDescription?: string | null;
  userLong?: number;
  userLat?: number;
  address?: string | null;
  phoneNumber?: string | null;
  products?: OrderProductItemListDTO[] | null | null;
}

export interface CarrierOrderListItemOperationResultDTO {
  response?: CarrierOrderListItem | null;
  result?: boolean;
  messages?: OperationResultMessage[] | null | null;
}

export interface MerchantBranchSummaryDTO {
  new?: number;
  preparing?: number;
  ready?: number;
  shipping?: number;
  delivered?: number;
}

export interface MerchantBranchSummaryDTOOperationResultDTO {
  response?: MerchantBranchSummaryDTO | null;
  result?: boolean;
  messages?: OperationResultMessage[] | null | null;
}

export interface ProductItemListDTO {
  productItemId?: number;
  productId?: number;
  name?: string | null;
  brand?: string | null;
  unit?: number;
  price?: number;
  sku?: string | null;
  imageUrl?: string | null;
}

export interface SubCategoryWithProductsDTO {
  id?: number;
  name?: string | null;
  products?: ProductItemListDTO[] | null | null;
}

export interface SubCategoryWithProductsDTOPagingOperationResultDTO {
  totalCount?: number;
  pageIndex?: number;
  pageSize?: number;
  pageCount?: number;
  response?: SubCategoryWithProductsDTO[] | null | null;
  result?: boolean;
  messages?: OperationResultMessage[] | null | null;
}

export interface ProductItemListDTOPagingOperationResultDTO {
  totalCount?: number;
  pageIndex?: number;
  pageSize?: number;
  pageCount?: number;
  response?: ProductItemListDTO[] | null | null;
  result?: boolean;
  messages?: OperationResultMessage[] | null | null;
}

export interface ProductFilterItemDTO {
  productItemId?: number;
  productId?: number;
  name?: string | null;
  unit?: number;
  price?: number;
  sku?: string | null;
  stock?: number;
}

export interface ProductFilterResponseDTO {
  productId?: number;
  imageUrl?: string | null;
  productName?: string | null;
  categoryName?: string | null;
  stock?: number;
  price?: number;
  campain?: boolean;
  fastShipping?: boolean;
  sku?: string | null;
  productItems?: ProductFilterItemDTO[] | null | null;
}

export interface ProductFilterResponseDTOPagingDTO {
  totalCount?: number;
  pageIndex?: number;
  pageSize?: number;
  pageCount?: number;
  data?: ProductFilterResponseDTO[] | null | null;
}

export interface ProductFilterResponseDTOPagingOperationDTO {
  response?: ProductFilterResponseDTOPagingDTO | null;
  result?: boolean;
  messages?: OperationResultMessage[] | null | null;
}

export interface SearchProductsByLatLongRequestDTO {
  productName?: string | null;
  latitude?: number;
  longitude?: number;
  pageIndex?: number;
  pageSize?: number;
  orderBy?: string | null;
  orderDir?: string | null;
}

export interface SearchCategoryRequestDTO {
  categoryName?: string | null;
  pageIndex?: number;
  pageSize?: number;
  orderBy?: string | null;
  orderDir?: string | null;
}

export interface GetCategoryResponseDTO {
  categoryName?: string | null;
  categoryDescription?: string | null;
  parentID?: number;
  categoryUrl?: string | null;
  icon?: string | null;
}

export interface GetCategoryResponseDTOPagingOperationResultDTO {
  totalCount?: number;
  pageIndex?: number;
  pageSize?: number;
  pageCount?: number;
  response?: GetCategoryResponseDTO[] | null | null;
  result?: boolean;
  messages?: OperationResultMessage[] | null | null;
}

export interface GetProductResponseDTO {
  creatorUserId?: number;
  creationTime?: string;
  lastModTime?: string | null;
  modifierUserId?: number | null;
  isDeleted?: boolean;
  sku?: string | null;
  name?: string | null;
  description?: string | null;
  categoryId?: number;
  minQuantity?: number;
  unit?: number;
  merchantId?: number;
  defaultImageUrl?: string | null;
  brandId?: number;
  quantity?: number;
}

export interface GetCategoryReponseItemDTO {
  id?: number;
  name?: string | null;
  description?: string | null;
  parentId?: number;
  categoryUrl?: string | null;
  icon?: string | null;
  products?: GetProductResponseDTO[] | null | null;
}

export interface GetBaseCategoriesResponseDTO {
  baseCategories?: GetCategoryReponseItemDTO[] | null | null;
}

export interface GetBaseCategoriesResponseDTOOperationResultDTO {
  response?: GetBaseCategoriesResponseDTO | null;
  result?: boolean;
  messages?: OperationResultMessage[] | null | null;
}

export interface GetSubCategoriesResponseDTO {
  subCategories?: GetCategoryReponseItemDTO[] | null | null;
}

export interface GetSubCategoriesResponseDTOOperationResultDTO {
  response?: GetSubCategoriesResponseDTO | null;
  result?: boolean;
  messages?: OperationResultMessage[] | null | null;
}

export interface GetProductRequestDTO {
  id?: number;
}

export interface GetProductDetailResponseDTO {
  itemId?: number;
  productId?: number;
  merchantBranchId?: number;
  sku?: string | null;
  name?: string | null;
  price?: number;
  description?: string | null;
  minQuantity?: number;
  unit?: number;
  defaultImageUrl?: string | null;
  brandId?: number;
  quantity?: number;
}

export interface GetProductDetailResponseDTOOperationResultDTO {
  response?: GetProductDetailResponseDTO | null;
  result?: boolean;
  messages?: OperationResultMessage[] | null | null;
}

export type RequestParams = Omit<RequestInit, "body" | "method"> & {
  secure?: boolean;
};

export type RequestQueryParamsType = Record<string | number, any>;

type ApiConfig<SecurityDataType> = {
  baseUrl?: string;
  baseApiParams?: RequestParams;
  securityWorker?: (securityData: SecurityDataType) => RequestParams;
};

const enum BodyType {
  Json,
}

class HttpClient<SecurityDataType> {
  public baseUrl: string = "";
  private securityData: SecurityDataType = null as any;
  private securityWorker: ApiConfig<SecurityDataType>["securityWorker"] = (() => {}) as any;

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor({ baseUrl, baseApiParams, securityWorker }: ApiConfig<SecurityDataType> = {}) {
    this.baseUrl = baseUrl || this.baseUrl;
    this.baseApiParams = baseApiParams || this.baseApiParams;
    this.securityWorker = securityWorker || this.securityWorker;
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data;
  };

  private addQueryParam(query: RequestQueryParamsType, key: string) {
    return (
      encodeURIComponent(key) + "=" + encodeURIComponent(Array.isArray(query[key]) ? query[key].join(",") : query[key])
    );
  }

  protected addQueryParams(rawQuery?: RequestQueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys.length
      ? `?${keys
          .map((key) =>
            typeof query[key] === "object" && !Array.isArray(query[key])
              ? this.addQueryParams(query[key] as object).substring(1)
              : this.addQueryParam(query, key),
          )
          .join("&")}`
      : "";
  }

  private bodyFormatters: Record<BodyType, (input: any) => any> = {
    [BodyType.Json]: JSON.stringify,
  };

  private mergeRequestOptions(params: RequestParams, securityParams?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params,
      ...(securityParams || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params.headers || {}),
        ...((securityParams && securityParams.headers) || {}),
      },
    };
  }

  private safeParseResponse = <T = any, E = any>(response: Response): Promise<T> =>
    response
      .json()
      .then((data) => data)
      .catch((e) => response.text);

  public request = <T = any, E = any>(
    path: string,
    method: string,
    { secure, ...params }: RequestParams = {},
    body?: any,
    bodyType?: BodyType,
    secureByDefault?: boolean,
  ): Promise<T> =>
    fetch(`${this.baseUrl}${path}`, {
      // @ts-ignore
      ...this.mergeRequestOptions(params, (secureByDefault || secure) && this.securityWorker(this.securityData)),
      method,
      body: body ? this.bodyFormatters[bodyType || BodyType.Json](body) : null,
    }).then(async (response) => {
      const data = await this.safeParseResponse<T, E>(response);
      if (!response.ok) throw data;
      return data;
    });
}

/**
 * @title Edakik API
 * @version v1
 */
export class Api<SecurityDataType = any> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * @tags Authentication
     * @name v1AuthenticationUpdateuserUpdate
     * @request PUT:/api/v1/authentication/updateuser
     * @secure
     */
    v1AuthenticationUpdateuserUpdate: (data: UpdateUserRequestDTO, params?: RequestParams) =>
      this.request<UpdateUserResponseDTOOperationResultDTO, any>(
        `/api/v1/authentication/updateuser`,
        "PUT",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Authentication
     * @name v1AuthenticationInsertuseraddressCreate
     * @request POST:/api/v1/authentication/insertuseraddress
     * @secure
     */
    v1AuthenticationInsertuseraddressCreate: (data: InsertUserAddressRequestDTO, params?: RequestParams) =>
      this.request<InsertUserAddressResponseDTOOperationResultDTO, any>(
        `/api/v1/authentication/insertuseraddress`,
        "POST",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Authentication
     * @name v1AuthenticationUpdateuseraddressUpdate
     * @request PUT:/api/v1/authentication/updateuseraddress
     * @secure
     */
    v1AuthenticationUpdateuseraddressUpdate: (data: UpdateUserAddressRequestDTO, params?: RequestParams) =>
      this.request<UpdateUserAddressResponseDTOOperationResultDTO, any>(
        `/api/v1/authentication/updateuseraddress`,
        "PUT",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Authentication
     * @name v1AuthenticationRegisterCreate
     * @request POST:/api/v1/authentication/register
     */
    v1AuthenticationRegisterCreate: (data: RegisterUserRequestDTO, params?: RequestParams) =>
      this.request<RegisterUserResponseDTOOperationResultDTO, any>(
        `/api/v1/authentication/register`,
        "POST",
        params,
        data,
      ),

    /**
     * @tags Authentication
     * @name v1AuthenticationGetuserdetailsList
     * @request GET:/api/v1/authentication/getuserdetails
     * @secure
     */
    v1AuthenticationGetuserdetailsList: (params?: RequestParams) =>
      this.request<GetUserDetailsResponseDTOOperationResultDTO, any>(
        `/api/v1/authentication/getuserdetails`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Authentication
     * @name v1AuthenticationGetuseraddressesList
     * @request GET:/api/v1/authentication/getuseraddresses
     * @secure
     */
    v1AuthenticationGetuseraddressesList: (params?: RequestParams) =>
      this.request<UserAddressItemResponseDTOOperationResultDTO, any>(
        `/api/v1/authentication/getuseraddresses`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Authentication
     * @name v1AuthenticationGetcurrentuseraddressList
     * @request GET:/api/v1/authentication/getcurrentuseraddress
     * @secure
     */
    v1AuthenticationGetcurrentuseraddressList: (params?: RequestParams) =>
      this.request<UserAddressItemResponseDTOOperationResultDTO, any>(
        `/api/v1/authentication/getcurrentuseraddress`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Authentication
     * @name v1AuthenticationSetcurrentuseraddressUpdate
     * @request PUT:/api/v1/authentication/setcurrentuseraddress
     * @secure
     */
    v1AuthenticationSetcurrentuseraddressUpdate: (query?: { addressId?: number }, params?: RequestParams) =>
      this.request<any, any>(
        `/api/v1/authentication/setcurrentuseraddress${this.addQueryParams(query)}`,
        "PUT",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Authentication
     * @name v1AuthenticationDeleteuserDelete
     * @request DELETE:/api/v1/authentication/deleteuser
     * @secure
     */
    v1AuthenticationDeleteuserDelete: (data: DeleteUserRequestDTO, params?: RequestParams) =>
      this.request<UserAddressItemResponseDTOOperationResultDTO, any>(
        `/api/v1/authentication/deleteuser`,
        "DELETE",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Authentication
     * @name v1AuthenticationValidateuserCreate
     * @request POST:/api/v1/authentication/validateuser
     */
    v1AuthenticationValidateuserCreate: (data: ValidateUserRequestDTO, params?: RequestParams) =>
      this.request<ValidateUserResponseDTOOperationResultDTO, any>(
        `/api/v1/authentication/validateuser`,
        "POST",
        params,
        data,
      ),

    /**
     * @tags Authentication
     * @name v1AuthenticationCreateforgetpasswordrequestCreate
     * @request POST:/api/v1/authentication/createforgetpasswordrequest
     */
    v1AuthenticationCreateforgetpasswordrequestCreate: (data: CreateForgetPasswordRequestDTO, params?: RequestParams) =>
      this.request<OperationResultDTO, any>(`/api/v1/authentication/createforgetpasswordrequest`, "POST", params, data),

    /**
     * @tags Authentication
     * @name v1AuthenticationValidateforgetpasswordrequestCreate
     * @request POST:/api/v1/authentication/validateforgetpasswordrequest
     */
    v1AuthenticationValidateforgetpasswordrequestCreate: (
      data: ValidateForgetPasswordRequestDTO,
      params?: RequestParams,
    ) =>
      this.request<OperationResultDTO, any>(
        `/api/v1/authentication/validateforgetpasswordrequest`,
        "POST",
        params,
        data,
      ),

    /**
     * @tags Authentication
     * @name v1AuthenticationUpdateforgetpasswordrequestUpdate
     * @request PUT:/api/v1/authentication/updateforgetpasswordrequest
     */
    v1AuthenticationUpdateforgetpasswordrequestUpdate: (data: ChangeForgetPasswordRequestDTO, params?: RequestParams) =>
      this.request<OperationResultDTO, any>(`/api/v1/authentication/updateforgetpasswordrequest`, "PUT", params, data),

    /**
     * @tags Authentication
     * @name v1AuthenticationUpdatepasswordrequestUpdate
     * @request PUT:/api/v1/authentication/updatepasswordrequest
     * @secure
     */
    v1AuthenticationUpdatepasswordrequestUpdate: (data: UpdatePasswordRequest, params?: RequestParams) =>
      this.request<OperationResultDTO, any>(
        `/api/v1/authentication/updatepasswordrequest`,
        "PUT",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Basket
     * @name v1BasketInsertbasketitemCreate
     * @request POST:/api/v1/basket/insertbasketitem
     * @secure
     */
    v1BasketInsertbasketitemCreate: (data: InsertBasketItemRequestDTO, params?: RequestParams) =>
      this.request<BasketInfoDTOOperationResultDTO, any>(
        `/api/v1/basket/insertbasketitem`,
        "POST",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Basket
     * @name v1BasketGetuserbasketbyaddressidasyncList
     * @request GET:/api/v1/basket/getuserbasketbyaddressidasync
     * @secure
     */
    v1BasketGetuserbasketbyaddressidasyncList: (query?: { addressId?: number }, params?: RequestParams) =>
      this.request<BasketInfoDTOOperationResultDTO, any>(
        `/api/v1/basket/getuserbasketbyaddressidasync${this.addQueryParams(query)}`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Basket
     * @name v1BasketRemovebasketitemasyncDelete
     * @request DELETE:/api/v1/basket/removebasketitemasync
     * @secure
     */
    v1BasketRemovebasketitemasyncDelete: (data: RemoveBasketItemDTO, params?: RequestParams) =>
      this.request<StringOperationResultDTO, any>(
        `/api/v1/basket/removebasketitemasync`,
        "DELETE",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Basket
     * @name v1BasketRemoveuserbasketasyncDelete
     * @request DELETE:/api/v1/basket/removeuserbasketasync
     * @secure
     */
    v1BasketRemoveuserbasketasyncDelete: (query?: { addressId?: number }, params?: RequestParams) =>
      this.request<StringOperationResultDTO, any>(
        `/api/v1/basket/removeuserbasketasync${this.addQueryParams(query)}`,
        "DELETE",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Carrier
     * @name v1CarrierInsertcarrierCreate
     * @request POST:/api/v1/carrier/insertcarrier
     * @secure
     */
    v1CarrierInsertcarrierCreate: (data: InsertCarrierRequestDTO, params?: RequestParams) =>
      this.request<InsertCarrierResponseDTOOperationResultDTO, any>(
        `/api/v1/carrier/insertcarrier`,
        "POST",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Carrier
     * @name v1CarrierUpdatecarrierUpdate
     * @request PUT:/api/v1/carrier/updatecarrier
     * @secure
     */
    v1CarrierUpdatecarrierUpdate: (data: UpdateCarrierRequestDTO, params?: RequestParams) =>
      this.request<UpdateCarrierResponseDTOOperationResultDTO, any>(
        `/api/v1/carrier/updatecarrier`,
        "PUT",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Carrier
     * @name v1CarrierGetcarrierList
     * @request GET:/api/v1/carrier/getcarrier
     * @secure
     */
    v1CarrierGetcarrierList: (query?: { carrierId?: number }, params?: RequestParams) =>
      this.request<GetCarrierResponseDTOOperationResultDTO, any>(
        `/api/v1/carrier/getcarrier${this.addQueryParams(query)}`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Carrier
     * @name v1CarrierGetcarriersCreate
     * @request POST:/api/v1/carrier/getcarriers
     * @secure
     */
    v1CarrierGetcarriersCreate: (data: GetCarrierListRequestDTO, params?: RequestParams) =>
      this.request<GetCarrierResponseDTOPagingOperationResultDTO, any>(
        `/api/v1/carrier/getcarriers`,
        "POST",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Carrier
     * @name v1CarrierSearchcarrierCreate
     * @request POST:/api/v1/carrier/searchcarrier
     * @secure
     */
    v1CarrierSearchcarrierCreate: (data: SearchCarrierRequestDTO, params?: RequestParams) =>
      this.request<GetCarrierResponseDTOPagingOperationResultDTO, any>(
        `/api/v1/carrier/searchcarrier`,
        "POST",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Carrier
     * @name v1CarrierDeletecarrierDelete
     * @request DELETE:/api/v1/carrier/deletecarrier
     * @secure
     */
    v1CarrierDeletecarrierDelete: (query?: { carrierId?: number }, params?: RequestParams) =>
      this.request<OperationResultDTO, any>(
        `/api/v1/carrier/deletecarrier${this.addQueryParams(query)}`,
        "DELETE",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Carrier
     * @name v1CarrierInsertorderdeliverycodeCreate
     * @request POST:/api/v1/carrier/insertorderdeliverycode
     * @secure
     */
    v1CarrierInsertorderdeliverycodeCreate: (data: InsertOrderDeliveryCodeRequestDTO, params?: RequestParams) =>
      this.request<InsertOrderDeliveryCodeResponseDTOOperationResultDTO, any>(
        `/api/v1/carrier/insertorderdeliverycode`,
        "POST",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Carrier
     * @name v1CarrierUpdatecarriertrakinginfoUpdate
     * @request PUT:/api/v1/carrier/updatecarriertrakinginfo
     * @secure
     */
    v1CarrierUpdatecarriertrakinginfoUpdate: (data: UpdateCarrierTrackingInfoRequestDTO, params?: RequestParams) =>
      this.request<UpdateCarrierTrackingInfoResponseDTOOperationResultDTO, any>(
        `/api/v1/carrier/updatecarriertrakinginfo`,
        "PUT",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Carrier
     * @name v1CarrierGetcarriertrakinginfoCreate
     * @request POST:/api/v1/carrier/getcarriertrakinginfo
     * @secure
     */
    v1CarrierGetcarriertrakinginfoCreate: (data: GetCarrierTrackingInfoRequestDTO, params?: RequestParams) =>
      this.request<GetCarrierTrackingInfoResponseDTOOperationResultDTO, any>(
        `/api/v1/carrier/getcarriertrakinginfo`,
        "POST",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Carrier
     * @name v1CarrierInsertcarriertrackinginfo2Create
     * @request POST:/api/v1/carrier/insertcarriertrackinginfo2
     * @secure
     */
    v1CarrierInsertcarriertrackinginfo2Create: (data: UpdateUserResponseDTO, params?: RequestParams) =>
      this.request<InsertCarrierTrackingInfoResponseDTOOperationResultDTO, any>(
        `/api/v1/carrier/insertcarriertrackinginfo2`,
        "POST",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Compaign
     * @name v1CompaignInsertCampaignCreate
     * @request POST:/api/v1/compaign/insert-campaign
     * @secure
     */
    v1CompaignInsertCampaignCreate: (data: InsertCampaignRequestDTO, params?: RequestParams) =>
      this.request<CampaignResponseDTOOperationResultDTO, any>(
        `/api/v1/compaign/insert-campaign`,
        "POST",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Compaign
     * @name v1CompaignUpdateCampaignUpdate
     * @request PUT:/api/v1/compaign/update-campaign
     * @secure
     */
    v1CompaignUpdateCampaignUpdate: (data: UpdateCampaignRequestDTO, params?: RequestParams) =>
      this.request<CampaignResponseDTOOperationResultDTO, any>(
        `/api/v1/compaign/update-campaign`,
        "PUT",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Compaign
     * @name v1CompaignCampaignList
     * @request GET:/api/v1/compaign/campaign
     * @secure
     */
    v1CompaignCampaignList: (query?: { campaignId?: number }, params?: RequestParams) =>
      this.request<CampaignResponseDTOOperationResultDTO, any>(
        `/api/v1/compaign/campaign${this.addQueryParams(query)}`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Compaign
     * @name v1CompaignCampaignsCreate
     * @request POST:/api/v1/compaign/campaigns
     * @secure
     */
    v1CompaignCampaignsCreate: (data: GetCampaignsRequestDTO, params?: RequestParams) =>
      this.request<CampaignResponseDTOPagingOperationResultDTO, any>(
        `/api/v1/compaign/campaigns`,
        "POST",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Compaign
     * @name v1CompaignSearchCampaignCreate
     * @request POST:/api/v1/compaign/search-campaign
     * @secure
     */
    v1CompaignSearchCampaignCreate: (data: SearchCampaignsRequestDTO, params?: RequestParams) =>
      this.request<CampaignResponseDTOPagingOperationResultDTO, any>(
        `/api/v1/compaign/search-campaign`,
        "POST",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Compaign
     * @name v1CompaignDeleteCampaignDelete
     * @request DELETE:/api/v1/compaign/delete-campaign
     * @secure
     */
    v1CompaignDeleteCampaignDelete: (query?: { campaignId?: number }, params?: RequestParams) =>
      this.request<OperationResultDTO, any>(
        `/api/v1/compaign/delete-campaign${this.addQueryParams(query)}`,
        "DELETE",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Compaign
     * @name v1CompaignInsertSliderCreate
     * @request POST:/api/v1/compaign/insert-slider
     * @secure
     */
    v1CompaignInsertSliderCreate: (data: InsertSliderRequestDTO, params?: RequestParams) =>
      this.request<SliderResponseDTOOperationResultDTO, any>(
        `/api/v1/compaign/insert-slider`,
        "POST",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Compaign
     * @name v1CompaignUpdateSliderUpdate
     * @request PUT:/api/v1/compaign/update-slider
     * @secure
     */
    v1CompaignUpdateSliderUpdate: (data: UpdateSliderRequestDTO, params?: RequestParams) =>
      this.request<SliderResponseDTOOperationResultDTO, any>(
        `/api/v1/compaign/update-slider`,
        "PUT",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Compaign
     * @name v1CompaignSliderList
     * @request GET:/api/v1/compaign/slider
     * @secure
     */
    v1CompaignSliderList: (query?: { sliderId?: number }, params?: RequestParams) =>
      this.request<SliderResponseDTOOperationResultDTO, any>(
        `/api/v1/compaign/slider${this.addQueryParams(query)}`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Compaign
     * @name v1CompaignSlidersCreate
     * @request POST:/api/v1/compaign/sliders
     * @secure
     */
    v1CompaignSlidersCreate: (data: GetSlidersRequestDTO, params?: RequestParams) =>
      this.request<SliderResponseDTOPagingOperationResultDTO, any>(
        `/api/v1/compaign/sliders`,
        "POST",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Compaign
     * @name v1CompaignSearchSliderCreate
     * @request POST:/api/v1/compaign/search-slider
     * @secure
     */
    v1CompaignSearchSliderCreate: (data: SearchSlidersRequestDTO, params?: RequestParams) =>
      this.request<SliderResponseDTOPagingOperationResultDTO, any>(
        `/api/v1/compaign/search-slider`,
        "POST",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Compaign
     * @name v1CompaignDeleteSliderDelete
     * @request DELETE:/api/v1/compaign/delete-slider
     * @secure
     */
    v1CompaignDeleteSliderDelete: (query?: { sliderId?: number }, params?: RequestParams) =>
      this.request<OperationResultDTO, any>(
        `/api/v1/compaign/delete-slider${this.addQueryParams(query)}`,
        "DELETE",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags File
     * @name v1FileInsertfileasyncCreate
     * @request POST:/api/v1/file/insertfileasync
     * @secure
     */
    v1FileInsertfileasyncCreate: (data: FileRequestDTO, params?: RequestParams) =>
      this.request<FileResponseDTO, any>(`/api/v1/file/insertfileasync`, "POST", params, data, BodyType.Json, true),

    /**
     * @tags File
     * @name v1FileTestCreate
     * @request POST:/api/v1/file/test
     * @secure
     */
    v1FileTestCreate: (query?: { data?: number }, params?: RequestParams) =>
      this.request<boolean, any>(
        `/api/v1/file/test${this.addQueryParams(query)}`,
        "POST",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Merchant
     * @name v1MerchantGetmerchantbranchidbyaddressidDetail
     * @request GET:/api/v1/merchant/getmerchantbranchidbyaddressid/{addressId}
     * @secure
     */
    v1MerchantGetmerchantbranchidbyaddressidDetail: (addressId: number, params?: RequestParams) =>
      this.request<Int64OperationResultDTO, any>(
        `/api/v1/merchant/getmerchantbranchidbyaddressid/${addressId}`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Merchant
     * @name v1MerchantGetmerchantbranchidbylatlongList
     * @request GET:/api/v1/merchant/getmerchantbranchidbylatlong
     */
    v1MerchantGetmerchantbranchidbylatlongList: (
      query?: { latitude?: number; longitude?: number },
      params?: RequestParams,
    ) =>
      this.request<Int64OperationResultDTO, any>(
        `/api/v1/merchant/getmerchantbranchidbylatlong${this.addQueryParams(query)}`,
        "GET",
        params,
      ),

    /**
     * @tags Order
     * @name v1OrderInsertorderasyncCreate
     * @request POST:/api/v1/order/insertorderasync
     * @secure
     */
    v1OrderInsertorderasyncCreate: (data: InsertOrderRequestDTO, params?: RequestParams) =>
      this.request<InsertOrderResponseDTOOperationResultDTO, any>(
        `/api/v1/order/insertorderasync`,
        "POST",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Order
     * @name v1OrderGetorderbyidasyncList
     * @request GET:/api/v1/order/getorderbyidasync
     * @secure
     */
    v1OrderGetorderbyidasyncList: (query?: { orderId?: number }, params?: RequestParams) =>
      this.request<OrderResponseDTOOperationResultDTO, any>(
        `/api/v1/order/getorderbyidasync${this.addQueryParams(query)}`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Order
     * @name v1OrderGetordersbyuseridasyncList
     * @request GET:/api/v1/order/getordersbyuseridasync
     * @secure
     */
    v1OrderGetordersbyuseridasyncList: (params?: RequestParams) =>
      this.request<GetOrderListResponseDTOOperationResultDTO, any>(
        `/api/v1/order/getordersbyuseridasync`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Order
     * @name v1OrderSearchorderasyncCreate
     * @request POST:/api/v1/order/searchorderasync
     * @secure
     */
    v1OrderSearchorderasyncCreate: (data: SearchOrderRequestDTO, params?: RequestParams) =>
      this.request<OrderSearchResponseDTOPagingOperationDTO, any>(
        `/api/v1/order/searchorderasync`,
        "POST",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Order
     * @name v1OrderUpdateorderasyncCreate
     * @request POST:/api/v1/order/updateorderasync
     * @secure
     */
    v1OrderUpdateorderasyncCreate: (data: UpdateOrderRequestDTO, params?: RequestParams) =>
      this.request<OrderResponseDTOOperationResultDTO, any>(
        `/api/v1/order/updateorderasync`,
        "POST",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Order
     * @name v1OrderUpdateorderstatusasyncCreate
     * @request POST:/api/v1/order/updateorderstatusasync
     * @secure
     */
    v1OrderUpdateorderstatusasyncCreate: (data: UpdateOrderStatusRequestDTO, params?: RequestParams) =>
      this.request<OrderResponseDTOOperationResultDTO, any>(
        `/api/v1/order/updateorderstatusasync`,
        "POST",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Order
     * @name v1OrderGetuseractiveorderList
     * @request GET:/api/v1/order/getuseractiveorder
     * @secure
     */
    v1OrderGetuseractiveorderList: (params?: RequestParams) =>
      this.request<UserActiveOrderDTOOperationResultDTO, any>(
        `/api/v1/order/getuseractiveorder`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Order
     * @name v1OrderGetcarrierordersbyorderstatusCreate
     * @request POST:/api/v1/order/getcarrierordersbyorderstatus
     * @secure
     */
    v1OrderGetcarrierordersbyorderstatusCreate: (data: GetCarrierOrderDTO, params?: RequestParams) =>
      this.request<CarrierOrderListItemOperationResultDTO[], any>(
        `/api/v1/order/getcarrierordersbyorderstatus`,
        "POST",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Order
     * @name v1OrderGetmerchantbranchsummaryList
     * @request GET:/api/v1/order/getmerchantbranchsummary
     * @secure
     */
    v1OrderGetmerchantbranchsummaryList: (params?: RequestParams) =>
      this.request<MerchantBranchSummaryDTOOperationResultDTO, any>(
        `/api/v1/order/getmerchantbranchsummary`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Product
     * @name v1ProductGetsubcategorieswithproductsandcategoryList
     * @request GET:/api/v1/product/getsubcategorieswithproductsandcategory
     * @secure
     */
    v1ProductGetsubcategorieswithproductsandcategoryList: (
      query?: {
        parentCategoryId?: number;
        merchantBranchId?: number;
        pageIndex?: number;
        pageSize?: number;
        orderBy?: string;
        orderDir?: string;
      },
      params?: RequestParams,
    ) =>
      this.request<SubCategoryWithProductsDTOPagingOperationResultDTO, any>(
        `/api/v1/product/getsubcategorieswithproductsandcategory${this.addQueryParams(query)}`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Product
     * @name v1ProductSearchproductbymerchantbranchList
     * @request GET:/api/v1/product/searchproductbymerchantbranch
     * @secure
     */
    v1ProductSearchproductbymerchantbranchList: (
      query?: {
        productName?: string;
        merchantBranchId?: number;
        pageIndex?: number;
        pageSize?: number;
        orderBy?: string;
        orderDir?: string;
      },
      params?: RequestParams,
    ) =>
      this.request<ProductItemListDTOPagingOperationResultDTO, any>(
        `/api/v1/product/searchproductbymerchantbranch${this.addQueryParams(query)}`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Product
     * @name v1ProductGetproductlistbymerchantbranchList
     * @request GET:/api/v1/product/getproductlistbymerchantbranch
     * @secure
     */
    v1ProductGetproductlistbymerchantbranchList: (query?: { merchantBranchId?: number }, params?: RequestParams) =>
      this.request<ProductItemListDTOPagingOperationResultDTO, any>(
        `/api/v1/product/getproductlistbymerchantbranch${this.addQueryParams(query)}`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Product
     * @name v1ProductGetproductfilterlistList
     * @request GET:/api/v1/product/getproductfilterlist
     * @secure
     */
    v1ProductGetproductfilterlistList: (
      query?: {
        searchValue?: string;
        merchantBranchId?: number;
        pageIndex?: number;
        pageSize?: number;
        orderBy?: string;
        orderDir?: string;
      },
      params?: RequestParams,
    ) =>
      this.request<ProductFilterResponseDTOPagingOperationDTO, any>(
        `/api/v1/product/getproductfilterlist${this.addQueryParams(query)}`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Product
     * @name v1ProductGetproductlistbylatlongCreate
     * @request POST:/api/v1/product/getproductlistbylatlong
     */
    v1ProductGetproductlistbylatlongCreate: (
      query?: { latitude?: number; longitude?: number },
      params?: RequestParams,
    ) =>
      this.request<ProductItemListDTOPagingOperationResultDTO, any>(
        `/api/v1/product/getproductlistbylatlong${this.addQueryParams(query)}`,
        "POST",
        params,
      ),

    /**
     * @tags Product
     * @name v1ProductSearchproductsbylatlongCreate
     * @request POST:/api/v1/product/searchproductsbylatlong
     * @secure
     */
    v1ProductSearchproductsbylatlongCreate: (data: SearchProductsByLatLongRequestDTO, params?: RequestParams) =>
      this.request<ProductItemListDTOPagingOperationResultDTO, any>(
        `/api/v1/product/searchproductsbylatlong`,
        "POST",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Product
     * @name v1ProductSearchcategoryasyncCreate
     * @request POST:/api/v1/product/searchcategoryasync
     * @secure
     */
    v1ProductSearchcategoryasyncCreate: (data: SearchCategoryRequestDTO, params?: RequestParams) =>
      this.request<GetCategoryResponseDTOPagingOperationResultDTO, any>(
        `/api/v1/product/searchcategoryasync`,
        "POST",
        params,
        data,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Product
     * @name v1ProductGetbasecategoriesList
     * @request GET:/api/v1/product/getbasecategories
     * @secure
     */
    v1ProductGetbasecategoriesList: (params?: RequestParams) =>
      this.request<GetBaseCategoriesResponseDTOOperationResultDTO, any>(
        `/api/v1/product/getbasecategories`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Product
     * @name v1ProductGetsubcategoriesList
     * @request GET:/api/v1/product/getsubcategories
     * @secure
     */
    v1ProductGetsubcategoriesList: (params?: RequestParams) =>
      this.request<GetSubCategoriesResponseDTOOperationResultDTO, any>(
        `/api/v1/product/getsubcategories`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Product
     * @name v1ProductGetsubcategorieswithproductList
     * @request GET:/api/v1/product/getsubcategorieswithproduct
     * @secure
     */
    v1ProductGetsubcategorieswithproductList: (params?: RequestParams) =>
      this.request<GetSubCategoriesResponseDTOOperationResultDTO, any>(
        `/api/v1/product/getsubcategorieswithproduct`,
        "GET",
        params,
        null,
        BodyType.Json,
        true,
      ),

    /**
     * @tags Product
     * @name v1ProductGetproductdetailsCreate
     * @request POST:/api/v1/product/getproductdetails
     * @secure
     */
    v1ProductGetproductdetailsCreate: (data: GetProductRequestDTO, params?: RequestParams) =>
      this.request<GetProductDetailResponseDTOOperationResultDTO, any>(
        `/api/v1/product/getproductdetails`,
        "POST",
        params,
        data,
        BodyType.Json,
        true,
      ),
  };
}
