"use client";
import { ConfigProvider, theme } from "antd";
import React from "react";

function AntdProvider({ children }: React.PropsWithChildren) {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontSize: 16,
          fontFamily: "var(--font-lexend-deca)",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

AntdProvider.propTypes = {};

export default AntdProvider;
