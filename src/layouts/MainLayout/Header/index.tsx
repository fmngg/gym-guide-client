import Logo from "@/UI/Logo";
import React from "react";
import styles from "./Header.module.scss";
import { MdOutlineLogin } from "react-icons/md";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Logo />
      </Link>
      <Link href="/auth/register">
        <MdOutlineLogin className={styles.button} />
      </Link>
    </header>
  );
};

export default Header;
