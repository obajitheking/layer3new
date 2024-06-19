"use client";
import { getAccessToken, getToken } from "@/common/utils";
import PageLoader from "./PageLoader";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function ProtectedPage({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const token = getAccessToken();

  useEffect(() => {
    if (!token) {
      router.push("/admin/login");
    }
    return () => {};
  }, [router, token]);

  if (typeof window === "undefined") {
    return <PageLoader />;
  }

  return <>{children}</>;
}

export default dynamic(() => Promise.resolve(ProtectedPage), {
  ssr: false,
  loading: () => <PageLoader />,
});
