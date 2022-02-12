import React from "react";
import { NavbarItem } from "../NavbarItem/NavbarItem";
import { BiBookmark, BiHome, BiFace, BiSliderAlt } from "react-icons/bi";
import { ROUTES } from "../../../utils/constants";

export const BottomNavbar = () => {
  return (
    <div className="sm:hidden fixed bottom-0 w-screen overflow-y-hidden dark:bg-primaryDark bg-primaryLight dark:text-primaryLight text-primaryDark">
      <div className="flex items-center justify-between mx-10">
        {ROUTES.map(({ id, name, icon, route }) => (
          <NavbarItem key={id} name={name} icon={icon} route={route} />
        ))}
      </div>
    </div>
  );
};

export default BottomNavbar;
