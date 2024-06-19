import Api from "./api";

export type LoginUserResponse = {
  access_token: string;
  token_type: string;
};

export interface ILoginPayload {
  username: string;
  password: string;
}

export const authApi = Api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginUserResponse, ILoginPayload>({
      query: (body) => ({
        url: "/token",
        method: "POST",
        body,
      }),
    }),
    // forgotPassword: build.mutation<any, { email?: string }>({
    //   query: (body) => ({
    //     url: "/admin/forgot-password",
    //     method: "POST",
    //     body,
    //   }),
    // }),
    // resetPassword: build.mutation<
    //   any,
    //   { new_password: string; token?: string }
    // >({
    //   query: (body) => ({
    //     url: "/admin/reset-password",
    //     method: "POST",
    //     body,
    //   }),
    // }),
    // getUserProfile: build.query<IUser, void>({
    //   query: () => ({
    //     url: "/admin",
    //   }),
    // }),
  }),
});

export const { endpoints: authApiEndpoints, useLoginMutation } = authApi;
