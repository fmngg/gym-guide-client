import React from "react";
import styles from "./TextArea.module.scss";

type Props = {};

const TextArea = (props: Props) => {
  return (
    <textarea disabled className={styles.textarea}>
      TextArea
    </textarea>
  );
};

export default TextArea;
