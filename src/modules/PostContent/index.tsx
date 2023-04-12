import MainLayout from "@/layouts/MainLayout";
import Image from "next/image";
import React from "react";
import styles from "./PostContent.module.scss";
import img from "@/assets/home/postsImg.jpg";
import { MdModeComment, MdRemoveRedEye, MdArrowBack } from "react-icons/md";
import RecommendedPosts from "@/modules/RecommendedPosts";
import Link from "next/link";
type Props = {};

const PostContent = (props: Props) => {
  return (
    <div className={styles.postPage}>
      <Link href="/posts">
        <MdArrowBack className={styles.arrow} />
      </Link>
      <h1>История о том, как наш новый тимлид нифига не зная стал тимлидом</h1>
      <div className={styles.info}>
        <div className={styles.infoLeft}>
          <p className={styles.category}># Здоровье</p>
          <div className={styles.stats}>
            <p>100 </p>
            <MdRemoveRedEye />
            <p>5 </p>
            <MdModeComment />
          </div>
        </div>
        <p>04.04.2023</p>
      </div>
      <div className={styles.image}>
        <Image alt="hello" src={img} fill={true} />
      </div>
      <div>text</div>
    </div>
  );
};

export default PostContent;
