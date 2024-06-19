import React from "react";
import ArrowRight from "@assets/icons/arrow-right.svg";

function MainCta() {
  return (
    <div
      className="hero min-h-[330px]"
      style={{
        backgroundImage: "url(/img/herobg.png)",
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-40"></div>
      <div className="hero-content text-center">
        <div className="">
          <h1
            data-aos="zoom-in"
            className="mb-3 text-[40px] leading-[42px] font-bold text-white"
          >
            Ready To Get Started
          </h1>
          <p data-aos="zoom-in" className="mb-8 text-[#FFFFFFCC]">
            Empower your company&apos;s growth with our world-class solutions.
          </p>
          <button
            data-aos="zoom-in"
            className="filled w-full max-w-[233px] mx-auto space-x-2 flex items-center justify-center"
          >
            <span> Request a consulation</span> <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

MainCta.propTypes = {};

export default MainCta;
