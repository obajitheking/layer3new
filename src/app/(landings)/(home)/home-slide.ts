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

export const home_slides: IHeroSlideProps[] = [
  {
    title: "Soar with Layer3Cloud",
    description: "Build, deploy and scale on our high-availability cloud",
    ctas,
  },
  {
    title: "Improve the quality and performance of your network",
    description:
      "Leverage our smart AI-driven network to boost your business productivity",
    ctas,
    className: "max-w-[850px]  mx-auto",
    subTextClassName: "max-w-[794px] mx-auto",
  },
  {
    title: "Enjoy lightening fast internet.",
    description: "Work and play in the future.",
    className: "max-w-[850px]  mx-auto",
    ctas,
  },
  {
    title: "24/7 customer support",
    description:
      "Layer3's product suite guarantees you and your business world class service that comes with 24/7 support ensuring you focus on what really matters - your core business.",
    className: "max-w-[890px]  mx-auto",
    ctas,
  },
  {
    title: "Enjoy peace of mind!",
    description:
      " We promise and deliver peace of mind with our rich suite of offerings, professional expertise, elite partnerships and support infrastructure.",
    className: "max-w-[850px]  mx-auto",
    subTextClassName: "max-w-[670px] mx-auto",
    ctas,
  },
];
