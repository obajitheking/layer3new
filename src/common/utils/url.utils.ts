import { FetchArgs } from "@reduxjs/toolkit/query";

export function appendQueryStringParam(
  args: string | FetchArgs,
  key: string,
  value?: string
): string | FetchArgs {
  let urlEnd = typeof args === "string" ? args : args.url;

  if (value) {
    if (urlEnd.indexOf("?") < 0) urlEnd += "?";
    else urlEnd += "&";

    urlEnd += `${key}=${value}`;
  }

  return typeof args === "string" ? urlEnd : { ...args, url: urlEnd };
}

export const setBaseUrl =
  (baseUrl: string) =>
  (url?: string, ignoreLastSlash = true) => {
    if (url?.startsWith("/")) {
      url = url?.replace("/", "");
    }
    let generatedUrl = `${baseUrl}${url ? `/${url}` : ""}`;

    // Check if the last character of the URL is a slash
    if (
      generatedUrl.charAt(generatedUrl.length - 1) !== "/" &&
      !ignoreLastSlash
    ) {
      generatedUrl += "/";
    }

    return generatedUrl;
  };
