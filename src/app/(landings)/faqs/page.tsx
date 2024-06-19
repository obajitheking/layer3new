/** @jsxImportSource @emotion/react */
"use client";

import { Grid, Tabs, TabsProps } from "antd";
import React from "react";
import { css } from "@emotion/react";
import { faq_tabs } from "./data";

const { useBreakpoint } = Grid;

function FaqPage() {
  const sizes = useBreakpoint();
  return (
    <section className="py-[100px] bg-brand-dark-2">
      <div className="container">
        <h1 className="text-[32px] md:text-[50px] md:leading-[62.5px] font-normal text-white mb-8">
          Frequently Asked Questions
        </h1>
        <Tabs
          css={css`
            & .ant-tabs-nav .ant-tabs-ink-bar {
              display: none;
            }
            & .ant-tabs-nav {
              background-color: #010101;
              padding: 60px 64px;
              border-radius: 10px;
            }
            & .ant-tabs-content-holder {
              border-left: 0px;
            }
            & .ant-tabs-nav .ant-tabs-tab .ant-tabs-tab-btn {
              display: flex;
              align-items: center;
              color: white;
              font-weight: 300;
              font-size: 16px;
            }

            & .ant-tabs-nav .ant-tabs-tab {
              border: 1px solid #ffffff66;
              border-radius: 10px;
              padding: 14px 20px;
            }

            & .ant-tabs-nav .ant-tabs-tab:hover {
              background-color: #131212;
            }
            & .ant-tabs-nav .ant-tabs-tab.ant-tabs-tab-active {
              background-color: #131212;
              border: 1px solid #eb303d;
            }
            @media (max-width: 1024px) {
              & .ant-tabs-nav {
                padding: 20px 24px;
              }
            }
            @media (min-width: 992px) {
              align-items: flex-start;
            }
          `}
          defaultActiveKey="1"
          items={faq_tabs}
          tabPosition={sizes.lg ? "left" : "top"}
        />
      </div>
    </section>
  );
}

export default FaqPage;
