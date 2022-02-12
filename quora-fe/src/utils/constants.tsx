import { BiBookmark, BiHome, BiFace, BiSliderAlt } from "react-icons/bi";

export const ROUTES = [
  {
    name: "Home",
    route: "/",
    icon: <BiHome />,
    id: "home",
  },
  {
    name: "Bookmarks",
    route: "/bookmarks",
    icon: <BiBookmark />,
    id: "bookmark",
  },
  {
    name: "Profile",
    route: "/profile",
    icon: <BiFace />,
    id: "profile",
  },
  {
    name: "Settings",
    route: "/settings",
    icon: <BiSliderAlt />,
    id: "setting",
  },
];
