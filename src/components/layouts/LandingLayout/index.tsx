"use client";
import React, { useEffect, useRef } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MobileSidebar from "./MobileSidebar";
import Aos from "aos";

function LandingLayout({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: true,
    });
  }, []);

  const onToggle = () => {
    ref.current?.click();
  };

  return (
    <div className="drawer">
      <input
        ref={ref}
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content overflow-hidden">
        <Header />
        <main className="min-h-[768px]">{children}</main>
        <Footer />
      </div>
      <MobileSidebar onClose={onToggle} />
    </div>
  );
}

export default LandingLayout;
