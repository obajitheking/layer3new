import Image from "next/image";
import Link from "next/link";
import React from "react";
import DbIcon from "@assets/icons/db.svg";

function Managed() {
  return (
    <>
      <section className="bg-brand-dark  py-10">
        <div className="hero-section container mx-auto flex flex-row flex-wrap gap-10 justify-between items-center">
          <div className="content w-full max-w-[645px] flex flex-col gap-[10px] flex-1">
            <h6 data-aos="fade-right" className="text-sm flex items-center justify-center p-2 min-h-[34px] w-full max-w-[142px] rounded-[30px] font-medium  text-white border border-white border-opacity-40 bg-white bg-opacity-10">
              Managed servicess
            </h6>
            <div className="cta-text flex flex-col gap-6">
              <h2 data-aos="fade-right" className=" capitalize text-[50px]  font-medium md:leading-[62.5px] text-white">
                Effortless IT Management
              </h2>
              <p data-aos="fade-right" className="caption text-base font-light text-white mb-6">
                Create new revenue streams, develop smarter ways of working or
                reimagine customer experiences, we leverage managed services
                through our relationships with today&apos;s leading technology
                companies to understand your desired business outcome and
                fast-forward your journey to get there.
              </p>
              <Link data-aos="fade-right" className="filled w-full max-w-[270px]" href="/contact-us">
                Talk to an expert
              </Link>
            </div>
          </div>
          <div data-aos="fade-down" className="max-w-[434px] h-[434px] w-full lg:flex-1 relative">
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
          <div className="bg-brand-dark-2 mb-10 rounded-lg p-3 lg:p-10 gap-3 lg:gap-10 flex flex-col lg:flex-row items-center">
            <div data-aos="fade-right" className="w-full lg:max-w-[628px]  rounded-lg py-5 px-[30px] min-h-[237px] bg-white bg-opacity-10">
              <h3 className="text-white mb-5 flex items-center font-semibold text-xl gap-[10px]">
                <DbIcon /> Network-as-a-Service
              </h3>
              <p className="text-base font-light text-white">
                Simplify your network management with Layer3&apos;s
                Network-as-a-Service offering. Let us handle the complexities of
                network infrastructure, allowing you to focus on your core
                business activities while ensuring reliability and security.
                Layer3 will take care of network design, deployment, and ongoing
                maintenance, allowing you to focus on your core business.
              </p>
            </div>
            <div data-aos="fade-left" className="w-full lg:max-w-[492px] rounded-lg py-5 px-[30px] min-h-[237px] bg-white bg-opacity-10">
              <h3 className="text-white mb-5 flex items-center font-semibold text-xl gap-[10px]">
                <DbIcon />
                Co-location
              </h3>
              <p className="text-base font-light text-white">
                Maximize the efficiency of your IT infrastructure with
                Layer3&apos;s Co-location services. Benefit from secure and
                scalable data center facilities, reducing operational costs and
                enhancing business continuity.
              </p>
            </div>
          </div>
          <h3 data-aos="fade" className="font-bold text-white text-2xl mb-6 w-full">
            Networking: A Smart Business has an Intelligent Network
          </h3>
          <p data-aos="fade" className="font-light text-white text-base leading-[32px] mb-10">
            Today&apos;s most connected experiences demand the most powerful,
            hybrid environments. Layer3 helps clients design and build flexible,
            secure, software-defined networks that connect people to people,
            people to technology and technology to technology.
          </p>

          <h3 data-aos="fade-right" className="font-bold text-2xl text-white mb-6">
            Network Features
          </h3>

          <ul className=" list-disc list-inside space-y-6 text-white ">
            <li data-aos="fade-right">
              <span className="text-xl font-bold">WIFI driven by AI</span>
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
              <span className="text-xl font-bold">
                Data Center & Network Automation
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
          </ul>
        </div>
      </section>
    </>
  );
}

export default Managed;
