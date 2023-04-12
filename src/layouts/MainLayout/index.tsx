import React, { FC, PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./MainLayout.module.scss";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div style={{ display: "flex", flex: "auto", flexDirection: "column" }}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
