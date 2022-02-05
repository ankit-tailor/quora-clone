import type { NextPage } from "next";
import { Layout } from "../src/components/Layout/Layout";

const Setting: NextPage = () => {
  return (
    <div>
      <Layout>
        <h1 className="text-indigo text-3xl font-bold underline">
          Settings page
        </h1>
      </Layout>
    </div>
  );
};

export default Setting;
