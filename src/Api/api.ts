import {
  RequestParams,
  OperationResultDTO,
  Api as ApiClass,
} from "../Api/api-types";
import { getHeadersForFetch } from "../Helpers/util";
import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import { RootStateLib } from "../Helpers/store";

export const ApiInstance = new ApiClass({
  baseUrl: process.env.REACT_APP_BACKEND_API_URL,
  securityWorker: getHeadersForFetch,
});

export const generateThunk = <
  RequestDTO,
  ResponseDTO extends OperationResultDTO
>(
  actionType: string,
  fetchFn: (data: RequestDTO, params?: RequestParams) => Promise<ResponseDTO>
): AsyncThunk<
  ResponseDTO,
  RequestDTO,
  {
    rejectValue: OperationResultDTO;
  }
> => {
  const thunk = createAsyncThunk<
    ResponseDTO,
    RequestDTO,
    {
      rejectValue: OperationResultDTO;
    }
  >(actionType, async (data, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootStateLib;
      const token = state.auth.validateUser?.response?.token;
      if (token) {
        ApiInstance.setSecurityData(token);
      }
      const response = await fetchFn(data);

      if (!response.result) {
        return thunkAPI.rejectWithValue(response);
      }

      return response;
    } catch {
      const constructedErrorMessage = {
        result: false,
        messages: [{ code: "600", message: "Bir hata oluştu" }],
      };

      return thunkAPI.rejectWithValue(constructedErrorMessage);
    }
  });

  return thunk;
};

export const Api = ApiInstance.api;
