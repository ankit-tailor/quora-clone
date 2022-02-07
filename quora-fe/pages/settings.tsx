import type { NextPage } from "next";
import { useContext } from "react";
import { Button } from "../src/components/button/Button";
import { Layout } from "../src/components/Layout/Layout";
import { ThemeContext } from "../src/providers/ThemeProvider";

const Setting: NextPage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme, toggleTheme);

  return (
    <div className="dark:bg-primaryDark bg-primaryLight">
      <Layout>
        <div className="p-6 sm:px-10 sm:py-10 overflow-x-hidden h-screen w-screen mx-auto shadow-inner dark:bg-secondaryDark text-primaryLight bg-secondaryLight">
          <h1 className="text-indigo text-3xl font-bold underline">
            Settings page
          </h1>
          <Button
            variant="primary"
            color="indigo"
            className="sm:inline my-2 py-2 px-2 sm:px-6 rounded-md shadow-2xl"
            onClick={toggleTheme}
          >
            Dark mode
          </Button>
        </div>
      </Layout>
    </div>
  );
};

export default Setting;
