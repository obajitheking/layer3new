import { CaseStudyCardProps } from "@/app/(landings)/(home)/CaseStudies/CaseStudyCard";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://layer3.joseph.name.ng/wp-json/wp/v2",
});

export interface IBlogCaseStudy {
  title: { rendered: string };
  link: string;
  excerpt: { rendered: string };
  featured_media: number;
}

export const BlogApiService = createApi({
  reducerPath: "blogApi",
  baseQuery: baseQuery,
  endpoints: (build) => ({
    getCaseStudies: build.query<CaseStudyCardProps[], void>({
      query: () => ({
        url: "/posts?category=case&per_page=3",
      }),
      transformResponse: (response: IBlogCaseStudy[]) =>
        response?.map((item) => ({
          title: item.title.rendered,
          details: item.excerpt.rendered,
          href: item.link,
          media_id: item.featured_media,
        })),
      providesTags: [{ type: "CaseStudy", id: "LIST" }],
    }),
    getFeaturedMedia: build.query<
      { source_url: string; alt_text: string },
      number | undefined
    >({
      query: (media_id) => ({
        url: `media/${media_id}`,
      }),
    }),
  }),
  tagTypes: ["CaseStudy"],
});

export const { useGetCaseStudiesQuery, useGetFeaturedMediaQuery } =
  BlogApiService;
export default BlogApiService;
