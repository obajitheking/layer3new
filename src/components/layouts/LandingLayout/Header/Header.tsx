import Logo from "@assets/icons/logo.svg";

import {
  bottomItems,
  leftItems,
  rightItems,
} from "@/common/constants/nav.constants";
import { v4 } from "uuid";
import { NavItem } from "./NavItem";
import Bars from "@assets/icons/bars.svg";
import Link from "next/link";
import BottomNav from "./BottomNav";

function Header() {
  return (
    <div className="bg-brand-dark text-white sticky z-50">
      <div data-aos="fade-down" className="container z-10 sticky">
        <div className="navbar px-0 ">
          <div className="flex-1 flex items-center space-x-2 xl:space-x-12">
            <Link href={"/"} className="btn btn-ghost px-1">
              <Logo />
            </Link>
            <ul className="menu menu-horizontal px-[2px] xl:px-1 text-sm xl:text-base font-medium hidden lg:inline-flex">
              {leftItems.map((item, index) => (
                <NavItem {...item} key={v4()} />
              ))}
            </ul>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu font-light menu-horizontal px-1 items-center">
              {rightItems.map((item, index) => (
                <NavItem {...item} key={v4()} />
              ))}
            </ul>
          </div>
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="btn btn-square btn-ghost"
            >
              <Bars />
            </label>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

Header.propTypes = {};

export default Header;
