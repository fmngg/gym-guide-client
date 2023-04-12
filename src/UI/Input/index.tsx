import React from "react";
import styles from "./Input.module.scss";

type Props = {
  placeholder: string;
  value?: string;
  onChange?: any;
};

const Input = ({ placeholder, value, onChange }: Props) => {
  return (
    <input
      value={value}
      className={styles.input}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
