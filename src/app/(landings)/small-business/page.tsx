"use client";
import MainCta from "@/app/(landings)/common/MainCta";
import HeroSlider from "@/components/HeroSlider/HeroSlider";
import { Col, Modal, Row } from "antd";
import Image from "next/image";
import { v4 } from "uuid";
import ContactUsForm from "../common/ContactUsForm";
import Faq from "../common/Faq";
import PricingCard, { IPricingCardProps } from "../common/PricingCard";
import SolutionList from "../common/SolutionList";
import {
  mtus_pricing,
  schools_pricing,
  smallBusinessBenefits,
  small_business_faq,
} from "../common/data";
import UseCases from "./UseCases";
import { small_business_slides } from "./slide";
import "./styles.css";
import Link from "next/link";
import { useState } from "react";
import PlanModal from "../common/PricingModal";

export default function SmallBusinessPage() {
  const [picked_plan, setPickedPlan] = useState<IPricingCardProps | null>(null);
  return (
    <>
      <HeroSlider
        slides={small_business_slides}
        bgImage="/img/enterprise.png"
      />

      <section className="py-[100px] bg-brand-dark-2">
        <div className="container flex flex-col flex-start items-center gap-10">
          <div className="w-full mx-auto text-center max-w-[608px] space-y-4">
            <h3 data-aos="fade-down" className="header-text">
              Layer3 Fiber Packages for Plaza/MTU&apos;s
            </h3>
            <p
              data-aos="fade-down"
              className="text-base font-[300] text-white text-opacity-70"
            >
              MTUs - NRC N80,000/Shared cost based on the number of off-takers
            </p>
          </div>
          <Row
            gutter={[32, 32]}
            justify={"center"}
            className="w-full max-w-[1222px] mx-auto"
          >
            {mtus_pricing?.map((price) => (
              <Col key={v4()} xs={24} sm={12}>
                <PricingCard onBuyPlan={(p) => setPickedPlan(p)} {...price} />
              </Col>
            ))}
          </Row>
        </div>
      </section>
      <section className="py-[100px] bg-brand-dark-2">
        <div className="container flex flex-col flex-start items-center gap-10">
          <div className="w-full mx-auto text-center max-w-[608px] space-y-4">
            <h3 data-aos="fade-down" className="header-text">
              Layer3 Fiber Packages For Schools
            </h3>
            <p
              data-aos="fade-down"
              className="text-base font-[300] text-white text-opacity-70"
            >
              As you add more employees and digital activities, you need more
              bandwidth. You can future-proof your internet by choosing business
              fiber internet, which has
            </p>
          </div>
          <Row
            id="pricing"
            gutter={[32, 32]}
            justify={"center"}
            className="w-full max-w-[1222px] mx-auto"
          >
            {schools_pricing?.map((price) => (
              <Col key={v4()} xs={24} sm={12} lg={8}>
                <PricingCard onBuyPlan={(p) => setPickedPlan(p)} {...price} />
              </Col>
            ))}
          </Row>
        </div>
      </section>
      <section className=" bg-brand-dark py-[100px]">
        <div className="container space-y-8">
          <div className="space-y-8">
            <div className="space-y-10">
              <h3 data-aos="fade-right" className="header-text max-w-[760px]">
                Discover the power of business broadband for small enterprises.
              </h3>
              <Link
                href="/contact-us"
                data-aos="fade-right"
                type="button"
                className="filled w-full max-w-[172px]"
              >
                Contact Sales
              </Link>
            </div>
          </div>
          <div className="space-y-10">
            <p
              data-aos="fade-right"
              className="text-lg font-[300] w-full max-w-[888px] text-white"
            >
              Elevate your connectivity to new heights with speeds beyond home
              internet, enhanced by dedicated customer services and advanced
              security measures. Experience uninterrupted operations and
              seamless communication, tailored to propel your business forward
              with every connection.
            </p>
            <SolutionList solutions={smallBusinessBenefits} />
          </div>
        </div>
      </section>
      <section className="bg-brand-dark py-[100px]">
        <div className="container">
          <div className=" mx-auto flex flex-col items-center justify-start w-full max-w-[725px] space-y-3">
            <h3 data-aos="fade-down" className="header-text text-center">
              Cloud services for Small Businesses
            </h3>
            <p
              data-aos="fade-down"
              className="text-base font-[300] text-center text-white text-opacity-70"
            >
              Layer3 Cloud for business helps companies of all sizes accelerate
              innovation, improve productivity, reduce costs, scale operations,
              and enhance security.
            </p>
          </div>
        </div>
      </section>
      <section className=" bg-brand-dark pt-0 pb-[100px]">
        <div className="container p-5 md:p-[50px] rounded-[10px] bg-brand-dark-2 flex flex-col-reverse items-start justify-start w-full lg:flex-row lg:space-x-[60px]">
          <div className="flex flex-col justify-start items-start space-y-12">
            <div className="space-y-8">
              <ul
                data-aos="fade-right"
                className=" list-disc list-inside text-xl text-white font-[300]"
              >
                <li>Cloud Services</li>
              </ul>
              <h2
                data-aos="fade-right"
                className="capitalize text-[32px] md:text-[52px] font-semibold text-white md:leading-[62.4px]"
              >
                Cloud for small and medium-sized businesses
              </h2>
              <p
                data-aos="fade-right"
                className="text-base font-[300] text-white text-opacity-70 "
              >
                Small companies and medium-sized organizations face the same
                security and growth challenges that global enterprises do—with
                fewer resources.
              </p>
            </div>
            <div data-aos="slide-up" className="eclipses">
              <div className="eclipse-coloured">
                <p>01</p>
              </div>
              <div data-aos="slide-up" className="eclipse">
                <p>02</p>
              </div>
              <div data-aos="slide-up" className="eclipse">
                <p>03</p>
              </div>
              <div data-aos="slide-up" className="eclipse">
                <p>04</p>
              </div>
            </div>
            <Link
              href="/contact-us"
              data-aos="fade-left"
              className="filled w-full max-w-[270px]"
            >
              Try Layer3 Cloud
            </Link>
          </div>
          <div
            data-aos="fade-left"
            className="right relative w-full mb-10 lg:mb-0 lg:max-w-[523px] min-h-[400px] sm:min-h-[596px]"
          >
            <Image
              fill
              sizes="100vw"
              src="/img/ent.png"
              alt="an image showing someone using a laptop"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>
      <UseCases />
      <ContactUsForm />
      <Faq faqs={small_business_faq} />
      <MainCta />
      {picked_plan && (
        <PlanModal
          plan={picked_plan}
          visible={!!picked_plan}
          onClose={() => setPickedPlan(null)}
        />
      )}
    </>
  );
}
