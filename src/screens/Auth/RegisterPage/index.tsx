import AuthLayout from "@/layouts/AuthLayout";
import Button from "@/UI/Button";
import Input from "@/UI/Input";
import React from "react";
import styles from "../AuthPage.module.scss";
import { MdPhoto, MdCancel } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const RegisterPage = (props: Props) => {
  const [img, setImg] = React.useState("");

  const handleImgInput = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const file: any = target.files === null ? "" : target.files[0];
    setImg(URL.createObjectURL(file));
  };

  const handleChangeName = (event: any) => {
    setValue({ ...value, name: event.target.value });
  };

  const clearImg = () => {
    setImg("");
  };

  const [value, setValue] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <AuthLayout>
      <div className={styles.registerPage}>
        <h1>Register</h1>
        <div className={styles.redirectLabel}>
          <p>Already have an account?</p>
          <Link href="/auth/login">
            <p className={styles.redirect}>Sign In</p>
          </Link>
        </div>
        <form className={styles.register}>
          {img ? (
            <div className={`${styles.activeImage}`}>
              <div className={styles.inputtedImage}>
                <Image alt={img} src={img} fill={true} />
                <div onClick={clearImg}>
                  <MdCancel className={styles.cross} />
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.image}>
              <input
                className={styles.input}
                type="file"
                onChange={handleImgInput}
                accept="image/jpeg,image/png"
              />
              <MdPhoto className={styles.noImage} />
            </div>
          )}

          <ul>
            <li>
              <Input
                placeholder="name"
                onChange={handleChangeName}
                value={value.name}
              />
            </li>
            <li>
              <Input placeholder="email" />
            </li>
            <li>
              <Input placeholder="password" />
            </li>
          </ul>
          <Button>Sign Up</Button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;
