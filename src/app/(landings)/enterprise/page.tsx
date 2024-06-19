"use client";
import MainCta from "@/app/(landings)/common/MainCta";
import CheckLight from "@assets/icons/check-light.svg";
import { Col, Row } from "antd";
import { v4 } from "uuid";
import {
  enterprise_faq,
  internet_services,
  products,
  stats,
} from "../common/data";
import ProductCard from "./ProductCard";

import Hero from "@/components/HeroSlider/Hero";
import { HeroContainer } from "@/components/HeroSlider/HeroSlider";
import Partners from "@/components/Partners/Partners";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContactUsForm from "../common/ContactUsForm";
import EnterpriseFaq from "../common/Faq";
import { enterprise_slides } from "./slides";

export default function EnterprisePage() {
  React.useEffect(() => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove as any);
    });

    function handleMouseMove(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const rect = target.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;

      let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

      angle = (angle + 360) % 360;

      target.style.setProperty("--start", `${angle + 60}`);
    }

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove as any);
      });
    };
  }, []);
  return (
    <>
      <HeroContainer bgImage="/img/enterprise.png">
        <div className="mt-[200px]">
          <Hero {...enterprise_slides[0]} />
        </div>
      </HeroContainer>
      <Partners />
      <section className="py-[50px] bg-brand-dark-2">
        <div className="container">
          <h3 data-aos="fade-down" className="header-text text-center mb-10">
            How we can help
          </h3>
          <div className="py-[50px]">
            <Row gutter={[16, 16]} className="card_rows">
              {products.map((product) => (
                <Col data-aos="flip-up" key={v4()} xs={24} sm={12} lg={8}>
                  <ProductCard {...product} />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </section>

      <section className="py-[100px] bg-brand-dark">
        <div className="container flex flex-col-reverse  lg:flex-row justify-start items-center gap-20">
          <div className="space-y-8 w-full lg:max-w-[637px]">
            <h3 data-aos="fade-down" className="header-text mt-8">
              Discover how Layer3 can empower your organization to thrive in
              today&apos;s dynamic digital landscape.
            </h3>
            <div className="flex flex-col justify-start items-start gap-6">
              {internet_services.map((service) => (
                <div
                  data-aos="flip-down"
                  key={v4()}
                  className="w-full max-w-[471px]"
                >
                  <div className="flex items-center space-x-2 mb-[10px]">
                    <CheckLight />
                    <p className=" text-base sm:text-xl font-[300] text-white">
                      {service?.label}
                    </p>
                  </div>
                  <p className="text-sm sm:text-lg font-[300] text-white">
                    {service.content}
                  </p>
                </div>
              ))}
            </div>
            <Link
              data-aos="fade-right"
              href="/contact-us"
              type="button"
              className="filled w-full max-w-[161px]"
            >
              Get Started
            </Link>
          </div>
          <div
            data-aos="fade-left"
            className="relative w-full lg:max-w-[523px] h-[400px] md:h-[596px]"
          >
            <Image
              sizes="100vw"
              fill
              src="/img/ent.png"
              alt="Runtime Illustration"
            />
          </div>
        </div>
      </section>
      <section className="py-[100px] bg-brand-dark">
        <div className="container">
          <Row gutter={[16, 16]} justify={"center"}>
            {stats.map((stat) => (
              <Col
                className="text-center"
                xs={24}
                sm={12}
                md={12}
                lg={6}
                key={v4()}
              >
                <h3
                  data-aos="zoom-in"
                  className="text-[40px] font-semibold text-white"
                >
                  {stat.title}
                </h3>
                <p
                  data-aos="fade-up"
                  className="text-xl font-[300] text-[#F3F4F2]"
                >
                  {stat.caption}
                </p>
              </Col>
            ))}
          </Row>
        </div>
      </section>
      <ContactUsForm />
      <EnterpriseFaq faqs={enterprise_faq} />
      <MainCta />
    </>
  );
}
