import type { NextPage } from "next";
import { Layout } from "../src/components/Layout/Layout";

const Bookmark: NextPage = () => {
  return (
    <div>
      <Layout>
        <h1 className="text-indigo text-3xl font-bold underline">
          Bookmarks page
        </h1>
      </Layout>
    </div>
  );
};

export default Bookmark;
