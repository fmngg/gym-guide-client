import Input from '@/UI/Input';
import Selector from '@/UI/Selector';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { MdOutlineSearch, MdFilterAlt, MdOutlineReport } from 'react-icons/md';
import FilterDrawer from './FilterDrawer';
import styles from './FilterBar.module.scss';
import { Сharacteristic } from '@/core/api/dto';

type Props = {
  selectorList: string[];
  filterList?: IFilter[];
  setSort: Dispatch<SetStateAction<string>>;
  sort: string;
  setTitle: Dispatch<SetStateAction<string>>;
  title?: string;
  setEquipment?: Dispatch<SetStateAction<number>>;
  setDifficulty?: Dispatch<SetStateAction<number>>;
  setMuscleGroup?: Dispatch<SetStateAction<number>>;
};

export interface IFilter {
  id: number;
  title: string;
  items: Сharacteristic[];
}

const FIlterBar = ({
  selectorList,
  filterList,
  title,
  sort,
  setTitle,
  setSort,
  setEquipment,
  setDifficulty,
  setMuscleGroup,
}: Props) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isFilterActive, setIsFilterActive] = useState(false);

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode == 13) {
      setTitle(event.currentTarget.value);
    }
  };

  return (
    <div className={styles.filter}>
      <div className={styles.filterLeft}>
        <Input
          value={inputValue}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder="Search..."
        />
        <MdOutlineSearch onClick={() => setTitle(inputValue)} className={styles.button} />
        {filterList && (
          <>
            <MdFilterAlt onClick={() => setIsFilterOpen(!isFilterOpen)} className={styles.button} />
            {isFilterActive ? <MdOutlineReport className={styles.warning} /> : null}
          </>
        )}
      </div>
      <div className={styles.filterRight}>
        <div>
          <Selector sort={sort} setSort={setSort} selectorList={selectorList} />
        </div>
      </div>
      {filterList && (
        <FilterDrawer
          setIsFilterActive={setIsFilterActive}
          setIsFilterOpen={setIsFilterOpen}
          isFilterOpen={isFilterOpen}
          filterList={filterList}
          setEquipment={setEquipment}
          setDifficulty={setDifficulty}
          setMuscleGroup={setMuscleGroup}
        />
      )}
    </div>
  );
};

export default FIlterBar;
