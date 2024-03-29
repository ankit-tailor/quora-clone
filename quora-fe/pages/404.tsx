import type { NextPage } from "next";
import { Layout } from "../src/components/Layout/Layout";

const NotFound: NextPage = () => {
  return (
    <div>
      <Layout>
        <h1 className="text-indigo text-3xl font-bold underline">Not found</h1>
      </Layout>
    </div>
  );
};

export default NotFound;
