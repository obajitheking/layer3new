"use client";
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import { v4 } from "uuid";
import TestimonialCard, { ITestimonialCardProps } from "./TestimonialCard";

const testimonials: ITestimonialCardProps[] = [
  {
    title: "Ogunlana farms",
    testimony:
      "Food processors are constantly in need of quality raw materials for food production. The quality of commodities matters to them as much as the price because low-quality products will affect their own end-product. ",
    imgSrc: "/img/testimonials/1.jpeg",
  },
  {
    title: "Mohammed Azzez",
    testimony:
      "Food processors are constantly in need of quality raw materials for food production. The quality of commodities matters to them as much as the price because low-quality products will affect their own end-product.",
    imgSrc: "/img/testimonials/2.jpeg",
  },
];

function TestimonialCarousel() {
  const swiperElRef = useRef<SwiperRef>(null);

  useEffect(() => {
    register();
    // listen for Swiper events using addEventListener
  }, []);

  return (
    <section className="testimonial-carousel bg-brand-dark py-20">
      <div className="container">
        <div className="w-full max-w-[550px] mb-6">
          <h2
            data-aos="fade-right"
            className="text-white capitalize mb-3  text-[32px] font-bold"
          >
            Don&apos;t just take our word for it
          </h2>
          <p
            data-aos="fade-right"
            className="text-white text-lg text-opacity-60"
          >
            Hear what our users have to say
          </p>
        </div>
        <div>
          <swiper-container
            ref={swiperElRef}
            slides-per-view={"auto"}
            space-between={30}
            autoplay-delay="5000"
            effect="slide"
            loop={true}
          >
            {testimonials.map((testimonial, index) => (
              <swiper-slide key={v4()} style={{ width: 604 }}>
                <TestimonialCard {...testimonial} />
              </swiper-slide>
            ))}
          </swiper-container>
          {/* <div className="flex items-center justify-center space-x-3 my-4">
            {testimonials.map((_, index) => (
              <button
                onClick={() => goTo(index)}
                style={{ transitionDuration: "1s", width: "14px" }}
                key={v4()}
                className={cx(
                  "h-[14px]  transition-all rounded-full bg-white ",
                  index === realIndex
                    ? "opacity-100 w-[100px]"
                    : "opacity-30 w-[14px]"
                )}
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}

TestimonialCarousel.propTypes = {};

export default TestimonialCarousel;
