import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { AlertIcon } from "../components/AlertIcon";
import { ArticleItem } from "../components/ArticleItem";
import { Articles, data } from "../components/Articles";
import { HomeIcon } from "../components/HomeIcon";
import { ListIcon } from "../components/ListIcon";
import { Menu } from "../components/Menu";
import { MenuItem } from "../components/MenuItem";
import { StatsIcon } from "../components/StatsIcon";
import { WriteIcon } from "../components/WriteIcon";

const Home: NextPage = () => {
  return (
    <div className={" max-w-screen h-screen"}>
      <Head>
        <title>Jerboas86 Blog</title>
        <meta name="description" content="blog posts about programming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={
          "grid grid-cols-4 bg-gray-100 max-w-5xl h-full mx-auto text-xl font-bold"
        }
      >
        <Menu>
          <MenuItem icon={HomeIcon} name="Home" isSelected={true} />
          <MenuItem icon={AlertIcon} name="Notifications" />
          <MenuItem icon={ListIcon} name="Lists" />
          <MenuItem icon={StatsIcon} name="Stats" />
          <MenuItem icon={WriteIcon} name="Write" />
        </Menu>
        <Articles>
          <ArticleItem {...data[0]} />
          <ArticleItem {...data[1]} />
          <ArticleItem {...data[2]} />
          <ArticleItem {...data[3]} />
        </Articles>
      </div>
    </div>
  );
};

export default Home;
