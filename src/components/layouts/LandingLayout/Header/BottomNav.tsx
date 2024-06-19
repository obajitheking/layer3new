"use client";
import { bottomItems } from "@/common/constants/nav.constants";
import { v4 } from "uuid";
import { NavItem } from "./NavItem";
import { usePathname } from "next/navigation";
import cx from "classnames";

const allowedPaths = [
  "/",
  "/enterprise",
  "/solutions/network",
  "/solutions/cloud",
  "/solutions/cybersecurity",
  "/solutions/access",
  "/services/managed-services",
  "/services/professional-services",
];

function BottomNav() {
  const pathname = usePathname();
  return (
    <div
      data-aos="zoom-in"
      className={cx(
        " text-[#FFFFFF99] border-t border-[#FFFFFF14] z-0",
        !allowedPaths.includes(pathname) ? "hidden" : "hidden sm:block "
      )}
    >
      <div className="container flex justify-center min-h-[53px] ">
        <ul className="menu menu-horizontal px-1 font-light">
          {bottomItems.map((item, index) => (
            <NavItem {...item} key={v4()} />
          ))}
        </ul>
      </div>
    </div>
  );
}

BottomNav.propTypes = {};

export default BottomNav;
