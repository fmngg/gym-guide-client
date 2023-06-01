import React, { Dispatch, FC, SetStateAction } from 'react';
import styles from './Selector.module.scss';
import { MdKeyboardArrowDown } from 'react-icons/md';

type Props = {
  selectorList: string[];
  sort: string;
  setSort: Dispatch<SetStateAction<string>>;
};

const Selector: FC<Props> = ({ selectorList, sort, setSort }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const openSelector = () => {
    setIsOpen(!isOpen);
  };

  const selectItem = (obj: string) => {
    setSort(obj);
    setIsOpen(false);
  };

  return (
    <div className={isOpen ? `${styles.selector} ${styles.selectorActive}` : `${styles.selector}`}>
      <div className={styles.selectorTitle} onClick={openSelector}>
        <p>{sort}</p>
        <MdKeyboardArrowDown className={styles.arrow} />
      </div>
      <ul className={styles.selectorMenu}>
        {selectorList.map((obj, index) => (
          <li key={index} onClick={() => selectItem(obj)}>
            {obj}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;
