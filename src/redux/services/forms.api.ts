import { IContactSales, IRequestCallback } from "@/common/types/interface";
import Api from "./api";

export const formsApi = Api.injectEndpoints({
  endpoints: (build) => ({
    submitContactForm: build.mutation<any, IContactSales>({
      query: (data) => ({
        url: "/contact",
        method: "POST",
        body: data,
      }),
    }),
    submitCallbackForm: build.mutation<any, IRequestCallback>({
      query: (data) => ({
        url: "/contact",
        method: "POST",
        body: data,
      }),
    }),
    submitNewsletterForm: build.mutation<any, { email: string }>({
      query: (data) => ({
        url: "/emails",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  endpoints: formsApiEndpoints,
  useSubmitCallbackFormMutation,
  useSubmitNewsletterFormMutation,
  useSubmitContactFormMutation,
} = formsApi;
