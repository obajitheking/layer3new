import Image from "next/image";
import React from "react";

export interface ITestimonialCardProps {
  imgSrc: string;
  title: string;
  testimony: string;
}

function TestimonialCard({ imgSrc, title, testimony }: ITestimonialCardProps) {
  return (
    <div data-aos="fade" className="w-full max-w-[604px] text-white">
      <div className="relative w-full h-[325px]">
        <Image fill src={imgSrc} alt="icon" className="object-cover" />
      </div>
      <div className="py-3">
        <h3 className="mb-3  text-2xl font-semibold">{title}</h3>
        <p className="text-base font-[300] text-[#F3F4F2]">{testimony}</p>
      </div>
    </div>
  );
}

TestimonialCard.propTypes = {};

export default TestimonialCard;
