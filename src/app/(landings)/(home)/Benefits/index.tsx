"use client";
import TopLayer from "@/components/Chart/TopLayer";
import LandingPageChart from "../../../../components/Chart/LandingChart";
import { benefits } from "../data";
import CheckLight from "@assets/icons/check-light.svg";
import { v4 } from "uuid";
import Link from "next/link";

const Benefits = () => {
  return (
    <section className="py-[50px] bg-brand-dark">
      <div className="container">
        <div className="flex flex-col-reverse  lg:flex-row justify-between items-center text-white mt-10">
          <div className="flex justify-between w-full lg:max-w-[462px] mt-6 lg:mt-0">
            <div className="flex flex-col gap-3">
              <h4
                data-aos="fade-right"
                className="font-bold capitalize text-[40px] md:text-[50px] md:leading-[65px] mb-3"
              >
                We deliver peace of Mind!
              </h4>
              <div data-aos="fade-right" className="space-y-6">
                {benefits.map((useCase) => (
                  <div key={v4()} className="w-full max-w-[471px]">
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

              <Link
                href="/enterprise#pricing"
                data-aos="fade-right"
                className="btn min-h-[50px] text-sm h-[50px] text-white font-medium bg-primary border-primary w-full max-w-[270px] rounded mt-10"
              >
                Buy Enterprise Plan
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="w-full lg:max-w-[600px] relative min-h-[410px]"
          >
            <div className="relative sm:-mb-14 z-50 right-0 flex sm:justify-end">
              <TopLayer />
            </div>
            <div className="max-w-[600px] lg:max-w-[424px] p-[30px] border border-white border-opacity-10">
              <LandingPageChart
                data={[
                  {
                    time: 20,
                    bandwidth: 30,
                  },
                  {
                    time: 100,
                    bandwidth: 30,
                  },
                  {
                    time: 80,
                    bandwidth: 30,
                  },
                  {
                    time: 60,
                    bandwidth: 30,
                  },
                  {
                    time: 70,
                    bandwidth: 60,
                  },
                  {
                    time: 50,
                    bandwidth: 60,
                  },
                  {
                    time: 90,
                    bandwidth: 30,
                  },
                  {
                    time: 40,
                    bandwidth: 10,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
