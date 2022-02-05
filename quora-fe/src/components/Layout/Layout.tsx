import React from "react";
import BottomNavbar from "../Navbar/BottomNavbar/BottomNavbar";
import { Sidebar } from "../Navbar/Sidebar/Sidebar";

export const Layout = ({ children }: any) => {
  return (
    <div className="flex">
      <Sidebar />
      <BottomNavbar />
      {children}
    </div>
  );
};
