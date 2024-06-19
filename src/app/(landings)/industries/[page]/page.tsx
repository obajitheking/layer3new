import { pagesApiEndpoints } from "@/redux/services/pages.api";
import { store } from "@/redux/store";
import dayjs from "dayjs";
import Link from "next/link";
import { v4 } from "uuid";
import { footerItems } from "../../common/data";
import { getPage } from "../../common/get-page";

async function IndustryPage({ params }: { params: { page: string } }) {
  const value = await getPage(`industries/${params.page}`);
  return (
    <section className="bg-brand-dark min-h-screen py-28">
      <div className="container">
        <div className=" min-h-[233px] bg-brand-dark-2 py-8 px-10 rounded-lg">
          <p className="mb-4 text-sm font-light text-white space-x-1">
            <Link href={"/"} className="text-white text-opacity-80">
              Home
            </Link>
            <span>/</span>
            <span>{value?.title}</span>
          </p>
          <h1 className="text-2xl md:text-[50px] md:leading-[62.5px] mb-6  font-medium text-white ">
            {value?.isError ? "Error" : "Industry"}: {value?.title}
          </h1>
          <div className="">
            <p className="text-white text-opacity-80 text-sm font-light">
              Last Updated
            </p>
            <p className="text-base font-normal text-white">
              {dayjs(value?.updated_at).format("D MMMM YYYY")}
            </p>
          </div>
        </div>
        <div className="bg-white bg-opacity-60 h-[1px] my-10 w-full"></div>
        <div className="flex items-start flex-col-reverse lg:flex-row">
          <nav className="w-full rounded-lg p-5 mt-4 lg:mt-0 lg:max-w-[300px] flex-shrink-0 bg-brand-dark-2">
            <h2 className="text-white  text-opacity-80 text-lg font-medium">
              Related Industries
            </h2>
            <ul className=" list-disc list-inside">
              {footerItems["Industries"].map((item, index) => (
                <li key={v4()} className="py-2">
                  <Link href={item.link} className="text-white text-opacity-80">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex-grow px-6">
            <div
              className="prose text-white prose-sm sm:prose lg:prose-lg xl:prose-xl w-full max-w-none mt-7"
              dangerouslySetInnerHTML={{ __html: value?.content || "" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustryPage;
