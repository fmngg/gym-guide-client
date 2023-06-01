import { FC } from 'react';
import styles from './Logo.module.scss';

const Logo: FC = () => {
  return (
    <div className={styles.logo}>
      <p className={styles.regular}>GYM</p>
      <p className={styles.bold}>GUIDE</p>
    </div>
  );
};

export default Logo;
