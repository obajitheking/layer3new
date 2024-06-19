import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export const safeString = (s: any) => (typeof s === "string" ? s : "");
function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
  return typeof error === "object" && error != null && "status" in error;
}

const getMessage = (message: any) => {
  if (typeof message === "string") return message;
  if (typeof message === "object")
    return message?.message || "Oops an Error Occured";
};
export const getErrorMessage = (error: any) =>
  isFetchBaseQueryError(error) ? getMessage(error.data) : "";

export const IsServer = () => typeof window === "undefined";
