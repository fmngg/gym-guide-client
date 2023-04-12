import AuthLayout from "@/layouts/AuthLayout";
import Button from "@/UI/Button";
import Input from "@/UI/Input";
import Link from "next/link";
import React from "react";
import styles from "../AuthPage.module.scss";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <AuthLayout>
      <div className={styles.registerPage}>
        <h1>Login</h1>
        <div className={styles.redirectLabel}>
          <p>Don't have an account yet?</p>
          <Link href="/auth/register">
            <p className={styles.redirect}>Sign Up</p>
          </Link>
        </div>
        <form className={styles.register}>
          <ul>
            <li>
              <Input placeholder="email" />
            </li>
            <li>
              <Input placeholder="password" />
            </li>
          </ul>
          <Button>Sign In</Button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
