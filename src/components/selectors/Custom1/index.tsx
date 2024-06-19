import { Element, useNode } from "@craftjs/core";

import { Button } from "../Button";
import { Container } from "../Container";

export const OnlyButtons = ({
  children,
  ...props
}: React.PropsWithChildren<any>) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <div
      title="only-buttons"
      ref={(ref) => {
        if (ref) {
          connect(ref);
        }
      }}
      className="w-full mt-5"
      {...props}
    >
      {children}
    </div>
  );
};

OnlyButtons.craft = {
  rules: {
    canMoveIn: (nodes:any) => nodes.every((node:any) => node.data.type === Button),
  },
};

export const Custom1 = (props: any) => {
  return (
    <Container {...props}>
      <h2 className="text-lg px-10 py-5 text-white">
        I&apos;m a component that only accepts
        <br /> buttons.
      </h2>
      <Element canvas id="wow" is={OnlyButtons}>
        <Button />
        <Button
          buttonStyle="outline"
          color={{ r: 255, g: 255, b: 255, a: 1 }}
        />
      </Element>
    </Container>
  );
};

Custom1.craft = {
  ...Container.craft,
  displayName: "Custom 1",
};
