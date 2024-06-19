import BriefCaseLine from "@assets/icons/briefcase-line.svg";
import Chat from "@assets/icons/chat-line.svg";
import Envel from "@assets/icons/envel.svg";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { IContactCardProps } from "./ContactCard";

export const contacts: IContactCardProps[] = [
  {
    icon: <FaPhone className="h-6 w-6" />,
    title: "Contact Sales",
    description: "Reach out to our sales team on any of these lines",
    content: (
      <div className="text-white">
        <div className="space-x-2">
          <span>+234 9085293734</span>
          <span>+234 9085293734</span>
        </div>
        <div className="space-x-2">
          <span>+234 9085293734</span>
          <span>+234 9085293734</span>
        </div>
      </div>
    ),
  },
  {
    icon: <Envel />,
    title: "For support and enquires",
    description: "Send an email",
    content: (
      <Link
        className="underline text-white"
        href="mailto:enquiry@layer3.com.ng"
      >
        enquiry@layer3.com.ng
      </Link>
    ),
  },
  {
    icon: <Chat />,
    title: "Chat",
    description: "Or chat with us",
    content: (
      <Link
        className="underline text-white"
        href="mailto:enquiry@layer3.com.ng"
      >
        Drop a message
      </Link>
    ),
  },
  {
    icon: <BriefCaseLine />,
    title: "Self service",
    description:
      "We're here to help with any cloud and fibre broad band questions. Check out our FAQs and learn more.",
    content: <span className="text-white">Get support</span>,
  },
];
