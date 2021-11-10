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
import { useMenu } from "../hooks/useMenu";

const HOME = "home";
const ALERT = "alert";
const LISTS = "lists";
const STATS = "stats";
const WRITE = "write";

const Home: NextPage = () => {
  const { menu, setMenu } = useMenu();

  return (
    <div className={" max-w-screen h-screen"}>
      <Head>
        <title>Medium Blog</title>
        <meta name="description" content="blog posts about programming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={"grid grid-cols-4 max-w-7xl mx-auto text-xl font-bold"}>
        <Menu>
          <MenuItem
            icon={HomeIcon}
            id={HOME}
            label="Home"
            isSelected={menu === HOME}
            setSelected={setMenu}
          />
          <MenuItem
            icon={AlertIcon}
            id={ALERT}
            label="Notifications"
            isSelected={menu === ALERT}
            setSelected={setMenu}
          />
          <MenuItem
            icon={ListIcon}
            id={LISTS}
            label="Lists"
            isSelected={menu === LISTS}
            setSelected={setMenu}
          />
          <MenuItem
            icon={StatsIcon}
            id={STATS}
            label="Stats"
            isSelected={menu === STATS}
            setSelected={setMenu}
          />
          <MenuItem
            icon={WriteIcon}
            id={WRITE}
            label="Write"
            isSelected={menu === WRITE}
            setSelected={setMenu}
          />
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
