"use client";
import { Grid } from "antd";
import cx from "classnames";
import { useEffect, useRef, useState } from "react";
import { register } from "swiper/element/bundle";
import { v4 } from "uuid";
import ServiceCard, { IServiceCardProps } from "./ServiceCard";
import useBreakpoint from "use-breakpoint";

const BREAKPOINTS = {
  xs: 0,
  sm: 414,
};

function Services({ services = [] }: { services: IServiceCardProps[] }) {
  const swiperElRef = useRef<SwiperRef>(null);
  const [realIndex, setRealIndex] = useState(0);
  const { breakpoint } = useBreakpoint(BREAKPOINTS, "xs");

  useEffect(() => {
    register();
    swiperElRef.current?.addEventListener("swiperrealindexchange", (e) => {
      const [swiper] = (e as CustomEvent).detail;
      setRealIndex(swiper?.realIndex);
    });
    // listen for Swiper events using addEventListener
  }, []);

  const goTo = (index: number) => {
    if (swiperElRef.current) {
      swiperElRef.current?.swiper?.slideTo(index);
    }
  };

  return (
    <section className="bg-[#0A0A0A] pt-[100px] pb-[50px]">
      <div className="px-3 sm:pl-5">
        <swiper-container
          ref={swiperElRef}
          slides-per-view={"auto"}
          space-between={24}
          effect="slide"
          loop={true}
        >
          {services?.map((service) => (
            <swiper-slide
              key={v4()}
              style={{ width: breakpoint === "xs" ? undefined : 393 }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image}
                href={service.href}
                actionLabel={service.actionLabel}
              />
            </swiper-slide>
          ))}
        </swiper-container>
        <div className="flex items-center justify-center space-x-3 my-4">
          {services.map((_, index) => (
            <button
              onClick={() => goTo(index)}
              style={{ transitionDuration: "1s", width: "14px" }}
              key={v4()}
              className={cx(
                "h-[14px]  transition-all rounded-full bg-white ",
                index === realIndex
                  ? "opacity-100 w-[50px]"
                  : "opacity-30 w-[14px]"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

Services.propTypes = {};

export default Services;
