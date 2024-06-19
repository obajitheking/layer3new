import { useNode } from "@craftjs/core";
import { Text } from "../Text";
import { HeroSettings } from "./HeroSettings";

export interface IHeroProps {
  mainText: string;
  subText: string;
  backgroundImage: string;
  textComponent?: any;
}

function Hero({
  mainText,
  subText,
  backgroundImage,
  textComponent,
}: Partial<IHeroProps>) {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <div
      ref={(ref) => {
        if (ref) {
          connect(ref);
        }
      }}
      className="hero min-h-screen w-full"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <Text
            tagName="h1"
            className="mb-5 text-5xl font-bold text-white"
            text={mainText}
            {...textComponent}
          />

          <Text tagName="p" className="mb-5 text-white" text={subText} />

          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

Hero.craft = {
  displayName: "Hero",
  props: {
    backgroundImage:
      "https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg",
    mainText: "Hello there",
    subText:
      "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
  },
  related: {
    toolbar: HeroSettings,
  },
};

export default Hero;
