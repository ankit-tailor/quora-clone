import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// import { Link, useMatch } from "react-router-dom";

export const NavbarItem = ({ icon, name, route }: any) => {
  const router = useRouter();
  const isActiveLink = router.pathname;

  return (
    <Link href={route}>
      <a>
        <div
          className={`${
            isActiveLink ? "text-indigo" : "text-lightGray"
          } cursor-pointer hover:text-indigo flex items-center justify-start`}
        >
          <div className="text-3xl my-4 sm:mx-6 sm:my-6 lg:my-4">{icon}</div>
          <p className="hidden lg:block">{name}</p>
        </div>
      </a>
    </Link>
  );
};
