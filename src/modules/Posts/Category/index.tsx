import { FC } from 'react';
import styles from './Category.module.scss';

const Category: FC = () => {
  return (
    <div className={styles.categoryHeader}>
      <h1># Здоровье</h1>
    </div>
  );
};

export default Category;
