import Image from "next/image";
import Link from "next/link";
import React from "react";

function AccessSolutions() {
  return (
    <>
      <section className="bg-brand-dark  py-10">
        <div className="hero-section container mx-auto flex flex-col justify-center items-center">
          <div className="content max-w-[645px] w-full text-center flex flex-col justify-center items-center gap-[10px]">
            <h6 data-aos="fade-down" className="text-sm flex items-center justify-center p-2 min-h-[34px] w-full max-w-[150px] rounded-[30px] font-medium  text-white border border-white border-opacity-40 bg-white bg-opacity-10">
              Access Solutions
            </h6>
            <div data-aos="fade-down" className="cta-text justify-center items-center flex flex-col gap-6">
              <h2 className=" capitalize text-[50px]  font-medium md:leading-[75px] text-white">
                Benefit from high-speed internet tailored to your needs.
              </h2>
              <p data-aos="fade-down" className="caption text-base font-light text-white mb-6">
                Enjoy seamless connectivity with Layer3&apos;s Access Solutions.
                Benefit from high-speed internet tailored to your needs.
              </p>
              <Link data-aos="fade-down" className="filled w-full  max-w-[270px]" href="/contact-us">
                Talk to an expert
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-brand-dark py-10">
        <div className="container">
          <div className="h-[1px] bg-white bg-opacity-20 my-10"></div>

          <div className="flex flex-row flex-wrap gap-10 justify-between items-center">
            <div  className=" w-full max-w-[644px] flex flex-col gap-[10px] flex-1">
              <div className="flex flex-col">
                <h2 data-aos="fade-right" className=" capitalize text-[30px]  font-bold mb-6 text-white">
                  Why should you choose Layer3Cloud?
                </h2>
                <ul className="list-disc leading-8 text-white">
                  <li data-aos="fade-right">Dynamic scalability at a moment&apos;s notice</li>
                  <li data-aos="fade-right">99.9% availability</li>
                  <li data-aos="fade-right">Multiple availability zones in Nigeria</li>
                  <li data-aos="fade-right">Self-service and 24/7 world-class support</li>
                  <li data-aos="fade-right">
                    Advanced networking and security add-ons: Firewall, VPN,
                    IPSec, SSL
                  </li>
                  <li data-aos="fade-right">ISO 27001 and ISO 27017 cloud security certified</li>
                  <li data-aos="fade-right">PCI DSS certified</li>
                </ul>
              </div>
            </div>
            <div data-aos="fade-down" className="max-w-[434px] h-[434px] w-full lg:flex-1 relative">
              <Image
                fill={true}
                src="/img/cl-1.png"
                alt="cloud"
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AccessSolutions;
