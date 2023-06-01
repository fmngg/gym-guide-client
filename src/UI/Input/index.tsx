import { FC } from 'react';
import styles from './Input.module.scss';

type Props = {
  placeholder: string;
  value?: string;
  onChange?: any;
  onKeyDown?: any;
  name?: string;
};

const Input: FC<Props> = ({ placeholder, value, onKeyDown, onChange, name }) => {
  return (
    <input
      name={name}
      value={value}
      className={styles.input}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

export default Input;
