import React from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowRight from "@assets/icons/arrow-red-right.svg";
import SkeletonImage from "antd/es/skeleton/Image";
import { Skeleton } from "antd";
import { useGetFeaturedMediaQuery } from "@/redux/services/blog.api";

export interface CaseStudyCardProps {
  title: string;
  media_id?: number;
  image?: string;
  details: string;
  href: string;
}

const CaseStudyCard = ({
  title,
  media_id,
  image = "",
  details,
  href,
}: CaseStudyCardProps) => {
  const { isLoading, data = { source_url: "" } } =
    useGetFeaturedMediaQuery(media_id);

  return (
    <div
      data-aos="flip-down"
      className="flex flex-col min-h-[428px] gap-2 border border-[#F3F4F2] p-2 hover:shadow-lg transition-all cursor-pointer"
    >
      <div className="w-full relative h-52">
        {data.source_url || image ? (
          <Image
            fill
            src={data?.source_url || image}
            alt="Case Study Image"
            className="object-cover"
          />
        ) : (
          <SkeletonImage active={isLoading} className="w-full h-full" />
        )}
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="text-xl">{title}</h4>
        <div
          className="text-brand-dark/50 font-light h-[90px] clamped"
          dangerouslySetInnerHTML={{ __html: details }}
        />
        <Link href={href} className="flex items-center gap-3 text-primary">
          Read Case Study <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export const CaseStudyCardLoading = () => {
  return (
    <div
      data-aos="flip-down"
      className="flex flex-col gap-2 border border-[#F3F4F2] p-2 hover:shadow-lg transition-all cursor-pointer"
    >
      <div className="w-full relative h-52">
        <SkeletonImage active className="w-full h-full" />
      </div>
      <div className="flex flex-col gap-3">
        <Skeleton paragraph={{ rows: 0 }} active>
          <h4 className="text-xl">Layer3</h4>
        </Skeleton>
        <Skeleton paragraph={{ rows: 1 }} active />
        <Skeleton.Button active className="w-full" />
      </div>
    </div>
  );
};

export default CaseStudyCard;
