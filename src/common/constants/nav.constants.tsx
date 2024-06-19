import { footerItems } from "@/app/(landings)/common/data";
import { CompanyPopup } from "@/components/CompanyPop";
import { IndustriesPopup } from "@/components/IndustriesPop";
import { ServicesPopup, SolutionPopup } from "@/components/PopupItem";
import { INavItem } from "@/components/layouts/LandingLayout/Header/NavItem";
import BriefCase from "@assets/icons/brief-case.svg";
import HomeIcon from "@assets/icons/home-icon.svg";
import HandBag from "@assets/icons/shopping-bag.svg";
import { FaPhone } from "react-icons/fa6";

export const leftItems: INavItem[] = [
  {
    label: "Enterprise",
    link: "/enterprise",
    icon: <BriefCase />,
  },
  {
    label: "Small business",
    link: "/small-business",
    icon: <HandBag />,
  },
  {
    label: "Individuals",
    link: "/individuals",
    icon: <HomeIcon />,
  },
];

export const rightItems: INavItem[] = [
  {
    label: "Company",
    link: "#company",
    items: [
      {
        label: "About Us",
        link: "/about-us",
      },
      {
        label: "Leadership",
        link: "/about-us/#teams",
      },
      {
        label: "Careers",
        link: "/careers",
      },
      {
        label: "Our Clients",
        link: "/#partners",
      },
      {
        label: "News and Events",
        link: "https://layer3.joseph.name.ng/news/",
      },
      {
        label: "Blog",
        link: "https://layer3.joseph.name.ng/blog/",
      },
    ],
    popup: true,
    popupContent: <CompanyPopup />,
  },
  {
    label: "Case Studies",
    link: "https://layer3.joseph.name.ng/case-studies",
  },
  {
    label: "Contact Us",
    link: "contact-us",
    itemClassName: "btn bg-primary border-primary text-white",
  },
];

export const bottomItems: INavItem[] = [
  {
    label: "Solutions",
    link: "/solutions",
    items: [
      {
        label: "Network Solutions",
        link: "#",
      },
      {
        label: "Cybersecurity Solutions",
        link: "/solutions/cybersecurity",
      },
      {
        label: "Cloud Solutions",
        link: "#",
      },
      {
        label: "Access Solutions",
        link: "#",
      },
    ],
    popup: true,
    popupContent: <SolutionPopup />,
  },
  {
    label: "Services",
    link: "/services",
    items: [
      {
        label: "Managed Services",
        link: "/services/managed-services",
      },
      {
        label: "Professional Services",
        link: "/services/professional-services",
      },
    ],
    popup: true,
    popupContent: <ServicesPopup />,
  },
  {
    label: "Industries",
    link: "#",
    items: [
      {
        label: "Higher Education",
        link: "/services/managed-services",
      },
      {
        label: "Professional Services",
        link: "/services/professional-services",
      },
    ],
    popup: true,
    popupContent: <IndustriesPopup />,
  },
];
