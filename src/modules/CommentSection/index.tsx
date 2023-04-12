import Input from "@/UI/Input";
import TextArea from "@/UI/TextArea";
import React from "react";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
import styles from "./CommentSection.module.scss";

type Props = {};

const CommentSection = (props: Props) => {
  return (
    <div className={styles.commentSection}>
      <h1 className={styles.title}>Comments: 10</h1>
      {[...Array(5)].map((obj) => (
        <Comment />
      ))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
