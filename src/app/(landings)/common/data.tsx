import ManagedIcon from "@assets/icons/user-cog.svg";
import ProfessionalIcon from "@assets/icons/breifcase.svg";
import CloudIcon from "@assets/icons/upload.svg";
import AccessIcon from "@assets/icons/network.svg";
import SecuredIcon from "@assets/icons/secured.svg";
import NetworkIcon from "@assets/icons/wifi.svg";
import { IProductCardProps } from "../enterprise/ProductCard";
import { CollapseProps } from "antd";
import { IPricingCardProps } from "./PricingCard";

export const products: IProductCardProps[] = [
  {
    icon: <NetworkIcon />,
    title: "Network Solutions",
    caption:
      "Build a robust network infrastructure with Layer3's solutions. Trust us for smart AI networks and comprehensive security.",
    action_text: "Explore Our Network Solutions",
  },
  {
    icon: <CloudIcon />,
    title: "Cloud Solutions",
    caption:
      "Elevate your business with Layer3's Cloud Solutions. Experience flexibility, security, and reliability for seamless growth.",
    action_text: "Explore OurCloud Solutions",
  },

  {
    icon: <AccessIcon />,
    title: "Access Solutions",
    caption:
      "Enjoy seamless connectivity with Layer3's Access Solutions. Benefit from high-speed internet tailored to your needs.",
    action_text: "Explore Our Access Solutions",
  },
  {
    icon: <SecuredIcon />,
    title: "Cybersecurity Solutions",
    caption:
      "Protect your digital assets with Layer3's Cybersecurity Solutions. Stay ahead of evolving threats for peace of mind.",
    action_text: "Explore Our Cybersecurity Solutions",
    href: "/solutions/cybersecurity",
  },
  {
    icon: <ManagedIcon />,
    title: "Managed Services",
    caption:
      "Simplify IT management with Layer3's Managed Services. Focus on core activities while we handle complexities.",
    action_text: "Explore Our Managed Services",
    href: "/services/managed-services",
  },
  {
    icon: <ProfessionalIcon />,
    title: "Professional Services",
    caption:
      "Gain strategic insights with Layer3's Professional Services. Drive innovation and maximize value with our expertise.",
    action_text: "Explore Our Professional Services",
    href: "/services/professional-services",
  },
];

export const enterpriseSolutions = [
  {
    title: "Better Connections at Busy Times",
    description:
      "Business broadband for small businesses is faster than the internet speeds you get at home. It can also come with extra features to help your business, mainly customer services and additional security measures to help keep everything running smoothly.",
  },
  {
    title: "Better Connections at Busy Times",
    description:
      "Business broadband for small businesses is faster than the internet speeds you get at home. It can also come with extra features to help your business, mainly customer services and additional security measures to help keep everything running smoothly.",
  },
  {
    title: "Better Connections at Busy Times",
    description:
      "Business broadband for small businesses is faster than the internet speeds you get at home. It can also come with extra features to help your business, mainly customer services and additional security measures to help keep everything running smoothly.",
  },
  {
    title: "Better Connections at Busy Times",
    description:
      "Business broadband for small businesses is faster than the internet speeds you get at home. It can also come with extra features to help your business, mainly customer services and additional security measures to help keep everything running smoothly.",
  },
];

export const smallBusinessBenefits = [
  {
    title: "Continuous Support and Monitoring",
    description:
      " Enjoy peace of mind with 24/7 customer support and network monitoring, ensuring prompt assistance and proactive maintenance to address any issues. ",
  },
  {
    title: "Reliable Performance",
    description:
      "Enjoy consistent network performance, ensuring uninterrupted operations.",
  },
  {
    title: "Enhanced Collaboration",
    description:
      "Enable seamless teamwork through high-definition video conferencing and real-time file sharing.",
  },
  {
    title: "Future-Proof Technology",
    description:
      "Stay competitive with adaptable infrastructure for evolving business needs.",
  },
];

export const internet_services = [
  {
    label: "Enhanced Security",
    content:
      "Protect valuable data and ensure uninterrupted connectivity with robust cybersecurity solutions.",
  },
  {
    label: "Optimized Performance",
    content:
      "Achieve greater efficiency and reduced downtime through advanced network solutions. ",
  },
  {
    label: "Tailored Support",
    content:
      "Protect valuable data and ensure uninterrupted connectivity with robust cybersecurity solutions.",
  },
  {
    label: "Future-Proof Solutions",
    content:
      "Protect valuable data and ensure uninterrupted connectivity with robust cybersecurity solutions.",
  },
  {
    label: "Reliable Connectivity",
    content: "Stay connected with high-speed access solutions.",
  },
];

