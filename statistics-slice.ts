import { createSlice, AnyAction, SerializedError } from "@reduxjs/toolkit";
import { IStatisticsState, ResponseModel } from "./Helpers/state-types";
import { generateThunk, Api } from "./Api/api";
import { ThunkActionTypes, SliceNames } from "./Helpers/enums";

const initialState: IStatisticsState = {
  getMerchantBranchSummary: ResponseModel,
};

export const getStats = generateThunk(
  ThunkActionTypes.getMerchantBranchSummary,
  Api.v1OrderGetmerchantbranchsummaryList
);

const StatisticsSlice = createSlice({
  name: SliceNames.statistics,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      (
        action: AnyAction
      ): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith("stat") && action.type.endsWith("/fulfilled"),
      (state, action) => {
        const subSlice: keyof IStatisticsState = action.type.split("/")[1];
        state[subSlice] = { ...action.payload, loading: false };
      }
    );

    builder.addMatcher(
      (
        action: AnyAction
      ): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith("stat") && action.type.endsWith("/pending"),
      (state, action) => {
        const subSlice: keyof IStatisticsState = action.type.split("/")[1];

        state[subSlice] = { ...action.payload, loading: true };
      }
    );

    builder.addMatcher(
      (
        action: AnyAction
      ): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith("stat") && action.type.endsWith("/rejected"),
      (state, action) => {
        const subSlice: keyof IStatisticsState = action.type.split("/")[1];
        state[subSlice] = { ...action.payload, loading: false };
      }
    );
  },
});

export const statisticsSlice = StatisticsSlice.reducer;
