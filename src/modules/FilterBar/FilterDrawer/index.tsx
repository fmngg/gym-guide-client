import React, { SetStateAction } from 'react';
import styles from './FilterDrawer.module.scss';
import { MdOutlineClose } from 'react-icons/md';
import Items from './Items';
import Button from '@/UI/Button';
import { IFilter } from '..';

type Props = {
  filterList: IFilter[];
  isFilterOpen: SetStateAction<boolean>;
  setIsFilterOpen: React.Dispatch<SetStateAction<boolean>>;
  setEquipment?: React.Dispatch<SetStateAction<number>>;
  setDifficulty?: React.Dispatch<SetStateAction<number>>;
  setMuscleGroup?: React.Dispatch<SetStateAction<number>>;
  setIsFilterActive: React.Dispatch<SetStateAction<boolean>>;
};

const FilterDrawer = ({
  filterList,
  isFilterOpen,
  setIsFilterActive,
  setIsFilterOpen,
  setEquipment,
  setDifficulty,
  setMuscleGroup,
}: Props) => {
  const [selectedDifficulty, setSelectedDifficulty] = React.useState(0);
  const [selectedEquipment, setselectedEquipment] = React.useState(0);
  const [selectedMuscleGroup, setSelectedMuscleGroup] = React.useState(0);

  const onClick = () => {
    setEquipment && setEquipment(selectedEquipment);
    setDifficulty && setDifficulty(selectedDifficulty);
    setMuscleGroup && setMuscleGroup(selectedMuscleGroup);
    setIsFilterOpen && setIsFilterOpen(false);

    if (selectedDifficulty !== 0 || selectedEquipment !== 0 || selectedMuscleGroup !== 0) {
      setIsFilterActive(true);
    } else setIsFilterActive(false);
  };

  return (
    <div className={`${styles.overlay} ${isFilterOpen ? styles.overlayVisible : ''}`}>
      <div className={styles.drawer}>
        <div className={styles.drawerHeader}>
          <MdOutlineClose className={styles.close} onClick={() => setIsFilterOpen(!isFilterOpen)} />
        </div>
        {filterList.map((obj, index) => (
          <div key={index} className={styles.section}>
            <div className={styles.title}>
              <p>{obj.title}</p>
              <div></div>
            </div>
            {obj.title === 'Difficulty' ? (
              <Items
                selectedItem={selectedDifficulty}
                setSelectedItem={setSelectedDifficulty}
                items={obj.items}
              />
            ) : null}
            {obj.title === 'Equipment' ? (
              <Items
                selectedItem={selectedEquipment}
                setSelectedItem={setselectedEquipment}
                items={obj.items}
              />
            ) : null}
            {obj.title === 'Muscle group' ? (
              <Items
                selectedItem={selectedMuscleGroup}
                setSelectedItem={setSelectedMuscleGroup}
                items={obj.items}
              />
            ) : null}
          </div>
        ))}
        <Button onClick={onClick}>Accept</Button>
      </div>
    </div>
  );
};

export default FilterDrawer;
