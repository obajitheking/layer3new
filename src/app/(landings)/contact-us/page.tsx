import FacebookIcon from "@assets/icons/facebook-fill.svg";
import LinkedInIcon from "@assets/icons/linkedin-box-fill.svg";
import SupportIcon from "@assets/icons/support.svg";
import Xtwiiter from "@assets/icons/twitter-x-fill.svg";
import { Col, Row } from "antd";
import Link from "next/link";
import Script from "next/script";
import { v4 } from "uuid";
import AddressCard from "./AddressCard";
import ContactCard from "./ContactCard";
import SupportForm from "./SupportForm";
import { contacts } from "./contacts";
import { addresses } from "./data";

function SupportPage() {
  return (
    <>
      <section className="bg-brand-dark py-[100px]">
        <div className="container ">
          <h1 data-aos="fade-down" className="text-white text-[50px] leading-[62.5px] mb-5 font-normal">
            Contact Sales
          </h1>
          <div className="flex gap-10 flex-col lg:flex-row lg:justify-between">
            <SupportForm />
            <div data-aos="fade-down" className=" w-full lg:max-w-[521px] gap-10 mb-10 flex flex-col items-center text-center lg:items-start lg:text-left">
              <div>
                <h3 className="font-medium text-[32px] text-white mb-6">
                  Chat with us
                </h3>
                <p className="text-xl font-light text-white">
                  Don&apos;t want to fill in the form? Use our 24/7 chat located
                  on the bottom right of page
                </p>
              </div>
              <div>
                <h3 className="font-medium text-[32px] text-white mb-6">
                  Give us a call
                </h3>
                <p className="text-lg font-light text-white space-x-2">
                  <Link href="tel:+2349085293734">+2349085293734</Link>
                  <Link href="tel:+2349085293735">+2349085293734</Link>
                </p>
                <p className="text-lg font-light text-white space-x-2">
                  <Link href="tel:+2349085293734">+2349085293734</Link>
                  <Link href="tel:+2349085293734">+2349085293734</Link>
                </p>
              </div>
              <div>
                <h3 className="font-medium text-[32px] text-white mb-6">
                  Send us an email
                </h3>
                <p className="text-xl font-light text-white">
                  Shoot us a message
                </p>
                <Link
                  className="text-xl font-light text-white underline"
                  href="mailto:enquiry@layer3.com.ng"
                >
                  enquiry@layer3.com.ng
                </Link>
              </div>
              <div className="flex space-x-[14px]">
                <Link
                  target="_blank"
                  href="https://twitter.com/Layer3NIGERIA"
                  className="w-12 h-12 bg-white flex items-center justify-center rounded"
                >
                  <Xtwiiter />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.facebook.com/layer3nigeria"
                  className="w-12 h-12 bg-white flex items-center justify-center rounded"
                >
                  <FacebookIcon />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/company/layer3_2"
                  className="w-12 h-12 bg-white flex items-center justify-center rounded"
                >
                  <LinkedInIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-brand-dark py-[100px]">
        <div className="container">
          <Row gutter={[35, 35]}>
            {addresses?.map((address) => (
              <Col key={v4()} xs={24} md={12}>
                <AddressCard {...address} />
              </Col>
            ))}
          </Row>
        </div>
      </section>
      <Script
        type="text/javascript"
        src="https://embedmaps.com/google-maps-authorization/script.js?id=f79daa55406dc0ab079e4864382a99115eaa4ece"
      />
    </>
  );
}

export default SupportPage;
