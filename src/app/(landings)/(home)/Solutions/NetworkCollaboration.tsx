import CheckLight from "@assets/icons/check-light.svg";
import Image from "next/image";
import Link from "next/link";
import { v4 } from "uuid";

function NetworkCollaboration({
  features,
  src = "/img/network.png",
}: {
  features: { title: string; description: React.ReactNode }[];
  src?: string;
}) {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between lg:space-x-4 text-white my-10">
      <div data-aos="fade-right" className="w-full lg:max-w-[610px] ">
        <ul className="text-white space-y-16 mb-12">
          {features?.map((feature) => (
            <li key={v4()} className="">
              <div className="flex items-center space-x-2 mb-2">
                <CheckLight className="flex-shrink-0" />
                <h3>{feature.title}</h3>
              </div>
              <p className="text-base font-light">{feature.description}</p>
            </li>
          ))}
        </ul>
        <Link
          href="/contact-us"
          className="btn bg-primary text-white text-sm font-medium border-primary w-full max-w-[161px] h-[40px] min-h-[41px]"
        >
          Get Started
        </Link>
      </div>

      <div
        data-aos="fade-left"
        className="relative w-full lg:w-1/2 lg:max-w-[524px] h-[400px] mb-6 lg:mb-0 z-0 after:top-6  after:left-6 after:h-full after:w-full after:bg-[#E944441A] after:block after:absolute after:rounded-[14px] after:-z-10"
      >
        <Image
          fill={true}
          src={src}
          className="z-1 rounded-[14px] object-cover object-center"
          alt="Network Services"
        />
      </div>
    </div>
  );
}

NetworkCollaboration.propTypes = {};

export default NetworkCollaboration;
