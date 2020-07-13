export enum SliceTypes {
  products = "products",
  orders = "orders",
  auth = "auth",
  stats = "stats",
}

export enum SliceNames {
  productList = "productList",
  orderList = "orderList",
  auth = "auth",
  statistics = "statistics",
}

export enum ThunkActionTypes {
  getProducts = "products/getProductFilterList",
  getOrders = "orders/searchOrderAsync",
  getOrdersFake = "deepFake/getOrders",
  insertAddress = "address/insertAddress",
  getAddressList = "address/getAddressList",
  registerUser = "auth/registerUser",
  validateUser = "auth/validateUser",
  userDetails = "auth/userDetails",
  createForgetPasswordRequest = "auth/createForgetPasswordRequest",
  validateForgetPasswordRequest = "auth/validateForgetPasswordRequest",
  updateForgetPasswordRequest = "auth/updateForgetPasswordRequest",
  getMerchantBranchSummary = "orders/getMerchantBranchSummary",
}
