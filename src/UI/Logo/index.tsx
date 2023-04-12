import React from "react";
import styles from "./Logo.module.scss";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div className={styles.logo}>
      <p className={styles.regular}>GYM</p>
      <p className={styles.bold}>GUIDE</p>
    </div>
  );
};

export default Logo;
