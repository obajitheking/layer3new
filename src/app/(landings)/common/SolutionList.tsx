import React from "react";
import CheckLight from "@assets/icons/check-light.svg";
import { v4 } from "uuid";

function SolutionList({
  solutions,
}: {
  solutions: { title: string; description: string }[];
}) {
  return (
    <div className="w-full divide-y divide-[#FFFFFF1A]">
      {solutions.map((solution) => (
        <div data-aos="fade-right" key={v4()} className="p-5 bg-[#FFFFFF1A] w-full">
          <div className="flex items-start space-x-4 mb-[18px]">
            <CheckLight className="flex-shrink-0" />
            <h6 className="txt-xl sm:text-2xl text-white font-medium -translate-y-1 sm:-translate-y-2">
              {solution.title}
            </h6>
          </div>
          <p className="text-white text-base sm:text-lg font-[300] max-w-[878px]">
            {solution.description}
          </p>
        </div>
      ))}
    </div>
  );
}

SolutionList.propTypes = {};

export default SolutionList;
