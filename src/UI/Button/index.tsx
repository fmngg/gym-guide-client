import { FC, ReactNode } from 'react';

import styles from './Button.module.scss';

type Props = {
  children: ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: any;
  isActive?: boolean;
};

const Button: FC<Props> = ({ children, disabled, type, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      type={type ? type : 'button'}
      disabled={disabled}
      className={`${styles.button} ${isActive && styles.active}`}>
      {children}
    </button>
  );
};

export default Button;
