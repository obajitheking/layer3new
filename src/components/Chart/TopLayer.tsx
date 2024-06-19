"use client";
import React from "react";
import CountUp from "react-countup";
import { RiArrowUpLine } from "react-icons/ri";

function TopLayer() {
  return (
    <div className="w-full sm:max-w-[363px] py-6 px-5 cursor-pointer transition-all  bg-brand-dark-2 hover:shadow-lg hover:scale-105">
      <div className="pb-3 border-b border-b-[#FFFFFF1A]">
        <p className="text-white font-sans text-sm font-medium uppercase tracking-wide">
          Total Speed
        </p>
      </div>
      <div className="pt-4 flex items-center space-x-3">
        <h3 className="text-[50px] text-white  font-medium">
          <CountUp enableScrollSpy duration={3} start={0} end={30}>
            {({ countUpRef }) => <span ref={countUpRef} />}
          </CountUp>
          K
        </h3>
        <div>
          <span className="text-white text-sm flex items-center mb-2">
            <RiArrowUpLine className="text-[#077D55] h-[20px] w-[20px]" /> 10%{" "}
          </span>
          <span className="text-white text-sm">Since last month</span>
        </div>
      </div>
    </div>
  );
}

TopLayer.propTypes = {};

export default TopLayer;
