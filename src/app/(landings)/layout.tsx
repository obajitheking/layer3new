import LandingLayout from "@/components/layouts/LandingLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LandingLayout>{children}</LandingLayout>;
}
