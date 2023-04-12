import React from "react";
import styles from "./Selector.module.scss";
import { MdKeyboardArrowDown } from "react-icons/md";

type Props = {
  selectorList: string[];
};

const Selector = ({ selectorList }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(selectorList[0]);

  const openSelector = () => {
    setIsOpen(!isOpen);
  };

  const selectItem = (obj: string) => {
    setSelectedItem(obj);
    setIsOpen(false);
  };

  return (
    <div
      className={
        isOpen
          ? `${styles.selector} ${styles.selectorActive}`
          : `${styles.selector}`
      }
    >
      <div className={styles.selectorTitle} onClick={openSelector}>
        <p>{selectedItem}</p>
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
