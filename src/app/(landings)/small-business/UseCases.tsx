"use client";
import React, { useState } from "react";
import CheckLight from "@assets/icons/check-light.svg";
import Image from "next/image";
import { v4 } from "uuid";
import { use_cases } from "../common/data";

function UseCases() {
  const [active, setActive] = useState("Restaurants");
  return (
    <section className="py-[100px] bg-brand-dark-2">
      <div className="container">
        <div className="space-y-6">
          <h3 data-aos="fade" className="header-text">
            See how different small business use Layer3
          </h3>
          <div className="flex gap-5 flex-wrap justify-start items-start">
            {Object.keys(use_cases).map((key) => (
              <button
              data-aos="slide-left"
                key={v4()}
                className="flex justify-center items-center py-2 px-5 rounded-[20px] border border-white border-opacity-60 text-white"
              >
                {key}
              </button>
            ))}
          </div>
        </div>
        <div className="my-10 flex flex-col-reverse lg:flex-row lg:space-x-40">
          <div className="space-y-6">
            {use_cases[active].map((useCase) => (
              <div data-aos="flip-down" key={v4()} className="w-full max-w-[471px]">
                <div className="flex items-center space-x-2 mb-[10px]">
                  <CheckLight />
                  <p className="text-base font-medium text-white">
                    {useCase?.title}
                  </p>
                </div>
                <p className="text-sm font-[300] text-white text-opacity-70">
                  {useCase?.description}
                </p>
              </div>
            ))}
          </div>
          <div data-aos="fade-left" className="relative w-full mb-10 lg:mb-0 lg:max-w-[523px] h-[400px] sm:h-[596px]">
            <Image
              fill
              sizes="100vw"
              src="/img/use-case.png"
              alt="An image showing ports of wires"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

UseCases.propTypes = {};

export default UseCases;
