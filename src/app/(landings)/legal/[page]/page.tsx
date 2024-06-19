import React from "react";
import PageTitle from "../PageTitle";
import { pagesApiEndpoints } from "@/redux/services/pages.api";
import { store } from "@/redux/store";
import dayjs from "dayjs";
import Head from "next/head";
import { getPage } from "../../common/get-page";

async function LegalPage({ params }: { params: { page: string } }) {
  const value = await getPage(`legal/${params.page}`);

  return (
    <>
      <title>{value?.title}</title>
      <meta name="description" content={value?.description} />
      <section className="py-[105px] bg-white min-h-[500px]">
        <div className="container">
          <PageTitle
            title={value.title}
            subtitle={`Last updated on ${dayjs(value.updated_at).format(
              "D MMMM YYYY"
            )}`}
          />
          <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl w-full max-w-none mt-7">
            <p>{value.description}</p>
            <div dangerouslySetInnerHTML={{ __html: value.content }} />
          </div>
        </div>
      </section>
    </>
  );
}

export default LegalPage;
