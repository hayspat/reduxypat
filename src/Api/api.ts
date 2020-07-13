import {
  RequestParams,
  OperationResultDTO,
  Api as ApiClass,
} from "../Api/api-types";
import { getHeadersForFetch } from "../Helpers/util";
import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";

export const ApiInstance = new ApiClass({
  baseUrl: process.env.REACT_APP_BACKEND_API_URL,
});

export const withAuth = async <
  RequestDTO,
  ResponseDTO extends OperationResultDTO
>(
  fetchFn: (data: RequestDTO, params?: RequestParams) => Promise<ResponseDTO>,
  data: RequestDTO,
  params?: RequestParams
): Promise<ResponseDTO> => {
  const response = await fetchFn(data, { ...params, ...getHeadersForFetch() });

  return response;
};

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
      const state = thunkAPI.getState() as any;
      const { token } = state.auth.validateUser.response;

      const response = await fetchFn(
        data ?? (getHeadersForFetch(token) as any),
        getHeadersForFetch(token)
      );

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
