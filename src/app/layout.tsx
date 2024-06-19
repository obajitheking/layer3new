import { lexend_deca } from "@/assets/fonts";
import AntdProvider from "@/components/Antd/AntdProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "aos/dist/aos.css";
import { ReduxProvider } from "./_parts/ReduxProvider";
import "./globals.css";
import "./tiptap.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend_deca.className} ${lexend_deca.variable}`}>
        <AntdRegistry>
          <ReduxProvider>
            <AntdProvider>{children}</AntdProvider>
          </ReduxProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
