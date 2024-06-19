import React from "react";
import csx from "classnames";
import Link from "next/link";
import { v4 } from "uuid";

export interface IHeroSlideProps {
  title: string;
  description: string;
  className?: string;
  subTextClassName?: string;
  ctas: {
    label: string;
    href: string;
    className: string;
  }[];
}

export function Hero({
  title,
  description,
  ctas,
  className = "max-w-[794px] mx-auto",
  subTextClassName = "max-w-[634px] mx-auto",
}: IHeroSlideProps) {
  return (
    <div className="container text-center text-neutral-content ">
      <div className={className}>
        <h1
          data-aos="fade-down"
          className="mb-6 capitalize text-2xl sm:text-[52px] sm:leading-[62.4px] text-white font-bold"
        >
          {title}
        </h1>
        <p
          data-aos="fade-down"
          className={csx(
            "mb-5 text-sm  font-light text-white",
            subTextClassName
          )}
        >
          {description}
        </p>
        <div
          data-aos="flip-down"
          className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:max-w-[538px] mx-auto"
        >
          {ctas.map((cta, i) => (
            <Link
              key={v4()}
              href={cta.href}
              className={csx(
                "btn w-full flex-shrink font-medium",
                cta.className
              )}
            >
              {cta.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
