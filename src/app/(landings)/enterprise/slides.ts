import { IHeroSlideProps } from "@/components/HeroSlider/Hero";

const ctas = [
  {
    label: "Learn More",
    href: "/about-us",
    className: "bg-primary border-primary text-white",
  },
  {
    label: "Contact Sales",
    href: "/contact-us",
    className: "bg-white border-white text-primary",
  },
];

export const enterprise_slides: IHeroSlideProps[] = [
  {
    title: "Discover Next-Level Enterprise Solutions with Layer3.",
    description:
      "",
    ctas,
    className:"max-w-[1000px] mx-auto",
    subTextClassName:"max-w-[1000px] mx-auto"
  },
  {
    title: "Be The Change You Want To See In The World",
    description:
      "Upgrade to reliable broadband and fiber for seamless connectivity and unmatched performance.",
    ctas,
  },
  {
    title: "Work Madly For Your Business",
    description:
      "Upgrade to reliable broadband and fiber for seamless connectivity and unmatched performance.",
    ctas,
  }
];

export const enterprise_slide_progress = [
    "Flagship Products (1-3)",
    "Value Prop",
    "Customer Benefit",
  ];