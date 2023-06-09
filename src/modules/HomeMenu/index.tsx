import React from "react";
import MenuItem from "./MenuItem";
import styles from "./HomeMenu.module.scss";
import postsImg from "@/assets/home/postsImg.jpg";
import exerciseImg from "@/assets/home/программа-тренировок-в-тренажерном-зале-для-мужчин.jpg";
import Link from "next/link";

type Props = {};

const menuItems = [
  {
    id: 1,
    title: "Posts",
    description:
      "We hold our articles to the highest editorial standards by conducting original reporting, citing recent and relevant research and providing full context to ensure readers have all the facts they need to make important decisions about their health.",
    img: postsImg,
    href: "/posts",
  },
  {
    id: 2,
    title: "Workout Exercises",
    description:
      "A section with a large number of different types of exercises with different equipment for people with different levels of training",
    img: exerciseImg,
    href: "/exercises",
  },
];

const HomeMenu = (props: Props) => {
  return (
    <div className={styles.homeMenu}>
      {menuItems.map((obj) => (
        <Link href={obj.href}>
          <MenuItem key={obj.id} {...obj} />
        </Link>
      ))}
    </div>
  );
};

export default HomeMenu;
