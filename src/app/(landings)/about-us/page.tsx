import Continuous from "@assets/icons/continous-improvement.svg";
import Customer from "@assets/icons/customer-focus.svg";
import Impact from "@assets/icons/impact.svg";
import Integrity from "@assets/icons/integrity.svg";
import Leadership from "@assets/icons/leadership.svg";
import Respect from "@assets/icons/respect.svg";
import { Col, Row } from "antd";
import Image from "next/image";
import { v4 } from "uuid";
import TeamCard from "./TeamCard";
import ValueBox from "./ValueBox";
import { ceo, teams } from "./teams";
import Link from "next/link";

function AboutUs() {
  return (
    <>
      <section className="bg-brand-dark  py-10">
        <div className="hero-section container mx-auto flex flex-row flex-wrap gap-10 justify-between items-center">
          <div className="content flex flex-col gap-[10px] flex-1">
            <h6 className="text-2xl font-light leading-[30px] text-brand-red">
              About layer3
            </h6>
            <div className="cta-text flex flex-col gap-6">
              <h2 className=" capitalize text-[40px] md:text-5xl font-bold md:leading-[62.5px] text-white">
                We power trust between businesses
              </h2>
              <p className="caption text-base font-light text-white">
                We&apos;re a mission-driven team with a passion for making
                career resources more accessible so everyone has what they need
                to succeed in work and life
              </p>
            </div>
          </div>
          <div className="max-w-[34.5rem] h-[467px] w-full lg:flex-1 relative">
            <Image
              fill={true}
              src="/img/about-us-hero.png"
              alt="Three people discussing happily"
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>
      <section className="bg-brand-dark py-[6.25rem]">
        <div className="overview container mx-auto flex flex-col gap-36">
          <div className="about flex flex-col gap-4">
            <h3 className="text-2xl font-medium text-white">
              Company Overview
            </h3>
            <p className="text-base leading-9 font-light text-white">
              At Layer3, we aim to remain at the forefront of our clients&apos;
              business transformation ambitions. We combine our knowledge of
              world-class technology solutions, in addition to our partnership
              with some of the global technology providers, to deliver
              exceptional value for our clients.Our solutions cut across all
              sectors and include the innovation of the data center, software,
              server & storage systems, mobile device management, security &
              network infrastructure solutions and access solutions including
              broadband and VPN services.The success of our customers is always
              paramount in our minds and our culture drives us to work closely
              with them to truly understand their business and ICT needs. We
              continuously build strategic partnerships with global technology
              leaders that enable us to deploy solutions that minimize risks,
              maximize flexibility and optimize the use of capital with results
              that exceed our customers&apos; expectations
            </p>
          </div>
          <div className="numbers flex flex-col lg:flex-row border-y-[1px] border-y-white border-solid border-opacity-40 rounded py-5 text-brand-red justify-between items-center flex-wrap gap-16">
            <h6 className="text-2xl leading-8 lg:max-w-80 font-medium justify-around flex-1">
              We&apos;ve created a real and lasting impact
            </h6>
            <div className="number-list flex flex-row flex-wrap lg:flex-nowrap justify-between lg:max-w-full flex-1 gap-8 items-start">
              <div className="number flex flex-col gap-[10px] ">
                <h1 className="text-[52px] font-medium">10+</h1>
                <p className="text-sm">Years in business</p>
              </div>
              <div className="number flex flex-col gap-[10px] ">
                <h1 className="text-[52px] font-medium">2</h1>
                <p className="text-sm">Cities</p>
              </div>
              <div className="number flex flex-col gap-[10px] ">
                <h1 className="text-[52px] font-medium">35+</h1>
                <p className="text-sm">Integration Partners</p>
              </div>
              <div className="number flex flex-col gap-[10px] ">
                <h1 className="text-[52px] font-medium">1M</h1>
                <p className="text-sm">Users</p>
              </div>
            </div>
          </div>
          <div className="aim flex flex-col md:flex-row  md:justify-between space-y-10 md:space-y-0 md:space-x-10 flex-wrap">
            <div className="story flex flex-col gap-4 flex-1 w-full max-w-[547px]">
              <h3 className="header-text text-2xl font-medium text-white">
                Our Story
              </h3>
              <p className="text-xl font-light leading-[25px] text-white">
                The success of our customers is always paramount in our minds
                and our culture drives us to work closely with them to truly
                understand their business and ICT needs.
              </p>
            </div>
            <div className="mission flex flex-col gap-4 flex-1 w-full max-w-[547px]">
              <h3 className="header-text text-2xl text-white font-medium">
                Our Mission
              </h3>
              <p className="text-xl font-light leading-[25px] text-white">
                To provide technology solutions that make businesses and
                individuals excel.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-brand-dark-2 py-[6.25rem]">
        <div className="values container flex flex-col justify-center gap-12">
          <div className="header flex flex-col gap-2 text-center ">
            <h3 className="header-text  text-white font-medium">Our values</h3>
            <p className="text-xl font-light leading-[25px] text-white">
              We love these principles. We live by these principles.
            </p>
          </div>
          <div className="values-list flex flex-col gap-12">
            <div className="row flex flex-col md:flex-row md:justify-between space-y-10 md:space-x-10 pb-5 border-white border-solid border-b-[1px] border-opacity-30">
              <ValueBox icon={<Respect />} title="Respect For People">
                We value our staff, families, clients and vendors, who are
                critical to our success. We believe that people at all levels
                are the essence of an organization and their full involvement
                enables their abilities to be used for our benefit.
              </ValueBox>

              <ValueBox icon={<Integrity />} title="Integrity">
                We value integrity, in an environment of mutual trust and
                respect, including fairness, teamwork, tolerance, family and
                community, in our process of providing added value to our
                customers.
              </ValueBox>
            </div>
            <div className="row flex flex-col md:flex-row md:justify-between space-y-10 md:space-x-10 pb-5 border-white border-solid border-b-[1px] border-opacity-30 flex-wrap">
              <ValueBox icon={<Continuous />} title="Continuous Improvement">
                We believe that continuous improvement of our overall
                performance should be our permanent objective.
              </ValueBox>
              <ValueBox icon={<Customer />} title="Customer Focus">
                We Understand Customer needs and exceed it.
              </ValueBox>
            </div>
            <div className="row flex flex-col md:flex-row md:justify-between space-y-10 md:space-x-56  flex-wrap">
              <ValueBox icon={<Leadership />} title="Leadership">
                Creating direction, staff involvement, Proactiveness and sense
                of urgency.
              </ValueBox>
              <ValueBox icon={<Impact />} title="Impact">
                We Leave everything better than we met them.
              </ValueBox>
            </div>
          </div>
        </div>
      </section>
      <section id="teams" className="bg-brand-dark py-[6.25rem]">
        <div className="leadership container flex flex-col justify-center gap-6">
          <h3 className="header-text font-medium text-center">
            Our Leadership
          </h3>
          <Row gutter={[12, 30]} justify={"center"} className="">
            <Col key={v4()} xs={24} md={12} lg={8}>
              <TeamCard {...ceo} />
            </Col>
          </Row>

          <Row gutter={[12, 30]} justify={"center"} className="">
            {teams?.map((team) => (
              <Col key={v4()} xs={24} md={12} lg={8}>
                <TeamCard {...team} />
              </Col>
            ))}
          </Row>
        </div>
      </section>
      <section className="bg-brand-dark py-[6.25rem]">
        <div className="careers container flex flex-col-reverse lg:flex-row gap-20">
          <div className="left flex flex-col gap-10 lg:max-w-[546px]">
            <div className="content flex flex-col gap-6 w-full ">
              <h3 className="header-text font-medium">
                Explore job opportunities at Layer3
              </h3>
              <p className="text-lg leading[22.5px] text-white text-opacity-70">
                With a passionate team behind everything that we do, vision is
                to change the way organizations collect and action feedback from
                their people. We&apos;re growing rapidly with plenty of exciting
                new developments and opportunities in play.
              </p>
            </div>
            <Link
              href={"/careers"}
              type="button"
              className="filled w-full max-w-[222px]"
            >
              Browse Open Positions
            </Link>
          </div>
          <div className="right relative mb-10 lg:mb-0 w-full lg:max-w-[683px] h-[342px]">
            <Image
              fill
              src="/img/celebr.png"
              alt="Coworkers celebrating event with balloons"
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        </div>
      </section>
    </>
  );
}

AboutUs.propTypes = {};

export default AboutUs;
