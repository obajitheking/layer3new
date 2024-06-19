import { IHeroSlideProps } from "@/components/HeroSlider/Hero";

const ctas = [
  {
    label: "Buy Plan",
    href: "/small-business#pricing",
    className: "bg-primary border-primary text-white",
  },
  {
    label: "Contact Sales",
    href: "/contact-us",
    className: "bg-white border-white text-primary",
  },
];

export const small_business_slides: IHeroSlideProps[] = [
  {
    title: "Scale Your Business in the Cloud. Layer3 Empowers Growth.",
    description: "",
    ctas,
    className: "max-w-[970px] mx-auto",
  },
  {
    title: "Speed Up Your Business with Layer3 FTTH. Connect, Stream, Succeed. ",
    description: "",
    ctas,
    className: "max-w-[1000px] mx-auto",
  },
];

export const small_business_slide_progress = [ "Cloud", "Internet/FTTH"];
