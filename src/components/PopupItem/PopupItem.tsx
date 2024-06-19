import Link from "next/link";
import React from "react";

function PopupItem({
  title,
  description,
  icon,
  href,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
}) {
  return (
    <Link href={href || "#"}>
      <div className="hover:bg-black hover:bg-opacity-50 p-4 cursor-pointer rounded-lg">
        <div className="text-white flex items-center space-x-3 mb-3">
          <span>{icon}</span>
          <h4 className="text-base font-normal">{title}</h4>
        </div>
        <p className="font-light text-sm text-white text-opacity-80">
          {description}
        </p>
      </div>
    </Link>
  );
}

PopupItem.propTypes = {};

export default PopupItem;
