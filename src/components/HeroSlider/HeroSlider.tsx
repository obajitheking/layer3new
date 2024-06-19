"use client";
import csx from "classnames";
import dynamic from "next/dynamic";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { register } from "swiper/element/bundle";
import { v4 } from "uuid";
import Hero, { IHeroSlideProps } from "./Hero";

function SlideProgress({
  title,
  isActive = false,
}: {
  title?: string;
  widthPercentage?: number;
  isActive?: boolean;
}) {
  return (
    <div className=" w-full  text-white">
      <div className="track bg-[#FFFFFF66] h-[2px] w-full mb-3">
        <div
          style={{}}
          className={csx(
            "bg-primary h-full",
            isActive ? "active-swiper-progress-bar" : "w-0"
          )}
        ></div>
      </div>
      <p className="text-xs sm:text-base">{title}</p>
    </div>
  );
}

export const HeroContainer = ({
  children,
  bgImage = "/img/herobg.png",
}: {
  children?: React.ReactNode;
  bgImage?: string;
}) => (
  <section
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundColor: "#00000066",
    }}
    className="p-0  min-h-[500px] overflow-hidden bg-center bg-cover bg-no-repeat relative"
  >
    <div className="hero-overlay bg-[#00000066] absolute"></div>
    {children}
  </section>
);

export interface IHeroSliderProps {
  slides: IHeroSlideProps[];
  bgImage?: string;
  slideProgress?: string[];
}

function HeroSliderBase({ slides, bgImage }: IHeroSliderProps) {
  const swiperElRef = useRef<HTMLDetailsElement>(null);
  const [realIndex, setRealIndex] = useState(0);

  useEffect(() => {
    register();
    swiperElRef.current?.addEventListener("swiperrealindexchange", (e) => {
      const [swiper] = (e as CustomEvent).detail;
      setRealIndex(swiper?.realIndex);
    });

    // listen for Swiper events using addEventListener
  }, []);

  const swipers = useMemo(
    () =>
      slides.map((slide) => (
        <swiper-slide key={v4()}>
          <Hero {...slide} />
        </swiper-slide>
      )),
    [slides]
  );

  return (
    <HeroContainer bgImage={bgImage}>
      <swiper-container
        ref={swiperElRef}
        slides-per-view={1}
        style={{ marginTop: 172 }}
        autoplay-delay="5000"
        speed={1000}
        loop={true}
      >
        {swipers}
      </swiper-container>
      <div className="container mt-[92px] py-[26px]">
        <div className="flex justify-evenly w-full gap-7 sm:gap-[56px]">
          {slides?.map((title, i) => (
            <SlideProgress key={v4()} isActive={realIndex == i} />
          ))}
        </div>
      </div>
    </HeroContainer>
  );
}

const LoadingValueContext = React.createContext<IHeroSliderProps>({
  slides: [],
});

const SafeSlide = dynamic(() => Promise.resolve(HeroSliderBase), {
  ssr: false,
  loading: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const value = React.useContext(LoadingValueContext);
    return <HeroContainer bgImage={value.bgImage}></HeroContainer>;
  },
});

export default function HeroSlider(prop: IHeroSliderProps) {
  return (
    <LoadingValueContext.Provider value={prop}>
      <SafeSlide {...prop} />
    </LoadingValueContext.Provider>
  );
}