export const enterprise_faq: CollapseProps["items"] = [
  {
    key: "1",
    label: "What features distinguish Layer3's Enterprise Broadband service?",
    children:
      "Layer3's Enterprise Broadband service, including Metro and Longhaul Fiber, offers low latency, multiple connections to Internet backbone, 24/7 customer support, static IP addresses, and real-time bandwidth utilization graphs.",
  },
  {
    key: "2",
    label:
      "How does Layer3 ensure seamless connectivity and productivity with its Enterprise Broadband solutions?",
    children:
      "Layer3's Enterprise Broadband solutions, encompassing Metro and Longhaul Fiber, provide high-speed internet access tailored to business demands, ensuring uninterrupted communication and productivity with bandwidth tailored to specific requirements.",
  },
  {
    key: "3",
    label:
      "How can Managed Services from Layer3 help businesses achieve their goals?",
    children:
      "Managed Services leverage relationships with leading technology companies to understand business outcomes and fast-forward journeys towards revenue growth, operational efficiency, and enhanced customer experiences.",
  },
  {
    key: "4",
    label:
      "What benefits does Co-location offer for IT infrastructure management?",
    children:
      "Co-location services from Layer3 provide secure and scalable data center facilities, reducing operational costs, improving efficiency, and ensuring business continuity for IT infrastructure.",
  },
  {
    key: "5",
    label: "What are the benefits of Layer3's AI-powered WIFI solutions? ",
    children:
      "Layer3's AI-powered WIFI solutions optimize network performance, improve coverage, and enhance user satisfaction by intelligently distributing signals, eliminating dead zones, and ensuring a consistent and secure connection for all devices.",
  },
];

export const small_business_faq: CollapseProps["items"] = [
  {
    key: "1",
    label: "What level of uptime can I expect with Layer3Cloud services? ",
    children:
      "Layer3 guarantees high availability and uptime for its cloud services, with a service level agreement (SLA) that ensures reliability and performance. Our infrastructure is designed to minimize downtime and ensure continuous access to your critical applications and data. Additionally, Layer3Cloud operates multiple availability zones in Abuja and Lagos, providing redundancy and failover capabilities to further minimize downtime and ensure uninterrupted service delivery, even in the event of localized outages or disruptions.",
  },
  {
    key: "2",
    label:
      "Can I access my cloud resources from anywhere with Layer3's services?",
    children:
      "Yes, Layer3Cloud services offer secure remote access, allowing you to access your resources from anywhere with an internet connection. Whether you're in the office, at home, or on the go, you can securely access your applications and data in the cloud.Layer3's Enterprise Broadband solutions, encompassing Metro and Longhaul Fiber, provide high-speed internet access tailored to business demands, ensuring uninterrupted communication and productivity with bandwidth tailored to specific requirements.",
  },
  {
    key: "3",
    label:
      "What security certifications does Layer3's cloud infrastructure hold?",
    children:
      "Layer3's cloud infrastructure is certified to meet industry-leading security standards, including ISO 27001 and ISO 27017. These certifications demonstrate our commitment to data security, compliance, and best practices in cloud operations. ",
  },
  {
    key: "4",
    label:
      "Can I integrate Layer3's cloud services with my existing IT infrastructure? ",
    children:
      "Yes, Layer3's cloud services are designed to integrate seamlessly with existing IT infrastructure and applications. Whether you're migrating legacy systems to the cloud or implementing hybrid solutions, our team can help you navigate the integration process and maximize compatibility.",
  },
  {
    key: "5",
    label: "What level of support does Layer3 provide for its cloud customers?",
    children:
      "Layer3 offers comprehensive support for its cloud customers, including 24/7 technical assistance, proactive monitoring, and dedicated account management. Our team is available to address any issues or concerns and ensure a seamless cloud experience for your business.",
  },
  {
    key: "6",
    label:
      "Can I easily scale my cloud resources with Layer3's services as my business grows?",
    children:
      "Yes, Layer3's cloud solutions are designed for scalability, allowing you to easily scale your resources up or down based on changing business needs. Whether you need additional computing power, storage capacity, or network bandwidth, our flexible infrastructure can accommodate your growth.",
  },
  {
    key: "7",
    label: "Can I upgrade my broadband plan with Layer as my business grows?",
    children:
      "Yes, Layer offers flexible broadband plans that can be easily upgraded as your business expands. Simply contact our customer support team to discuss your growing bandwidth needs and explore available upgrade options.",
  },
  {
    key: "8",
    label: "What kind of speeds can I expect with Layer's broadband service?",
    children:
      "Layer3 offers broadband plans with speeds of up to 60Mbps, ensuring fast and reliable internet access for your small business needs. Speeds may vary depending on your location and plan selection.",
  },
  {
    key: "9",
    label: "Can I access my broadband account and Managed servicess online?",
    children:
      "Yes, Layer3 provides an online portal where you can access your broadband account, view usage statistics, Managed servicess, and make payments conveniently. Our user-friendly interface makes it easy to monitor and control your broadband services from anywhere.",
  },
  {
    key: "10",
    label:
      "How quickly can I expect installation and activation of Layer3's broadband service?",
    children:
      "Installation and activation times for Layer3's broadband service vary depending on factors such as location, availability, and existing infrastructure. Our team strives to complete installations promptly and efficiently to minimize downtime for your business.",
  },
];

