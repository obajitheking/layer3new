/** @jsxImportSource @emotion/react */
"use client";
import React from "react";
import NetworkCollaboration from "./NetworkCollaboration";
import { Tabs, TabsProps } from "antd";
import { css } from "@emotion/react";
import { managed_features, professional_features } from "./data";

const items: TabsProps["items"] = [
  {
    key: "managed_services",
    label: "Managed Services",
    children: <NetworkCollaboration features={managed_features} />,
  },
  {
    key: "professional_services",
    label: "Professional Services",
    children: (
      <NetworkCollaboration
        src="/img/network-2.png"
        features={professional_features}
      />
    ),
  },
];

function Solutions() {
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <section className="bg-brand-dark-2 text-white py-20">
      <div className="container">
        <h2
          data-aos="fade"
          className="text-center text-[30px] md:text-[40px] font-bold mb-3"
        >
          Services
        </h2>
        <p
          data-aos="fade"
          className="text-center text-white text-opacity-80 mb-8 w-full max-w-[832px] mx-auto"
        >
          Layer3&apos;s product suite guarantees you and your business world
          class service that comes with 24/7 support ensuring you focus on what
          really matters -your core business.
        </p>
        <Tabs
          data-aos="fade"
          css={css`
            & > .ant-tabs-nav::before,
            .ant-tabs-ink-bar {
              display: none;
            }
            & .ant-tabs-nav-list .ant-tabs-tab {
              color: rgba(255, 255, 255, 0.5);
              padding-left: 20px;
              padding-right: 20px;
              border-radius: 8px;
            }
            & .ant-tabs-nav-list .ant-tabs-tab.ant-tabs-tab-active {
              color: #fff;
              background-color: #eb303d;
            }
            &
              .ant-tabs-nav-list
              .ant-tabs-tab.ant-tabs-tab-active
              .ant-tabs-tab-btn {
              color: #fff;
            }
            & .ant-tabs-nav-list {
              border: 1px solid #ffffff1a;
              border-radius: 8px;
              padding: 8px;
            }
            & .ant-tabs-tab + .ant-tabs-tab {
              margin: 0px;
            }
            @media (max-width: 486px) {
              & .ant-tabs-nav-list .ant-tabs-tab {
                padding-left: 10px;
                padding-right: 10px;
              }
              & .ant-tabs-tab-btn {
                font-size: 12px;
              }
            }
          `}
          centered
          defaultActiveKey="managed_services"
          items={items}
          onChange={onChange}
        />
      </div>
    </section>
  );
}

Solutions.propTypes = {};

export default Solutions;
