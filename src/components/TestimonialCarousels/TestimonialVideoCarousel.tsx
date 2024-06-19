"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { register } from "swiper/element/bundle";
import { v4 } from "uuid";
import VideoCard from "./VideoCard";

const testimonials = [
  {
    url: "https://res.cloudinary.com/dgyfe9bxj/video/upload/v1717738170/COMMERCIO_PARTNERS_TESTIMONIAL_VIDEO_V2_px4pgp.mp4",
  },
  {
    text: {
      testimony: `Layer3Cloud's Infrastructure as a Service guarantees flexibility in scaling resources such as storage space and RAM, alongside advanced security and reliable support services. Their exceptional support, quick response times, and effective issue resolution have been instrumental in enhancing our operations at the National Cash Transfer Office. This partnership ensures we deliver uninterrupted and transparent assistance to vulnerable populations. We highly recommend Layer3Cloud for their innovative and dependable solutions.`,
      name: "Usman H. Eneye, ICT Officer",
      company: "National Cash Transfer Office (NCTO)",
    },
  },
  {
    url: "https://res.cloudinary.com/dgyfe9bxj/video/upload/v1717738262/SEAMFIX_TESTIMONIAL_VIDEO_V1_jivwrb.mp4",
  },
  {
    text: {
      testimony: `The main benefits of the Infrastructure as a Service offered by Layer3Cloud are the flexibility in scaling up resources such as storage space and RAM, along with advanced security, availability, and reliable support services. Layer3Cloud's support has been exceptional in terms of response time and their approach to resolving issues. This has significantly enhanced our IT operations at the Nigeria Mining Cadastre Office, ensuring uninterrupted internet and unlimited storage solutions. I highly recommend Layer3Cloud for their innovative and dependable services.`,
      name: "Anthony Ugal, Head ICT",
      company: "Nigeria Mining Cadastre Office",
    },
  },
];
function TestimonialVideoCarousel() {
  const swiperElRef = useRef<SwiperRef>(null);
  const [realIndex, setRealIndex] = useState(0);

  useEffect(() => {
    register();
    swiperElRef.current?.addEventListener("swiperrealindexchange", (e) => {
      const [swiper] = (e as CustomEvent).detail;
      setRealIndex(swiper?.realIndex);
    });
    // listen for Swiper events using addEventListener
  }, []);

  const goNext = () => {
    if (swiperElRef.current) {
      swiperElRef.current?.swiper?.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperElRef.current) {
      swiperElRef.current?.swiper?.slidePrev();
    }
  };

  return (
    <section className="testimonial-carousel bg-brand-dark py-20">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="w-full max-w-[771px]">
            <h2 className="text-white  mb-3 text-[40px] font-bold">
              What our customers are saying...
            </h2>
            <p className="text-white text-lg text-opacity-60 w-full max-w-[490px]">
              Experience Layer3&apos;s excellent support through the words of
              our customers
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              disabled={realIndex === 0}
              onClick={goPrev}
              className="btn h-10 w-10 p-0 bg-transparent border border-white text-white min-h-10 hover:text-black hover:bg-white rounded-full flex items-center justify-center "
            >
              <BiChevronLeft />
            </button>
            <button
              disabled={realIndex === testimonials.length - 1}
              onClick={goNext}
              className="btn bg-transparent h-10 w-10 p-0 min-h-10 border border-white text-white hover:text-black hover:bg-white rounded-full flex items-center justify-center"
            >
              <BiChevronRight />
            </button>
          </div>
        </div>

        <swiper-container
          ref={swiperElRef}
          slides-per-view={"auto"}
          space-between={40}
          style={{ marginTop: "40px" }}
          effect="slide"
        >
          {testimonials.map((testimony, index) => (
            <swiper-slide key={v4()} style={{ width: 600, marginRight: 20 }}>
              <VideoCard {...testimony} />
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </section>
  );
}

export default dynamic(() => Promise.resolve(TestimonialVideoCarousel), {
  ssr: false,
});
