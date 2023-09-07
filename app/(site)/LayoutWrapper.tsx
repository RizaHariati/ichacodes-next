import React from "react";
import Navbar from "../(tools)/components/NavbarComponents/Navbar";

type Props = {
  children: React.ReactNode;
};

const LayoutWrapper = ({ children }: Props) => {
  return (
    <div className="main-layout">
      <Navbar />
      {children}
    </div>
  );
};

export default LayoutWrapper;
