import { MenuItemType } from "antd/es/menu/hooks/useItems";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaUserShield, FaUsers } from "react-icons/fa6";
import { IoBarChartSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";

export const menuItems: MenuItemType[] = [
  {
    key: "/app",
    label: "Dashboard",
    icon: <MdDashboard className="sidebar-icon" />,
  },
  {
    key: "/app/users",
    label: "Users",
    icon: <FaUsers className="sidebar-icon" />,
  },
  {
    key: "/app/verification-requests",
    label: "Verification Requests",
    icon: <FaUserShield className="sidebar-icon" />,
  },
  {
    key: "/app/investment-plans",
    label: "Investment Plans",
    icon: <IoBarChartSharp className="sidebar-icon" />,
  },
  {
    key: "/app/withdrawal-requests",
    label: "Withdrawals",
    icon: <BiMoneyWithdraw className="sidebar-icon" />,
  },
];
