import React, { FC, PropsWithChildren } from "react";

import styles from "./AuthLayout.module.scss";

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div style={{ display: "flex", flex: "auto", flexDirection: "column" }}>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
