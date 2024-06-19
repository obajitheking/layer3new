import Link from "next/link";
import React from "react";

function CompanyPop({
  title,
  href,
}: {
  title: string;
  href?: string;
}) {
  return (
    <Link href={href || "#"}>
    <p className="font-light text-sm text-white text-opacity-80">
          {title}
        </p>
    </Link>
  );
}

CompanyPop.propTypes = {};

export default CompanyPop;
