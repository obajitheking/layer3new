"use client";
import { Popover } from "antd";
import cx from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiChevronDown } from "react-icons/bi";

export interface INavItem {
  label: string;
  link: string;
  icon?: React.ReactNode;
  items?: INavItem[];
  toggleClassName?: string;
  itemClassName?: string;
  popup?: boolean;
  popupContent?: React.ReactNode;
}

export const NavItem: React.FC<INavItem> = ({
  label,
  link,
  items,
  icon,
  toggleClassName,
  itemClassName,
  popup,
  popupContent,
}) => {
  const pathname = usePathname();

  if (popup) {
    return (
      <li>
        <Popover
          arrow={false}
          overlayInnerStyle={{ background: "#131212", padding: "24px" }}
          content={popupContent}
        >
          <span className="flex items-center">
            {label} <BiChevronDown className="h-6 w-6" />
          </span>
        </Popover>
      </li>
    );
  }

  if (items) {
    return (
      <li className={cx("z-1",toggleClassName)}>
        <details>
          <summary className={"hover:text-primary"}>{label}</summary>
          <ul className="p-2 bg-brand-dark-2 rounded-lg z-[100] font-light w-[200px]">
            {items.map((child, index) => (
              <NavItem key={index} {...child} />
            ))}
          </ul>
        </details>
      </li>
    );
  }

  return (
    <li>
      <Link
        className={
          itemClassName ||
          cx(
            "flex rounded-xl  focus:text-primary focus:bg-white focus:bg-opacity-20 items-center hover:text-primary",
            pathname === link ? "bg-primary text-white" : ""
          )
        }
        href={link}
      >
        {icon && <span>{icon}</span>}
        {label}
      </Link>
    </li>
  );
};
