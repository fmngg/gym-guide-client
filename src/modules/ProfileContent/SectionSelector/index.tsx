import React from "react";
import { SectionSelectorContext } from "..";
import styles from "./SectionSelector.module.scss";

type Props = {};

const sectionList = ["Favourites", "Comments"];

const SectionSelector = (props: Props) => {
  const { selectedItem, setSelectedItem } = React.useContext(
    SectionSelectorContext
  );

  return (
    <div className={styles.sectionSelector}>
      {sectionList.map((obj, index) => (
        <p
          key={index}
          onClick={() => setSelectedItem(index)}
          className={
            selectedItem === index
              ? `${styles.section} ${styles.active}`
              : `${styles.section}`
          }
        >
          {obj}
        </p>
      ))}
    </div>
  );
};

export default SectionSelector;
