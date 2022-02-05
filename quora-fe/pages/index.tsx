import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Layout } from "../src/components/Layout/Layout";
import BottomNavbar from "../src/components/Navbar/BottomNavbar/BottomNavbar";
import { Sidebar } from "../src/components/Navbar/Sidebar/Sidebar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <h1 className="text-indigo text-3xl font-bold underline">
          Hello world!
        </h1>
      </Layout>
    </div>
  );
};

export default Home;
