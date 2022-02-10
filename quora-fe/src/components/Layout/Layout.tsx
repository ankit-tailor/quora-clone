import React from "react";
import { Button } from "../button/Button";
import BottomNavbar from "../Navbar/BottomNavbar/BottomNavbar";
import { Sidebar } from "../Navbar/Sidebar/Sidebar";

interface LayoutProps {
  children?: JSX.Element | JSX.Element[] | string;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <BottomNavbar />
        {children}
      </div>
      <section className="text-primaryLight w-screen absolute bottom-0 h-18 py-6 bg-indigo">
        <div className="w-full text-center flex items-center justify-center">
          <div className="hidden sm:block flex-1 font-bold">
            <h1 className="text-2xl text-right">
              Don&apos;t want to miss What&apos;s happening?
            </h1>
            <p className="text-right">Be the first to know.</p>
          </div>
          <div className="flex-1">
            <Button
              variant="secondary"
              color="indigo"
              className="w-5/12 sm:w-auto font-bold py-1 px-6 mx-4 rounded-3xl shadow-2xl"
            >
              Log in
            </Button>
            <Button
              variant="primary"
              color="primaryLight"
              className="w-5/12 sm:w-auto font-bold text-primaryDark py-1 px-6 rounded-3xl shadow-xl"
            >
              Sign up
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
