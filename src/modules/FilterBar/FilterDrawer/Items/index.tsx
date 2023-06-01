import styles from '../FilterDrawer.module.scss';
import { Сharacteristic } from '@/core/api/dto';
import { FC } from 'react';

type Props = {
  items: Сharacteristic[];
  selectedItem: number;
  setSelectedItem: any;
};

const Items: FC<Props> = ({ items, selectedItem, setSelectedItem }) => {
  const onClick = (id: number) => {
    if (selectedItem === id) {
      setSelectedItem(0);
    } else {
      setSelectedItem(id);
    }
  };

  return (
    <div className={styles.list}>
      {items.map((obj) => (
        <p
          key={obj.id}
          className={selectedItem === obj.id ? `${styles.selected}` : ''}
          onClick={() => onClick(obj.id)}>
          {obj.name}
        </p>
      ))}
    </div>
  );
};

export default Items;
