"use client";
import { Element, useEditor } from "@craftjs/core";
import styled from "@emotion/styled";

import ButtonSvg from "@assets/icons/toolbox/button.svg";
import SquareSvg from "@assets/icons/toolbox/rectangle.svg";
import TypeSvg from "@assets/icons/toolbox/text.svg";
import YoutubeSvg from "@assets/icons/toolbox/video-line.svg";
import { Button } from "../../selectors/Button";
import { Container } from "../../selectors/Container";
import { Text } from "../../selectors/Text";
import { Video } from "../../selectors/Video";
import { Tooltip } from "antd";

const ToolboxDiv = styled.div<{ enabled: boolean }>`
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  ${(props) => (!props.enabled ? `width: 0;` : "")}
  ${(props) => (!props.enabled ? `opacity: 0;` : "")}
`;

const Item = styled.a<{ move?: boolean }>`
  svg {
    width: 22px;
    height: 22px;
    fill: #707070;
  }
  ${(props) =>
    props.move &&
    `
    cursor: move;
  `}
`;

export const Toolbox = () => {
  const {
    enabled,
    connectors: { create },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <ToolboxDiv
      enabled={enabled && enabled}
      className="toolbox transition w-12 h-full flex flex-col bg-white"
    >
      <div className="flex flex-1 flex-col items-center pt-3">
        <div
          ref={(ref) => {
            if (ref) {
              create(
                ref,
                <Element
                  canvas
                  is={Container}
                  background={{ r: 78, g: 78, b: 78, a: 1 }}
                  color={{ r: 0, g: 0, b: 0, a: 1 }}
                  height="300px"
                  width="300px"
                ></Element>
              );
            }
          }}
        >
          <Tooltip title="Container" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              <SquareSvg />
            </Item>
          </Tooltip>
        </div>
        <div
          ref={(ref) => {
            if (ref) {
              create(
                ref,
                <Text fontSize="12" textAlign="left" text="Hi there" />
              );
            }
          }}
        >
          <Tooltip title="Text" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              <TypeSvg />
            </Item>
          </Tooltip>
        </div>
        <div
          ref={(ref) => {
            if (ref) {
              create(ref, <Button />);
            }
          }}
        >
          <Tooltip title="Button" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              <ButtonSvg />
            </Item>
          </Tooltip>
        </div>
        <div
          ref={(ref) => {
            if (ref) {
              create(ref, <Video />);
            }
          }}
        >
          <Tooltip title="Video" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              <YoutubeSvg />
            </Item>
          </Tooltip>
        </div>
      </div>
    </ToolboxDiv>
  );
};
