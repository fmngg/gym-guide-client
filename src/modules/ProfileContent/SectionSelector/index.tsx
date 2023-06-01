import { AuthResponse } from '@/core/api/dto';
import Button from '@/UI/Button';
import React, { FC, useEffect } from 'react';
import { SectionSelectorContext } from '..';
import styles from './SectionSelector.module.scss';

type Props = {
  userData: AuthResponse | null;
};

let sectionList = [
  { name: 'Favourites', id: 1 },
  { name: 'Comments', id: 2 },
];

const SectionSelector: FC<Props> = ({ userData }) => {
  const { selectedItem, setSelectedItem } = React.useContext(SectionSelectorContext);

  useEffect(() => {
    userData && userData.role === 'ADMIN'
      ? (sectionList = [
          { name: 'Favourites', id: 1 },
          { name: 'Comments', id: 2 },
          { name: 'Create', id: 3 },
        ])
      : (sectionList = [
          { name: 'Favourites', id: 1 },
          { name: 'Comments', id: 2 },
        ]);
  }, []);

  return (
    <div className={styles.sectionSelector}>
      {sectionList.map((obj) => (
        <Button
          isActive={obj.id === selectedItem ? true : false}
          key={obj.id}
          onClick={() => setSelectedItem(obj.id)}>
          {obj.name}
        </Button>
      ))}
    </div>
  );
};

export default SectionSelector;