export const stats = [
  {
    title: "200+",
    caption: "No of Clients",
  },
  {
    title: "2",
    caption: "Locations Served",
  },
  {
    title: "6+",
    caption: "Sectors Served",
  },
  {
    title: "15+",
    caption: "Awards Won",
  },
  {
    title: "Partners",
    caption: "Juniper, VMWare (Broadcom), Cisco",
  },
];

export const mtus_pricing: IPricingCardProps[] = [
  {
    title: "Basic",
    summary: "Unlimited Internet",
    offer: "10 MBPS",
    amount: 17500,
    period: "month",
    perks: [
      "100% Unlimited Internet",
      "24 Hours Support",
      "Low Latency",
      "Fiber to your Location",
      "Up to 5 Users",
    ],
  },
  {
    title: "Standard",
    summary: "Unlimited Internet",
    offer: "15 MBPS",
    amount: 25500,
    period: "month",
    perks: [
      "100% Unlimited Internet",
      "24 Hours Support",
      "Low Latency",
      "Fiber to your Location",
      "Up to 10 Users",
    ],
  },
];

export const schools_pricing: IPricingCardProps[] = [
  {
    title: "Basic",
    summary: "Unlimited Internet",
    offer: "20 MBPS",
    amount: 55000,
    period: "month",
    perks: [
      "100% Unlimited Internet",
      "24 Hours Support",
      "Low Latency",
      "Fiber to your Location",
      "Up to 10 Users",
    ],
  },
  {
    title: "Standard",
    summary: "Unlimited Internet",
    offer: "40 MBPS",
    amount: 95000,
    period: "month",
    perks: [
      "100% Unlimited Internet",
      "24 Hours Support",
      "Low Latency",
      "Fiber to your Location",
      "Up to 15 Users",
    ],
  },
  {
    title: "Premium",
    summary: "Unlimited Internet",
    offer: "60 MBPS",
    amount: 125000,
    period: "month",
    perks: [
      "100% Unlimited Internet",
      "24 Hours Support",
      "Low Latency",
      "Fiber to your Location",
      "Up to 30 Users",
    ],
  },
  {
    title: "Premium Plus",
    summary: "Unlimited Internet",
    offer: "80 MBPS",
    amount: 155000,
    period: "month",
    perks: [
      "100% Unlimited Internet",
      "24 Hours Support",
      "Low Latency",
      "Fiber to your Location",
      "Up to 40 Users",
    ],
  },
  {
    title: "Platinum",
    summary: "Unlimited Internet",
    offer: "100 MBPS",
    amount: 180000,
    period: "month",
    perks: [
      "100% Unlimited Internet",
      "24 Hours Support",
      "Low Latency",
      "Fiber to your Location",
      "Up to 50 Users",
    ],
  },
];

export const individual_pricing: IPricingCardProps[] = [
  {
    title: "Basic",
    summary: "Unlimited Internet",
    offer: "30 MBPS",
    amount: 21380,
    period: "month",
    perks: [
      "100% Unlimited Internet",
      "24 Hours Support",
      "Low Latency",
      "Fiber to your Location",
      "Up to 10 Users",
    ],
  },
  {
    title: "Standard",
    summary: "Unlimited Internet",
    offer: "60 MBPS",
    amount: 28891,
    period: "month",
    perks: [
      "100% Unlimited Internet",
      "24 Hours Support",
      "Low Latency",
      "Fiber to your Location",
      "Up to 15 Users",
    ],
  },
  {
    title: "Premium",
    summary: "Unlimited Internet",
    offer: "80 MBPS",
    amount: 34669,
    period: "month",
    perks: [
      "100% Unlimited Internet",
      "24 Hours Support",
      "Low Latency",
      "Fiber to your Location",
      "Up to 30 Users",
    ],
  },
];

