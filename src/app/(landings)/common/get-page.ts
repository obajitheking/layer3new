import { pagesApiEndpoints } from "@/redux/services/pages.api";
import { store } from "@/redux/store";

export const getPage = async (page: string) => {
  try {
    return await store
      .dispatch(pagesApiEndpoints.getPage.initiate(page))
      .unwrap();
  } catch (error) {
    const err = error as { status: number; data: { detail: string } };
    return {
      isError: true,
      key: err.status.toString(),
      title: err.status.toString(),
      content: err?.data.detail || "An error occurred",
      updated_at: new Date().toISOString(),
      description: "Please try again later",
    };
  }
};
