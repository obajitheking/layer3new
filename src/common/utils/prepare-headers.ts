import { getAccessToken } from "@/common/utils/token.utils";

export const prepareHeaders = (headers: Headers) => {
  const token = getAccessToken();
  if (token) {
    headers.set("authorization", `Bearer ${token}`);
  }
  return headers;
};
