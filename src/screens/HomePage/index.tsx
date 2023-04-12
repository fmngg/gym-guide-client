import MainLayout from "@/layouts/MainLayout";
import React from "react";

import styles from "./HomePage.module.scss";
import MenuItem from "../../modules/HomeMenu/MenuItem";
import HomeMenu from "@/modules/HomeMenu";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <MainLayout>
      <HomeMenu />
    </MainLayout>
  );
};

export default HomePage;
