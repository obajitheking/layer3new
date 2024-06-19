import Api from "./api";

export interface ICreatePage {
  key: string;
  title: string;
  content: string;
  description: string;
}

export interface IPage extends ICreatePage {
  created_at: string;
  updated_at: string;
  isError?: boolean;
}

export const pagesApi = Api.injectEndpoints({
  endpoints: (build) => ({
    createPage: build.mutation<IPage, ICreatePage>({
      query: (body) => ({
        url: "/pages",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Page"],
    }),
    updatePage: build.mutation<
      IPage,
      { key: string; payload: Partial<ICreatePage> }
    >({
      query: (body) => ({
        url: `/pages/${body.key}`,
        method: "PUT",
        body: body.payload,
      }),
      invalidatesTags: (result, error, { key }) => [{ type: "Page", id: key }],
    }),
    getPages: build.query<IPage[], void>({
      query: () => ({
        url: "/pages",
      }),
      transformResponse: (response: { data: IPage[] }) =>
        response.data?.sort(
          (a, b) =>
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        ),
      providesTags: (result) =>
        result?.length
          ? result.map(({ key }) => ({ type: "Page", id: key }))
          : [{ type: "Page", id: "LIST" }],
    }),
    getPage: build.query<IPage, string>({
      query: (key) => ({
        url: `/pages/${key}`,
      }),
      transformResponse: (response: { data: IPage }) => response.data,
      providesTags: (result, error, key) => [{ type: "Page", id: key }],
    }),
  }),
});

export const {
  endpoints: pagesApiEndpoints,
  useCreatePageMutation,
  useUpdatePageMutation,
  useGetPagesQuery,
  useGetPageQuery,
} = pagesApi;
