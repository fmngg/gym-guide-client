import Button from '@/UI/Button';
import React from 'react';
import styles from './MenuItem.module.scss';

type Props = {
  title: string;
  description: string;
  img: string;
};

const MenuItem = ({ title, description, img }: Props) => {
  return (
    <div className={styles.homeMenuItem}>
      <img src={img} alt={title} />
      <div className={styles.text}>
        <h1>{title}</h1>
        <div className={styles.description}>
          <p>{description}</p>
          {/* <Button>See More</Button> */}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
