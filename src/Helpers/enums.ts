export enum SliceTypes {
  products = "products",
  orders = "orders",
  auth = "auth",
  statistics = "statistics",
  basket = "basket",
  carrier = "carrier",
  campaign = "campaign",
  merchant = "merchant",
}

export enum SliceNames {
  products = "products",
  orders = "orders",
  auth = "auth",
  statistics = "statistics",
  basket = "basket",
  carrier = "carrier",
  campaign = "campaign",
  merchant = "merchant",
}

export enum ThunkActionTypes {
  registerUser = "auth/registerUser",
  validateUser = "auth/validateUser",
  userDetails = "auth/userDetails",
  insertUserAddress = "auth/insertUserAddress",
  updateUserAddress = "auth/updateUserAddress",
  getUserAddresses = "auth/getUserAddresses",
  getCurrentUserAddress = "auth/getCurrentUserAddress",
  setCurrentUserAddress = "auth/setCurrentUserAddress",
  createForgetPasswordRequest = "auth/createForgetPasswordRequest",
  validateForgetPasswordRequest = "auth/validateForgetPasswordRequest",
  updateForgetPasswordRequest = "auth/updateForgetPasswordRequest",
  getMerchantBranchSummary = "orders/getMerchantBranchSummary",
  insertBasketItem = "basket/insertBasketItem",
  getUserBaskerByAddressIdAsync = "basket/getUserBasketByAddressIdAsync",
  removeBasketItemAsync = "basket/removeBasketItemAsync",
  removeUserBasketAsync = "basket/removeUserBasketAsync",
  insertCarrier = "carrier/insertCarrier",
  updateCarrier = "carrier/updateCarrier",
  getCarrier = "carrier/getCarrier",
  getCarriers = "carrier/getCarriers",
  searchCarrier = "carrier/searchCarrier",
  deleteCarrier = "carrier/deleteCarrier",
  insertOrderDeliveryCode = "carrier/insertOrderDeliveryCode",
  updateCarrierTrackingInfo = "carrier/updateCarrierTrackingInfo",
  getCarrierTrackingInfo = "carrier/getCarrierTrackingInfo",
  insertCarrierTrackingInfo2 = "carrier/insertCarrierTrackingInfo2",
  insertCampaign = "campaign/insertCampaign",
  updateCampaign = "campaign/updateCampaign",
  campaign = "campaign/updateCampaign",
  campaigns = "campaign/campaigns",
  searchCampaign = "campaign/searchCampaign",
  deleteCampaign = "campaign/deleteCampaign",
  insertSlider = "campaign/insertSlider",
  updateSlider = "campaign/updateSlider",
  slider = "campaign/slider",
  sliders = "campaign/sliders",
  searchSlider = "campaign/searchSlider",
  deleteSlider = "campaign/deleteSlider",
  getMerchantBranchIdByAddressId = "campaign/getMerchantBranchIdByAddressId",
  getMerchantBranchIdByLatLong = "campaign/getMerchantBranchIdByLatLong",
  insertOrderAsync = "order/insertOrderAsync",
  getOrderByIdAsync = "order/getOrderByIdAsync",
  getOrdersByUserIdAsync = "order/getOrdersByUserIdAsync",
  searchOrderAsync = "orders/searchOrderAsync",
  searchOrderAsyncFake = "fake/searchOrderAsync",
  updateOrderAsync = "order/updateOrderAsync",
  updateOrderStatusAsync = "order/updateOrderStatusAsync",
  getUserActiveOrder = "order/getUserActiveOrder",
  getCarrierOrdersByOrderStatus = "order/getCarrierOrdersByOrderStatus",
  getSubCategoriesWithProductsAndCategory = "product/getSubCategoriesWithProductsAndCategory",
  searchProductByMerchantBranch = "product/searchProductByMerchantBranch",
  getProductListByMerchantBranch = "product/getProductListByMerchantBranch",
  getProductFilterList = "products/getProductFilterList",
  getProductListByLatLong = "products/getProductListByLatLong",
  searchProductsByLatLong = "products/searchProductsByLatLong",
  searchCategoryAsync = "products/searchCategoryAsync",
  getBaseCategories = "products/getBaseCategories",
  getSubCategories = "products/getSubCategories",
  getSubCategoriesWithProduct = "products/getSubCategoriesWithProduct",
  getProductDetails = "products/getProductDetails",
}
