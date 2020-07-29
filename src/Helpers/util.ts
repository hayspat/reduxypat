import { RequestParams } from "../Api/api-types";

export const getHeadersForFetch = (
  token?: string | null | undefined
): RequestParams => ({
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${
      token || (localStorage && localStorage.getItem("token")) || ""
    }`,
  },
  redirect: "follow",
  referrerPolicy: "no-referrer",
});
