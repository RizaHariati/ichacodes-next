"use client";
import React from "react";
import Navbar from "../(tools)/components/NavbarComponents/Navbar";
import { useGlobalContext } from "../(tools)/context/AppProvider";
import Modal from "../(tools)/modal/Modal";

type Props = {
  children: React.ReactNode;
};

const LayoutWrapper = ({ children }: Props) => {
  return (
    <div className="main-layout">
      <Modal />
      <Navbar />
      {children}
    </div>
  );
};

export default LayoutWrapper;
