import React from "react";
import BottomNavbar from "../Navbar/BottomNavbar/BottomNavbar";
import { Sidebar } from "../Navbar/Sidebar/Sidebar";

interface LayoutProps {
  children?: JSX.Element | JSX.Element[] | string;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex">
      <Sidebar />
      <BottomNavbar />
      {children}
    </div>
  );
};
