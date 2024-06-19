"use client";
import Image from "next/image";
import CountUp from "react-countup";
import pciImg from "@assets/img/pci.png";
import iso1 from "@assets/img/iso27001.jpeg";
import iso2 from "@assets/img/iso27017.jpeg";
import Map from "@assets/icons/map.svg";

function Achievements() {
  return (
    <section className="py-[80px] bg-[#131212] text-[#F3F4F2]">
      <div className="container sm:px-[50px] lg:px-4">
        <div className="flex gap-[100px] flex-col lg:flex-row">
          <div className="flex flex-col gap-4 w-full lg:w-1/2">
            <h2
              data-aos="fade-right"
              className="text-[32px] sm:text-[64px] leading-[80px] font-medium"
            >
              The journey so far
            </h2>
            <p
              data-aos="fade-down"
              className="font-light text-sm text-white text-opacity-70 leading-[28px]"
            >
              Explore Layer3&apos;s journey of innovation and excellence. With
              over 18 years of leading the industry, we&apos;ve served a
              multitude of clients with tailored solutions. Join us in
              celebrating our relentless commitment to excellence and
              innovation.
            </p>
            <div data-aos="fade-up" className=" relative h-[215px] mt-[70px]">
              <Map />
            </div>
          </div>
          <div
            data-aos="fade"
            className="flex flex-col divide-y-[0.9px] divide-[#FFFFFF66]"
          >
            <div className="flex flex-col gap-1 pb-[30px]">
              <h4 className="text-[60px] text-center  leading-[75px] hover:text-primary cursor-pointer">
                <CountUp enableScrollSpy duration={3} start={1000} end={2500}>
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
                +
              </h4>
              <p className="text-base text-center font-light text-[#F3F4F2]">
                Customers served.
              </p>
            </div>
            <div className="pb-6">
              <div className="flex justify-between  pb-3">
                <div className="flex flex-col gap-1 items-center">
                  <h4 className="text-[60px] hover:text-primary cursor-pointer">
                    <CountUp enableScrollSpy duration={3} start={10} end={18}>
                      {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>
                    +
                  </h4>
                  <p className="text-base text-center font-light text-[#F3F4F2]">
                    Years of Service
                  </p>
                </div>
                <div className="flex flex-col gap-1 items-center">
                  <h4 className="text-[60px] hover:text-primary cursor-pointer">
                    <CountUp enableScrollSpy duration={3} start={1} end={15}>
                      {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>
                    +
                  </h4>
                  <p className="text-base font-light text-[#F3F4F2]">Awards</p>
                </div>
              </div>
              <div className="text-center py-5">
                <h4 className="text-xl">
                  5 time Cloud Service Provider Award winner
                </h4>
                <p className="text-base font-light">2 times enterprise award winner</p>
              </div>
            </div>
            <div className="flex justify-between pt-5 space-x-4">
              <div className="flex flex-col items-center justify-center gap-2 ">
                <Image
                  width={70}
                  height={70}
                  src={pciImg}
                  alt="PCI DSS Certified"
                />
                <span className="text-white font-light text-base text-opacity-80">
                  PCI DSS Certified
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <Image
                  width={70}
                  height={70}
                  src={iso1}
                  alt="ISO 27001 Certified"
                />
                <span className="text-white font-light text-base text-opacity-80">
                  ISO 27001 Certified
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 ">
                <Image
                  width={70}
                  height={70}
                  src={iso2}
                  alt="ISO27017 Certified"
                />
                <span className="text-white font-light text-base text-opacity-80">
                  ISO 27017 Certified
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
