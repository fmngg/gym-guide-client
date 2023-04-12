import Image from "next/image";
import React from "react";
import styles from "./Post.module.scss";
import img from "@/assets/home/postsImg.jpg";
import { MdModeComment, MdRemoveRedEye } from "react-icons/md";

type Props = {
  isFirst: boolean;
  isRecommended: boolean;
  title: string;
  views: number;
  comments: number;
};

const Post = ({ isRecommended, isFirst, title, views, comments }: Props) => {
  if (isRecommended) {
    return (
      <div className={styles.recommendedPost}>
        <div className={styles.image}>
          <Image alt="hello" src={img} fill={true} />
        </div>
        <h1 className={styles.title}>{title}</h1>
      </div>
    );
  }

  return (
    <div className={isFirst ? `${styles.firstPost}` : `${styles.postItem}`}>
      <div className={styles.image}>
        <Image alt="hello" src={img} fill={true} />
      </div>
      <div className={styles.content}>
        <div className={styles.stats}>
          <div>
            <p>{views}</p> <MdRemoveRedEye />
          </div>
          <div>
            <p>{comments}</p> <MdModeComment />
          </div>
        </div>
        <div className={styles.category}>
          <p># Здоровье</p>
        </div>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </div>
  );
};

export default Post;
