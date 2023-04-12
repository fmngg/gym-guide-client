import React from "react";
import styles from "./Category.module.scss";

type Props = {};

const Category = (props: Props) => {
  return (
    <div className={styles.categoryHeader}>
      <h1># Здоровье</h1>
    </div>
  );
};

export default Category;
