"use client";
import Achievements from "@/app/(landings)/(home)/Achievements/Achievements";
import Benefits from "@/app/(landings)/(home)/Benefits";
import CaseStudies from "@/app/(landings)/(home)/CaseStudies";
import Services from "@/app/(landings)/(home)/Services";
import Solutions from "@/app/(landings)/(home)/Solutions/Solutions";
import MainCta from "@/app/(landings)/common/MainCta";
import HeroSlider from "@/components/HeroSlider/HeroSlider";
import Partners from "@/components/Partners/Partners";
import TestimonialVideoCarousel from "@/components/TestimonialCarousels/TestimonialVideoCarousel";
import { services } from "./data";
import { home_slides } from "./home-slide";

export default function Home() {
  return (
    <>
      <HeroSlider slides={home_slides} />
      <Partners />
      <Services services={services} />
      <Solutions />
      <Benefits />
      <Achievements />
      <TestimonialVideoCarousel />
      <CaseStudies />
      <MainCta />
    </>
  );
}
