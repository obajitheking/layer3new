import Link from "next/link";
import SearchIcon from "@assets/icons/search-line.svg";
import { careers } from "./data";
import { v4 } from "uuid";

function CareerPage() {
  return (
    <>
      <section className="bg-brand-dark flex items-center">
        <div className="w-full max-w-[780px] p-0 sm:p-[70px]">
          <div className="container">
            <p className="text-2xl text-[#010101CC] font-[300] mb-[10px]">
              Join our Team
            </p>
            <h1 className="capitalize text-[32px] md:text-[50px] md:leading-[62.5px] font-medium text-white">
              Our people are people people
            </h1>
            <p className="text-white text-opacity-80 text-xl my-[30px]">
              We&apos;re a mission-driven team with a passion for making career
              resources more accessible so everyone has what they need to
              succeed in work and life
            </p>
            <Link href="/careers/#positions" className="filled rounded">
              Browse Open Positions
            </Link>
          </div>
        </div>
        <div className="flex-grow hidden md:block min-h-screen bg-[url(/img/careers.png)] bg-cover bg-no-repeat"></div>
      </section>
      <section id="positions" className="bg-brand-dark-2 py-[100px]">
        <div className="container">
          <h2 className="text-[34px] text-white font-[500] text-center mb-10">
            Open Positions
          </h2>
          <div className="flex space-x-4 sm:space-x-[143px] items-center mb-[30px]">
            <select
              defaultValue={""}
              className="bg-transparent w-full max-w-[295px] font-[300] focus:outline-none border-opacity-50 border-white border-b text-white pb-[10px] px-0"
            >
              <option value="" disabled>
                Select team
              </option>
            </select>
            <div className="relative flex-grow">
              <span className="absolute left-0 text-white text-opacity-50">
                <SearchIcon />
              </span>
              <input
                type="search"
                className="focus:outline-none bg-transparent border-b border-white border-opacity-50 w-full text-white font-[300] pb-[10px] pl-7 pr-4"
              />
            </div>
          </div>
          <ul className="space-y-8">
            {Object.keys(careers).map((career) => (
              <li key={career}>
                <h4 className="text-[32px] text-white leading-10 capitalize">
                  {career}
                </h4>
                <ul className="border-y my-4 divide-y divide-white divide-opacity-50 border-white border-opacity-50">
                  {careers[career].map((position) => (
                    <li
                      key={v4()}
                      className="py-4 text-white font-[300] text-sm space-x-2 sm:text-xl flex justify-between items-center"
                    >
                      <span>{position.role}</span>
                      <span className="text-right">{position.location}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default CareerPage;
