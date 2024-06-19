import { TabsProps } from "antd";
import InqiryIcon from "@assets/icons/inquiries.svg";
import LaptopIcon from "@assets/icons/laptop-mac.svg";
import LocationIcon from "@assets/icons/location-pin.svg";
import SafeCheckIcon from "@assets/icons/safety-check.svg";
import TrainingIcon from "@assets/icons/training.svg";
import PlugIcon from "@assets/icons/plug.svg";
import FaqContent from "./FaqContent";

export const faq_tabs: TabsProps["items"] = [
  {
    icon: <InqiryIcon />,
    key: "1",
    label: "Customer Inquiries",
    children: <FaqContent />,
  },
  {
    icon: <LaptopIcon />,
    key: "2",
    label: "Technology Support",
    children: <FaqContent />,
  },
  {
    icon: <LocationIcon />,
    key: "3",
    label: "Location",
    children: <FaqContent />,
  },
  {
    icon: <SafeCheckIcon />,
    key: "4",
    label: "Quality Control",
    children: <FaqContent />,
  },
  {
    icon: <TrainingIcon />,
    key: "5",
    label: "Service and Training",
    children: <FaqContent />,
  },
  {
    icon: <PlugIcon />,
    key: "6",
    label: "Maintainance",
    children: <FaqContent />,
  },
];
