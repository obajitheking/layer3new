import { APP_CONFIG } from "@/common/config/";
import { prepareHeaders } from "@/common/utils/prepare-headers";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: APP_CONFIG.BASE_API_URL,
  prepareHeaders,
});

export const ApiService = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  endpoints: () => ({}),
  tagTypes: ["Page"],
});

export default ApiService;
