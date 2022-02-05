import type { NextPage } from "next";
import { Layout } from "../src/components/Layout/Layout";

const Profile: NextPage = () => {
  return (
    <div>
      <Layout>
        <h1 className="text-indigo text-3xl font-bold underline">
          Profile page
        </h1>
      </Layout>
    </div>
  );
};

export default Profile;
