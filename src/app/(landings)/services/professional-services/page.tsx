import Image from "next/image";
import Link from "next/link";
import React from "react";

function Professional() {
  return (
    <>
      <section className="bg-brand-dark  py-10">
        <div className="hero-section container mx-auto flex flex-row flex-wrap gap-10 justify-between items-center">
          <div className="content w-full max-w-[644px] flex flex-col gap-[10px] flex-1">
            <h6
              data-aos="fade-right"
              className="text-sm flex items-center justify-center p-2 min-h-[34px] w-full max-w-[172px] rounded-[30px] font-medium  text-white border border-white border-opacity-40 bg-white bg-opacity-10"
            >
              Professional Services
            </h6>
            <div className="cta-text flex flex-col gap-6">
              <h2
                data-aos="fade-right"
                className=" capitalize text-[50px]  font-medium md:leading-[75px] text-white"
              >
                Expert Guidance at Every Step
              </h2>
              <p
                data-aos="fade-right"
                className="caption text-base font-light text-white mb-6"
              >
                We combine our people-first approach with our technology-driven
                expertise to design innovative solutions that meet and exceed
                your business goals.
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
              src="/img/managed-services.png"
              alt="lady on a computer"
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
            data-aos="fade"
            className="font-light text-white text-2xl mb-6 w-full max-w-[980px]"
          >
            <span className=" text-white text-opacity-70">
              No matter the challenge, we&apos;re passionate about
            </span>{" "}
            uncovering obstacles and maximizing the value of business for our
            customers through our professional services.
          </h3>
          <ul className=" list-disc list-inside space-y-6 text-white ">
            <li data-aos="fade-right">
              <span className="text-2xl font-medium">
                Technology Consulting
              </span>
              <p className="mt-3 text-base font-light">
                Gain strategic insights and guidance with Layer3&apos;s
                Technology Consulting services. Leverage our expertise to align
                technology initiatives with your business goals and drive
                innovation. Our experienced consultants provide strategic
                guidance to help you identify the right IT solutions for your
                business goals and budget.
              </p>
            </li>

            <li data-aos="fade-right">
              <span className="text-2xl font-medium">
                Design and Integration
              </span>
              <p className="mt-3 text-base font-light">
                Bring your vision to life with Layer3&apos;s Design and
                Integration services. From network architecture to system
                implementation, we deliver customized solutions that meet your
                specific requirements. Seamlessly integrate new technologies
                with your existing infrastructure to ensure optimal performance
                and efficient operations.
              </p>
            </li>

            <li data-aos="fade-right">
              <span className="text-2xl font-medium">Support Services</span>
              <p className="mt-3 text-base font-light">
                Receive reliable support and maintenance with Layer3&apos;s
                Support Services. Our dedicated team is available
                round-the-clock to address your technical issues promptly,
                ensuring minimal downtime and maximum productivity.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Professional;
