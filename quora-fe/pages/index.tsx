import type { NextPage } from "next";
import { Button } from "../src/components/button/Button";
import { Layout } from "../src/components/Layout/Layout";
import Loading from "../src/components/loading/Loading";
import { BiBook } from "react-icons/bi";
import styles from "../styles/Home.module.css";
import { QuestionCard } from "../src/components/QuestionCard/QuestionCard";
import { OpinionCard } from "../src/components/OpinionCard/OpinionCard";

const Home: NextPage = () => {
  return (
    <div className="dark:bg-primaryDark bg-primaryLight">
      <Layout>
        <div className="p-6 sm:px-10 sm:py-10 overflow-x-hidden h-screen w-screen mx-auto shadow-inner dark:bg-secondaryDark text-primaryLight bg-secondaryLight">
          {/* <Modal /> */}
          <form>
            <div className="flex items-center px-4 dark:bg-primaryDark bg-primaryLight rounded-xl ">
              <BiBook
                // @ts-ignore
                className="text-3xl sm:text-4xl dark:text-primaryLight text-indigo"
              />
              <input
                className="px-4 font-extrabold text-md sm:text-xl py-5 w-full dark:bg-primaryDark bg-primaryLight  border-0 outline-none"
                type="text"
                placeholder="What's your question?"
              />
              <Button
                variant="primary"
                color="indigo"
                className="hidden sm:inline py-2 px-6 rounded-md shadow-2xl"
                type="submit"
              >
                Post
              </Button>
            </div>
          </form>
          <Loading />
          <QuestionCard />
          <OpinionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <div className="px-10 my-20">
            <p
              className="w-3/4 mx-auto border-t-0 leading-3 my-10 text-center text-lightGray bg-lightGray"
              style={{ lineHeight: "0.1rem" }}
            >
              <span className="bg-secondaryLight px-4 dark:bg-secondaryDark">
                No Questions
              </span>
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
