"use client";
import { selectUser } from "@/redux/features";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import Redirect from "../Redirect";

const Can = ({
  roles,
  children,
  fallback = null,
  redirectToUserRoleRoute,
}: React.PropsWithChildren<{
  roles: string[];
  fallback?: React.ReactNode;
  redirectToUserRoleRoute?: boolean;
}>) => {
  const user = useSelector(selectUser);

  if (user?.role && roles.includes(user?.role)) {
    return children;
  } else {
    if (redirectToUserRoleRoute) {
      return <Redirect to={`/app/${user?.role || ""}`} />;
    }
    return fallback;
  }
};

export default Can;
