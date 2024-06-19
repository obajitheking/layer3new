import AdminDashboard from "@/components/layouts/DashboardLayout/AdminDashboard";
import React from "react";

function Layout(props: React.PropsWithChildren) {
  return <AdminDashboard>{props.children}</AdminDashboard>;
}

Layout.propTypes = {};

export default Layout;
