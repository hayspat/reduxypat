export const getHeadersForFetch = (
  token?: string | null | undefined
): {
  credentials: "same-origin" | "include" | "omit" | undefined;
  headers: {
    "Content-Type": string;
    Authorization: string;
  };
  redirect: "follow" | "error" | "manual" | undefined;
  referrerPolicy:
    | ""
    | "same-origin"
    | "no-referrer"
    | "no-referrer-when-downgrade"
    | "origin"
    | "origin-when-cross-origin"
    | "strict-origin"
    | "strict-origin-when-cross-origin"
    | "unsafe-url"
    | undefined;
} => ({
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
