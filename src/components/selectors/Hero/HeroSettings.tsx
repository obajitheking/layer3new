import React from "react";
import { ToolbarSection, ToolbarItem } from "../../editor";
import { Avatar } from "antd";

export const HeroSettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection
        title="Background Image"
        props={["backgroundImage", "color"]}
        summary={({ backgroundImage }: any) => {
          return (
            <div className="flex flex-row-reverse">
              <Avatar src={backgroundImage} />
            </div>
          );
        }}
      >
        <ToolbarItem
          full={true}
          propKey="backgroundImage"
          type="text"
          label="Background Image"
        />
      </ToolbarSection>
      <ToolbarSection title="Texts" props={["mainText", "subText"]}>
        <ToolbarItem
          propKey="mainText"
          index={0}
          type="text"
          label="MainText"
        />
        <ToolbarItem propKey="subText" index={1} type="text" label="SubText" />
      </ToolbarSection>
    </React.Fragment>
  );
};
