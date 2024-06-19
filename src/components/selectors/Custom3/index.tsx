import { Element, useNode } from "@craftjs/core";

import { Button } from "../Button";
import { Container } from "../Container";

export const Custom3BtnDrop = ({ children }: React.PropsWithChildren<any>) => {
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
      className="w-full h-full"
    >
      {children}
    </div>
  );
};

Custom3BtnDrop.craft = {
  rules: {
    canMoveOut: (outgoingNodes: any, self: any, helpers: any) => {
      const {
        data: { nodes },
      } = self;
      const btnNodes = nodes.filter(
        (id:string) => helpers(id).get().data.type === Button
      );

      const outgoingButtonNodes = outgoingNodes.filter(
        (node:any) => node.data.type === Button
      );

      if (outgoingButtonNodes.length < btnNodes.length) {
        return true;
      }

      return false;
    },
  },
};
export const Custom3 = (props: any) => {
  return (
    <Container {...props} className="overflow-hidden">
      <div className="w-full mb-4">
        <h2 className="text-center text-xs text-white">
          I must have at least 1 button
        </h2>
      </div>
      <Element canvas is={Custom3BtnDrop} id="wow">
        <Button background={{ r: 184, g: 247, b: 247, a: 1 }} />
      </Element>
    </Container>
  );
};

Custom3.craft = {
  ...Container.craft,
  displayName: "Custom 3",
};
