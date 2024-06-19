import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

export interface IProductCardProps {
  icon: React.ReactNode;
  title?: string;
  caption?: string;
  action_text?: string;
  href?: string;
}

function ProductCard(props: IProductCardProps) {
  return (
    <div className="card flex flex-col justify-start items-start flex-grow py-[30px] px-[20px] rounded border border-pd-border gap-4">
      <div className="glow"></div>
      <span className="block h-10 w-10 text-white">{props.icon}</span>
      <div className="flex flex-col flex-start items-start gap-4">
        <p className="text-xl font-semibold text-white">{props.title}</p>
        <p className="text-sm font-[300] text-white text-opacity-70 leading-7">
          {props.caption}
        </p>
      </div>
      <Link
        href={props?.href || "#"}
        className="brand-white-outlined self-stretch"
      >
        {props.action_text}
      </Link>
    </div>
  );
}

ProductCard.propTypes = {};

export default ProductCard;
