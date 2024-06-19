/** @jsxImportSource @emotion/react */
"use client";
import FaqCollapse from "@/components/FaqCollapse";
import ArrowRight from "@assets/icons/arrow-right.svg";
import { CollapseProps } from "antd";
import Link from "next/link";

function Faq({ faqs }: { faqs: CollapseProps["items"] }) {
  return (
    <section className="bg-brand-dark py-[100px]">
      <div className="container flex flex-col lg:flex-row lg:space-x-[100px]">
        <div className="w-full lg:max-w-[315px] lg:flex-shrink-0 mb-10">
          <h3 data-aos="fade-left" className="header-text text-[40px]">
            Everything you need to know
          </h3>

          <p
            data-aos="fade-left"
            className="text-xl font-[300] text-white mt-4"
          >
            Didn&apos;t find your answers?
          </p>
          <Link
            href="/contact-us"
            data-aos="fade-left"
            type="button"
            className="filled justify-center p-5 mt-[46px] max-w-[315px] w-full rounded"
          >
            Contact Us
            <span className="ml-auto">
              <ArrowRight />
            </span>
          </Link>
        </div>
        <div data-aos="fade" className="flex-grow text-white">
          <FaqCollapse items={faqs} />
        </div>
      </div>
    </section>
  );
}

export default Faq;
