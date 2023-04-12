import Input from "@/UI/Input";
import { MdSend } from "react-icons/md";
import styles from "./CommentInput.module.scss";
import React from "react";

type Props = {};

const CommentInput = (props: Props) => {
  return (
    <div className={styles.commentInput}>
      <Input placeholder="Write your opinion" />
      <MdSend className={styles.send} />
    </div>
  );
};

export default CommentInput;
