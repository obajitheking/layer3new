import Image from "next/image";
import Link from "next/link";
import React from "react";

function Cybersecurity() {
  return (
    <>
      <section className="bg-brand-dark  py-10">
        <div className="hero-section container mx-auto flex flex-row flex-wrap gap-10 justify-between items-center">
          <div className="content w-full max-w-[644px] flex flex-col gap-[10px] flex-1">
            <h6
              data-aos="fade-right"
              className="text-sm flex items-center justify-center p-2 min-h-[34px] w-full max-w-[127px] rounded-[30px] font-medium  text-white border border-white border-opacity-40 bg-white bg-opacity-10"
            >
              Cyber Security
            </h6>
            <div data-aos="fade-right" className="cta-text flex flex-col gap-6">
              <h2 className=" capitalize text-[50px]  font-medium md:leading-[75px] text-white">
                Unwavering Cybersecurity Protection
              </h2>
              <p
                data-aos="fade-right"
                className="caption text-base font-light text-white mb-6"
              >
                Safeguard your data and assets from ever-evolving cyber threats.
                Layer3 offers a comprehensive suite of cybersecurity services,
                including threat detection, vulnerability management, and
                incident response, to keep your business secure.
              </p>
              <Link
                data-aos="fade-right"
                className="filled w-full max-w-[270px]"
                href="/contact-us"
              >
                Talk to an expert
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-down"
            className="max-w-[434px] h-[434px] w-full lg:flex-1 relative"
          >
            <Image
              fill={true}
              src="/img/cybersec.png"
              alt="Cysbersecurity"
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>
      <section className="bg-brand-dark py-10">
        <div className="container">
          <div className="h-[1px] bg-white bg-opacity-20 my-10"></div>
          <h3
            data-aos="fade-down"
            className="font-semibold text-white text-2xl mb-6 "
          >
            Redesign for resilience
          </h3>
          <ul className=" list-disc list-inside space-y-4 text-white ">
            <li data-aos="fade-right">
              <span className="text-base font-bold">Prevent</span>
              <p className="mt-3 text-base font-light">
                Preparation is the antidote for anxiety. Our preventative cyber
                security solutions mitigate risk and nix disaster before it
                starts.
              </p>
            </li>

            <li data-aos="fade-right">
              <span className="text-base font-bold">Detect</span>
              <p className="mt-3 text-base font-light">
                Our security operations center continuously monitors and refines
                your security position while preventing, detecting, and
                responding to cyberthreats in real-time.{" "}
              </p>
            </li>

            <li data-aos="fade-right">
              <span className="text-base font-bold">Recover</span>
              <p className="mt-3 text-base font-light">
                We align strategy with action to ensure technology works in
                harmony with your team. You overcome challenges and recover in
                minutes. Not hours or days.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Cybersecurity;
