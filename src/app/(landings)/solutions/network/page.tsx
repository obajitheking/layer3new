import Image from "next/image";
import Link from "next/link";
import React from "react";

function NetworkSolutions() {
  return (
    <>
      <section className="bg-brand-dark  py-10">
        <div className="hero-section container mx-auto flex flex-col justify-center items-center">
          <div className="content max-w-[645px] w-full text-center flex flex-col justify-center items-center gap-[10px]">
            <h6 data-aos="fade-down" className="text-sm flex items-center justify-center p-2 min-h-[34px] w-full max-w-[127px] rounded-[30px] font-medium  text-white border border-white border-opacity-40 bg-white bg-opacity-10">
              Networking
            </h6>
            <div className="cta-text justify-center items-center flex flex-col gap-6">
              <h2 data-aos="fade-down" className=" capitalize text-[50px]  font-medium md:leading-[75px] text-white">
                A Smart Business has an intelligent Network
              </h2>
              <p data-aos="fade-down" className="caption text-base font-light text-white mb-6">
                Today&apos;s most connected experiences demand the most
                powerful, hybrid environments.
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
          <h3 data-aos="fade-up" className="w-full mb-10 max-w-[904px] mx-auto font-normal text-center text-xl text-white text-opacity-50">
            Layer3 helps clients design and{" "}
            <span className="text-white text-opacity-100">
              build flexible, secure, software-defined
            </span>{" "}
            networks that connect people to people, people to technology and
            technology to technology.
          </h3>
          
          <div className="flex flex-row-reverse flex-wrap mb-10 gap-10 justify-between items-center">
            <div className=" w-full max-w-[644px] flex flex-col gap-[10px] flex-1">
              <div className="flex flex-col">
                <h2 data-aos="fade-right" className=" capitalize text-[30px]  font-bold mb-6 text-white">
                  WIFI driven by AI
                </h2>
                <p data-aos="fade-right" className="text-base font-light text-white">
                  Experience a revolution in wireless connectivity with our
                  AI-powered WIFI solutions. Harness the power of artificial
                  intelligence to optimize network performance, improve
                  coverage, and enhance user satisfaction. Intelligently
                  optimize your network for seamless signal distribution,
                  eliminate dead zones, and ensure a consistent and secure
                  connection for all your devices.
                </p>
              </div>
            </div>
            <div data-aos="fade-down" className="max-w-[434px] h-[434px] w-full lg:flex-1 relative">
              <Image
                fill={true}
                src="/img/net-1.png"
                alt="Networking"
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="flex flex-row flex-wrap gap-10 justify-between items-center">
            <div className=" w-full max-w-[644px] flex flex-col gap-[10px] flex-1">
              <div className="flex flex-col">
                <h2 data-aos="fade-right" className=" capitalize text-[30px]  font-bold mb-6 text-white">
                  Data Center & Network Automation
                </h2>
                <ul className="list-disc leading-8 text-white">
                  <li data-aos="fade-right">
                    Streamline your operations with Layer3&apos;s Data Center &
                    Network Automation solutions.
                  </li>
                  <li data-aos="fade-right">
                    Automate repetitive tasks and gain real-time insights into
                    your network performance.
                  </li>
                  <li data-aos="fade-right">
                    Layer3&apos;s automation solutions enhance efficiency,
                    minimize human error, and provide greater control over your
                    IT infrastructure.
                  </li>
                </ul>
              </div>
            </div>
            <div data-aos="fade-down" className="max-w-[434px] h-[434px] w-full lg:flex-1 relative">
              <Image
                fill={true}
                src="/img/net-2.png"
                alt="Networking"
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

export default NetworkSolutions;