const uses = [
  {
    title: "More Bandwidth",
    description:
      "Harness the power of fiber optic networks to support increased data transmission needs, ensuring seamless operations and faster connectivity compared to traditional copper cable networks.",
  },
  {
    title: "Cloud solutions",
    description:
      "Simplify and accelerate your cloud deployment journey with Layer3's expertise and secure infrastructure. Enjoy seamless migration, optimal performance, and peace of mind, allowing you to focus on achieving your business goals without roadblocks.",
  },
  {
    title: "Enhanced security",
    description:
      "Protect your business assets and data with Layer3's advanced security measures, safeguarding against cyber threats and ensuring compliance with industry regulations.",
  },
  {
    title: "Scalability",
    description:
      "Scale your IT infrastructure and services according to your business growth, with flexible solutions that adapt to your changing needs and requirements, allowing you to stay agile and competitive in the market.",
  },
  {
    title: "Expert support",
    description:
      "Access dedicated customer support and technical assistance from Layer3's team of experts, providing timely resolution to issues and ensuring smooth operations for your business around the clock.",
  },
];

export const use_cases: Record<
  string,
  { title: string; description: string }[]
> = {
  Restaurants: uses,
  "Educational Institutions": uses,
  "E-commerce Stores": uses,
  "Healthcare Providers": uses,
  "Law Firms": uses,
};

export const services = [
  {
    title: "100% unlimited data ",
    description:
      "No cap on data usage. You don t have to worry about going over your limit and spending more each month.",
  },
  {
    title: "24/7 customer support",
    description:
      "No scripts, just friendly experts here for you. You can get help and find answers to questions as soon as they come up—24/7 and in real time. ",
  },
  {
    title: "Super-fast downloads and uploads",
    description:
      "Use your broadband as much as you want to stream, browse, and download with no limits.",
  },
  {
    title: "Low latency",
    description:
      "You are assured of a strong, reliable network connection that reduces the possibilities of delays or connection loss.",
  },
];

interface IFooterItem {
  label: string;
  link: string;
}

export const footerItems: Record<string, IFooterItem[]> = {
  Company: [
    {
      label: "Use cases",
      link: "https://layer3.joseph.name.ng/case-studies",
    },
    {
      label: "Blog",
      link: "https://layer3.joseph.name.ng/blog/",
    },
    {
      label: "Contact Us",
      link: "/contact-us",
    },
    {
      label: "Careers",
      link: "/careers",
    },
    {
      label: "About Us",
      link: "/about-us",
    },
    {
      label: "Resources",
      link: "https://layer3.joseph.name.ng/blog/",
    },
  ],
  Industries: [
    {
      label: "Higher Education",
      link: "/industries/higher-education",
    },
    {
      label: "Energy",
      link: "/industries/energy",
    },
    {
      label: "Health Care",
      link: "/industries/healthcare",
    },
    {
      label: "Service Providers",
      link: "/industries/service-providers",
    },
    {
      label: "Financial institution",
      link: "/industries/financial-institution",
    },
    {
      label: "Public sector & NGO's",
      link: "/industries/public-sector-ngos",
    },
  ],
  Quicklinks: [
    {
      label: "Services",
      link: "/services",
    },
    {
      label: "About Us",
      link: "/about-us",
    },
    {
      label: "FAQ's",
      link: "/faqs",
    },
    {
      label: "Pricing",
      link: "/small-business/#pricing",
    },
    {
      label: "Case Studies",
      link: "https://layer3.joseph.name.ng/case-studies",
    },
    {
      label: "Partners",
      link: "/#partners",
    },
  ],
  Legal: [
    {
      label: "SLA",
      link: "/legal/sla",
    },
    {
      label: "Privacy Policy",
      link: "/legal/privacy-policy",
    },
    {
      label: "Terms and Use",
      link: "/legal/terms-of-use",
    },
    {
      label: "Data Use",
      link: "/legal/data-use-policy",
    },
    {
      label: "ISMS Policy",
      link: "/legal/isms-policy",
    },
  ],
};
