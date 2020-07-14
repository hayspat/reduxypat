import { createSlice, AnyAction, SerializedError } from "@reduxjs/toolkit";
import { SliceNames, ThunkActionTypes } from "../Helpers/enums";
import { ICampaignState, ResponseModel } from "../Helpers/state-types";
import { Api, generateThunk } from "../Api/api";

const initialState: ICampaignState = {
  insertCampaign: ResponseModel,
  updateCampaign: ResponseModel,
  campaign: ResponseModel,
  campaigns: ResponseModel,
  searchCampaign: ResponseModel,
  deleteCampaign: ResponseModel,
  insertSlider: ResponseModel,
  updateSlider: ResponseModel,
  slider: ResponseModel,
  sliders: ResponseModel,
  searchSlider: ResponseModel,
  deleteSlider: ResponseModel,
};

const insertCampaign = generateThunk(
  ThunkActionTypes.insertCampaign,
  Api.v1CampaignInsertCampaignCreate
);

const updateCampaign = generateThunk(
  ThunkActionTypes.updateCampaign,
  Api.v1CampaignUpdateCampaignUpdate
);

const campaign = generateThunk(
  ThunkActionTypes.campaign,
  Api.v1CampaignCampaignList
);

const campaigns = generateThunk(
  ThunkActionTypes.campaigns,
  Api.v1CampaignCampaignsCreate
);

const searchCampaign = generateThunk(
  ThunkActionTypes.searchCampaign,
  Api.v1CampaignSearchCampaignCreate
);

const deleteCampaign = generateThunk(
  ThunkActionTypes.deleteCampaign,
  Api.v1CampaignDeleteCampaignDelete
);

const insertSlider = generateThunk(
  ThunkActionTypes.insertSlider,
  Api.v1CampaignInsertSliderCreate
);

const updateSlider = generateThunk(
  ThunkActionTypes.updateSlider,
  Api.v1CampaignUpdateSliderUpdate
);

const slider = generateThunk(ThunkActionTypes.slider, Api.v1CampaignSliderList);

const sliders = generateThunk(
  ThunkActionTypes.sliders,
  Api.v1CampaignSlidersCreate
);

const searchSlider = generateThunk(
  ThunkActionTypes.searchSlider,
  Api.v1CampaignSearchSliderCreate
);

const deleteSlider = generateThunk(
  ThunkActionTypes.deleteSlider,
  Api.v1CampaignDeleteSliderDelete
);

const CampaignSlice = createSlice({
  name: SliceNames.campaign,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      (
        action: AnyAction
      ): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith("campaign") &&
        action.type.endsWith("/fulfilled"),
      (state, action) => {
        const subSlice: keyof ICampaignState = action.type.split("/")[1];
        state[subSlice] = { ...action.payload, loading: false };
      }
    );

    builder.addMatcher(
      (
        action: AnyAction
      ): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith("campaign") && action.type.endsWith("/pending"),
      (state, action) => {
        const subSlice: keyof ICampaignState = action.type.split("/")[1];
        state[subSlice] = { ...action.payload, loading: true };
      }
    );

    builder.addMatcher(
      (
        action: AnyAction
      ): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith("campaign") && action.type.endsWith("/rejected"),
      (state, action) => {
        const subSlice: keyof ICampaignState = action.type.split("/")[1];
        state[subSlice] = { ...action.payload, loading: false };
      }
    );
  },
});

export const CampaignActions = {
  ...CampaignSlice.actions,
  insertCampaign,
  updateCampaign,
  campaign,
  campaigns,
  searchCampaign,
  deleteCampaign,
  insertSlider,
  updateSlider,
  slider,
  sliders,
  searchSlider,
  deleteSlider,
};

export const CampaignReducer = CampaignSlice.reducer;
