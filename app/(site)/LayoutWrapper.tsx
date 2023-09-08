"use client";
import React, { useState } from "react";
import Navbar from "../(tools)/components/NavbarComponents/Navbar";
import Footer from "../(tools)/components/mainComponents/Footer";

type Props = {
  children: React.ReactNode;
};

const LayoutWrapper = ({ children }: Props) => {
  const [scrollTop, setScrollTop] = useState<boolean>(false);
  return (
    <div
      className="main-layout"
      onScroll={(e) => {
        const top = e.currentTarget.scrollTop;
        if (top > 100) {
          setScrollTop(true);
        } else {
          setScrollTop(false);
        }
      }}
    >
      <Navbar scrollTop={scrollTop} />
      {children}
    </div>
  );
};

export default LayoutWrapper;
