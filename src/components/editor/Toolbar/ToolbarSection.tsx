/** @jsxImportSource @emotion/react */
import { useNode } from "@craftjs/core";
import { Col, Collapse, Row } from "antd";
import { css } from "@emotion/react";
import React from "react";

function Summary({
  title,
  summary,
  props,
  nodeProps = {},
}: {
  title?: string;
  props?: string[];
  summary?: (props: any) => React.ReactNode;
  nodeProps?: Record<string, any>;
}) {
  return (
    <div className="px-6 w-full">
      <Row gutter={3}>
        <Col xs={8}>
          <h5 className="text-sm text-light-gray-1 text-left font-medium text-dark-gray">
            {title}
          </h5>
        </Col>
        {summary && props ? (
          <Col xs={16}>
            <h5 className="text-light-gray-2 text-sm text-right text-dark-blue">
              {summary(
                props.reduce((acc: any, key: any) => {
                  acc[key] = nodeProps[key];
                  return acc;
                }, {})
              )}
            </h5>
          </Col>
        ) : null}
      </Row>
    </div>
  );
}

export const ToolbarSection = ({
  title,
  props,
  summary,
  children,
}: React.PropsWithChildren<{
  title: string;
  props?: string[];
  summary?: (props: any) => React.ReactNode;
}>) => {
  const { nodeProps = {} } = useNode((node) => ({
    nodeProps:
      props &&
      props.reduce((res, key: string) => {
        res[key] = node.data.props[key] || null;
        return res;
      }, {} as Record<string, any>),
  }));
  return (
    <Collapse
      css={css`
        border-radius: 0px;
        border: none;
        & .ant-collapse-item:last-child > .ant-collapse-header,
        & .ant-collapse-item:last-child {
          border-radius: 0px;
        }
      `}
      items={[
        {
          key: "1",
          label: (
            <Summary
              title={title}
              props={props}
              summary={summary}
              nodeProps={nodeProps}
            />
          ),
          children: (
            <div>
              {/* <Divider /> */}
              <Row>{children}</Row>
            </div>
          ),
        },
      ]}
    ></Collapse>
  );
};
