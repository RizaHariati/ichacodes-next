"use client";
import React, { createContext, useContext, useState } from "react";
import { ProjectType } from "../../../types.d";

export type AppContextProps = {
  showModal: boolean;
  closeModal: () => void;
  showProject: ProjectType | null;
  openModal: (project: ProjectType) => void;
};

export const AppContext = createContext<AppContextProps>({} as AppContextProps);
interface Props {
  children: JSX.Element | JSX.Element[];
}

const AppProvider = ({ children }: Props) => {
  const [showModal, setshowModal] = useState(false);
  const [showProject, setShowProject] = useState<ProjectType | null>(null);
  const closeModal = () => {
    setshowModal(false);
  };
  const openModal = (project: ProjectType) => {
    setshowModal(true);
    setShowProject(project);
  };
  const value = { showModal, closeModal, showProject, openModal };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;

export const useGlobalContext = () => {
  return useContext(AppContext);
};
