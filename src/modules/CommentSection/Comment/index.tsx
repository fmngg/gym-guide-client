import React from "react";
import img from "@/assets/home/postsImg.jpg";
import styles from "./Comment.module.scss";
import Image from "next/image";

type Props = {};

const Comment = (props: Props) => {
  return (
    <div className={styles.comment}>
      <div className={styles.commentUpper}>
        <div className={styles.image}>
          <Image alt="hello" src={img} fill={true} />
        </div>
        <p className={styles.name}>Name</p>
      </div>
      <p className={styles.content}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa,
        reprehenderit nam possimus in maxime inventore animi odio eum iste fuga,
        alias velit reiciendis eligendi autem doloremque libero laboriosam
        aliquam. Aliquid?
      </p>
    </div>
  );
};

export default Comment;
