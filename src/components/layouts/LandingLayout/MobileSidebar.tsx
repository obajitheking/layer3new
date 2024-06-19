import {
  bottomItems,
  leftItems,
  rightItems,
} from "@/common/constants/nav.constants";
import ChevRt from "@assets/icons/chev-rt.svg";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { v4 } from "uuid";
import { INavItem } from "./Header/NavItem";

function MobileSidebar({ onClose = () => {} }: { onClose?: () => void }) {
  return (
    <div className={`drawer-side z-50`}>
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <div className="bg-brand-dark-2 w-80 min-h-full p-4">
        <div className="text-white flex justify-end mb-8">
          <label htmlFor="my-drawer-3" aria-label="close sidebar">
            <IoClose />
          </label>
        </div>
        <ul className="menu text-white p-0 space-y-6 mb-6">
          {leftItems.map((item, index) => (
            <li key={v4()}>
              <Link href={item?.link} className="px-0" onClick={onClose}>
                <span>{item.icon}</span>
                <span>{item.label}</span>
                <ChevRt />
              </Link>
            </li>
          ))}
        </ul>
        <ul className="menu text-white p-0 space-y-4 mb-12">
          {rightItems.map((item, index) => (
            <li key={v4()}>
              <CollapsibleNavItem item={item} onClick={onClose} />
            </li>
          ))}
        </ul>
        <ul className="menu text-white p-0 space-y-4 mb-12">
          {bottomItems.map((item, index) => (
            <li key={v4()}>
              <CollapsibleNavItem item={item} onClick={onClose} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CollapsibleNavItem({
  item,
  onClick = () => {},
}: {
  item: INavItem;
  onClick?: () => void;
}) {
  if (item.items) {
    return (
      <details>
        <summary>{item.label}</summary>
        <ul className="p-2 rounded-t-none">
          {item.items.map((child, index) => (
            <li key={v4()}>
              <CollapsibleNavItem item={child} {...child} />
            </li>
          ))}
        </ul>
      </details>
    );
  }
  return (
    <span className="flex items-center justify-between">
      <Link href={item.link} onClick={onClick}>
        {item.label}
      </Link>
    </span>
  );
}

MobileSidebar.propTypes = {};

export default MobileSidebar;
