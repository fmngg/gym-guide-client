import React, { FC, PropsWithChildren } from "react";

import styles from "./Button.module.scss";

type Props = {};

const Button: FC<PropsWithChildren> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
