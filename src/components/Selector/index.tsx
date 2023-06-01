import { Сharacteristic } from '@/core/api/dto';
import { FC, useState } from 'react';
import styles from './Selector.module.scss';

type Props = {
  characteristic: Сharacteristic[] | null;
  value: number;
  setActive: any;
};

const Selector: FC<Props> = ({ characteristic, value, setActive }) => {
  return (
    <div className={styles.categorySelector}>
      {characteristic &&
        characteristic.map((obj) => (
          <div
            key={obj.id}
            className={`${styles.category} ${value === obj.id ? styles.active : ''}`}>
            ● <p onClick={() => setActive(obj.id)}>{obj.name}</p>
          </div>
        ))}
    </div>
  );
};

export default Selector;
