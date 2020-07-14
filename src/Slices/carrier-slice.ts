import { createSlice, AnyAction, SerializedError } from "@reduxjs/toolkit";
import { SliceNames, ThunkActionTypes } from "../Helpers/enums";
import { ResponseModel, ICarrierState } from "../Helpers/state-types";
import { Api, generateThunk } from "../Api/api";

const initialState: ICarrierState = {
  insertCarrier: ResponseModel,
  updateCarrier: ResponseModel,
  getCarrier: ResponseModel,
  getCarriers: ResponseModel,
  searchCarrier: ResponseModel,
  deleteCarrier: ResponseModel,
  insertOrderDeliveryCode: ResponseModel,
  updateCarrierTrackingInfo: ResponseModel,
  getCarrierTrackingInfo: ResponseModel,
  insertCarrierTrackingInfo2: ResponseModel,
};

const insertCarrier = generateThunk(
  ThunkActionTypes.insertCarrier,
  Api.v1CarrierInsertcarrierCreate
);

const updateCarrier = generateThunk(
  ThunkActionTypes.updateCarrier,
  Api.v1CarrierUpdatecarrierUpdate
);

const getCarrier = generateThunk(
  ThunkActionTypes.getCarrier,
  Api.v1CarrierGetcarrierList
);
const getCarriers = generateThunk(
  ThunkActionTypes.getCarriers,
  Api.v1CarrierGetcarriersCreate
);
const searchCarrier = generateThunk(
  ThunkActionTypes.searchCarrier,
  Api.v1CarrierSearchcarrierCreate
);
const deleteCarrier = generateThunk(
  ThunkActionTypes.deleteCarrier,
  Api.v1CarrierDeletecarrierDelete
);
const insertOrderDeliveryCode = generateThunk(
  ThunkActionTypes.insertOrderDeliveryCode,
  Api.v1CarrierInsertorderdeliverycodeCreate
);

const updateCarrierTrackingInfo = generateThunk(
  ThunkActionTypes.updateCarrierTrackingInfo,
  Api.v1CarrierUpdatecarrierUpdate
);
const getCarrierTrackingInfo = generateThunk(
  ThunkActionTypes.getCarrierTrackingInfo,
  Api.v1CarrierGetcarriertrackinginfoCreate
);
const insertCarrierTrackingInfo2 = generateThunk(
  ThunkActionTypes.insertCarrierTrackingInfo2,
  Api.v1CarrierInsertcarriertrackinginfo2Create
);

const CarrierSlice = createSlice({
  name: SliceNames.carrier,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      (
        action: AnyAction
      ): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith("carrier") && action.type.endsWith("/fulfilled"),
      (state, action) => {
        const subSlice: keyof ICarrierState = action.type.split("/")[1];
        state[subSlice] = { ...action.payload, loading: false };
      }
    );

    builder.addMatcher(
      (
        action: AnyAction
      ): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith("carrier") && action.type.endsWith("/pending"),
      (state, action) => {
        const subSlice: keyof ICarrierState = action.type.split("/")[1];
        state[subSlice] = { ...action.payload, loading: true };
      }
    );

    builder.addMatcher(
      (
        action: AnyAction
      ): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith("carrier") && action.type.endsWith("/rejected"),
      (state, action) => {
        const subSlice: keyof ICarrierState = action.type.split("/")[1];
        state[subSlice] = { ...action.payload, loading: false };
      }
    );
  },
});

export const CarrierActions = {
  ...CarrierSlice.actions,
  insertCarrier,
  updateCarrier,
  getCarrier,
  getCarriers,
  updateCarrierTrackingInfo,
  deleteCarrier,
  searchCarrier,
  insertCarrierTrackingInfo2,
  getCarrierTrackingInfo,
  insertOrderDeliveryCode,
};

export const CarrierReducer = CarrierSlice.reducer;
