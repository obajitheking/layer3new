"use client";
import Can from "@components/Can";
import { Layout, Menu, theme } from "antd";
import { MenuItemType } from "antd/es/menu/hooks/useItems";
import Logo from "@assets/icons/logo.svg";
import React from "react";

const { Header, Content, Footer, Sider } = Layout;

const DashboardLayout = ({
  children,
  items,
  allowedRoles = [],
}: React.PropsWithChildren<{
  items: MenuItemType[];
  allowedRoles?: string[];
}>) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="p-5">
          <Logo />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Layer3 ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
