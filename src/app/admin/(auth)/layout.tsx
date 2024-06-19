import AuthLayout from "@/components/layouts/AuthLayout/AuthLayout";

export default function AdminAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthLayout>{children}</AuthLayout>;
}
