import Logo from "@/UI/Logo";
import React from "react";
import styles from "./Footer.module.scss";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <p>Copyright © 2023 GymGuide. All rights reserved.</p>
      <div>Media</div>
    </footer>
  );
};

export default Footer;
