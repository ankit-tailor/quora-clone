import type { NextPage } from "next";
import { useContext } from "react";
import { Button } from "../src/components/button/Button";
import { Layout } from "../src/components/Layout/Layout";
import { ThemeContext } from "../src/providers/ThemeProvider";
import { BiArrowBack, BiMoon, BiSun } from "react-icons/bi";
import { useRouter } from "next/router";

const Setting: NextPage = () => {
  // @ts-ignore
  const { theme, toggleTheme } = useContext(ThemeContext);
  const router = useRouter();

  return (
    <div className="dark:bg-primaryDark bg-primaryLight">
      <Layout>
        <div className="p-6 sm:px-10 sm:py-10 overflow-x-hidden h-screen w-screen mx-auto shadow-inner dark:bg-secondaryDark dark:text-primaryLight text-primaryDark bg-secondaryLight">
          <div className="flex items-center">
            <BiArrowBack
              //@ts-ignore
              onClick={() => router.push("/")}
              className="mx-4 cursor-pointer text-3xl text-indigo"
            />
            <h1 className="dark:text-secondaryLight text-secondaryDark text-2xl font-bold">
              Settings
            </h1>
          </div>
          <section className="p-6 my-6 shadow-xl w-full h-auto rounded-xl dark:bg-primaryDark bg-primaryLight dark:text-primaryLight text-primaryDark">
            {theme === "light" ? (
              <BiMoon
                // @ts-ignore
                className="cursor-pointer text-4xl"
                onClick={toggleTheme}
              />
            ) : (
              <BiSun
                // @ts-ignore
                className="cursor-pointer text-4xl"
                onClick={toggleTheme}
              />
            )}
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default Setting;
