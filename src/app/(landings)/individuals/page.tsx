"use client";
import Hero from "@/components/HeroSlider/Hero";
import { HeroContainer } from "@/components/HeroSlider/HeroSlider";
import CheckLight from "@assets/icons/check-light.svg";
import { Col, Row } from "antd";
import Image from "next/image";
import { v4 } from "uuid";
import ContactUsForm from "../common/ContactUsForm";
import EnterpriseFaq from "../common/Faq";
import PricingCard, { IPricingCardProps } from "../common/PricingCard";
import { individual_pricing, schools_pricing, services } from "../common/data";
import { individual_faq } from "./data";
import Link from "next/link";
import { useState } from "react";
import PlanModal from "../common/PricingModal";

function IndividualPage() {
  const [picked_plan, setPickedPlan] = useState<IPricingCardProps | null>(null);
  return (
    <>
      <HeroContainer bgImage="/img/individual.jpeg">
        <div className="mt-[172px] mb-12">
          <Hero
            ctas={[
              {
                label: "Buy Plan",
                href: "/individuals#pricing",
                className: "bg-primary border-primary text-white",
              },
              {
                label: "Contact Sales",
                href: "/contact-us",
                className: "bg-white border-white text-primary",
              },
            ]}
            title="Experience Lightning-Fast Connectivity with Layer3 Fiber to the Home"
            description="We can provide speeds from 100Mbps up to 1Gbps through our fiber optic network."
          />
        </div>
      </HeroContainer>
      <section className="bg-brand-dark py-[100px]">
        <div className="container">
          <div className="space-y-[30px] max-w-[708px] mx-auto mb-10">
            <h3 dat-aos="fade-down" className="header-text  text-center">
              Services
            </h3>
            <p
              data-aos="fade-up"
              className="text-lg font-[300] text-center text-white text-opacity-80"
            >
              Experience lightning-fast internet tailored for residential areas
              with Layer3 Fiber to the Home. Say goodbye to buffering and lag
              with blazing speeds that power all your digital needs. Join the
              future of connectivity today.
            </p>
          </div>
          <div className="flex items-start flex-col-reverse lg:flex-row lg:space-x-20">
            <div className=" space-y-12">
              <div className="w-full max-w-[610px]">
                <h3 data-aos="fade-right" className="header-text mb-8">
                  We provide speeds from 80 Mbps up to 1Gbps through our fiber
                  optic network to your home.
                </h3>
                <div className="space-y-6">
                  <p
                    data-aos="zoom-in-down"
                    className="text-2xl font-[300] text-white"
                  >
                    Our Internet service includes:
                  </p>
                  <div className="space-y-6">
                    {services.map((service) => (
                      <div
                        data-aos="flip-down"
                        key={v4()}
                        className="w-full max-w-[471px]"
                      >
                        <div className="flex items-center space-x-2 mb-[10px]">
                          <CheckLight />
                          <p className="text-base font-medium text-white">
                            {service?.title}
                          </p>
                        </div>
                        <p className="text-sm font-[300] text-white text-opacity-70">
                          {service?.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <Link
                href={"/individuals#pricing"}
                data-aos="fade-right"
                type="button"
                className="filled w-full max-w-[161px]"
              >
                Get Started
              </Link>
            </div>
            <div
              data-aos="fade-left"
              className="relative w-full mb-10 lg:mb-0 lg:max-w-[525.58px] h-[400px] md:h-[637px] z-0 after:top-6  after:left-6 after:h-full after:w-full after:bg-[#E944441A] after:block after:absolute after:rounded-[14px] after:-z-10"
            >
              <Image
                fill
                sizes="100vw"
                src="/img/vr.jpg"
                alt="An image of someone on a virtual reality headset"
                className="z-1 rounded-[14px] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-[100px] bg-brand-dark-2">
        <div className="container flex flex-col flex-start items-center gap-10">
          <div className="w-full mx-auto text-center max-w-[608px] space-y-4">
            <h3 data-aos="fade-down" className="header-text">
              Layer3 Fiber Packages
            </h3>
            <p
              data-aos="fade-down"
              className="text-base font-[300] text-white text-opacity-70"
            >
              Discover lightning-fast speeds and unbeatable reliability with our
              tailored packages. Stream, work, and connect effortlessly with
              layer3fiber. Find your perfect fit today!
            </p>
          </div>
          <Row
            id="pricing"
            gutter={[32, 32]}
            justify={"center"}
            className="w-full max-w-[1222px] mx-auto"
          >
            {individual_pricing?.map((price) => (
              <Col key={v4()} xs={24} sm={12} lg={8}>
                <PricingCard onBuyPlan={(p) => setPickedPlan(p)} {...price} />
              </Col>
            ))}
          </Row>
        </div>
      </section>
      <ContactUsForm />
      <EnterpriseFaq faqs={individual_faq} />
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

export default IndividualPage;
