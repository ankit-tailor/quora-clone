import React from "react";
import Link from "next/link";
import { FcRules } from "react-icons/fc";
import { NavbarItem } from "../NavbarItem/NavbarItem";
import { Routes } from "../../../utils/constatns";

export const Sidebar = React.memo(function Sidebar() {
  return (
    <div className="hidden sm:block shadow-xl font-extrabold md:w-auto  lg:w-1/5 w-1/5 h-screen p-6 dark:bg-primaryDark bg-primaryLight dark:text-primaryLight text-primaryDark">
      <Link href="/">
        <a>
          <div className="brand flex items-center sm:mx-4 my-14">
            <FcRules
              // @ts-ignore
              className="text-5xl"
            />
            <h1 className="hidden lg:block text-indigo text-2xl mx-4">Quora</h1>
          </div>
        </a>
      </Link>
      <div className="flex flex-col justify-center">
        {Routes.map(({ id, name, icon, route }) => (
          <NavbarItem key={id} name={name} icon={icon} route={route} />
        ))}
      </div>
      <hr className="hidden lg:block my-6 mx-8 text-lightGray border-t-2" />
    </div>
  );
});
