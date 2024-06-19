/** @jsxImportSource @emotion/react */
"use client";
import { css } from "@emotion/react";
import { Collapse, CollapseProps } from "antd";

function FaqCollapse({ items }: { items: CollapseProps["items"] }) {
  return (
    <Collapse
      css={css`
        border: none;
        border-radius: 0px;
        & > .ant-collapse-item > .ant-collapse-header {
          color: #fff;
        }
        & .ant-collapse-header-text {
          font-weight: 400;
          font-size: 20px;
        }

        & > .ant-collapse-item > .ant-collapse-content {
          background-color: transparent;
          color: #fff;
          font-weight: 300;
          font-size: 20px;
        }

        & .ant-collapse-content {
          border-top: none;
        }
        & .ant-collapse-item:last-child {
          border-radius: 0px;
        }
        & > .ant-collapse-item {
          margin-bottom: 50px;
        }
        & .ant-collapse-content-box {
          font-size: 20px;
          font-weight: 300;
        }
        @media (max-width: 640px) {
          & .ant-collapse-header-text {
            font-size: 20px;
          }
          & .ant-collapse-content-box {
            font-size: 18px;
          }
        }
      `}
      accordion
      items={items}
      expandIconPosition="end"
    />
  );
}

FaqCollapse.propTypes = {};

export default FaqCollapse;
