import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { Slices } from "../";

const isDev = process.env.NODE_ENV !== "production";

const reducers = {
  ...Slices,
};

const store = configureStore({
  reducer: reducers,
  middleware: [...getDefaultMiddleware()],
  devTools: isDev,
});

export type RootStateLib = ReturnType<typeof store.getState>;
