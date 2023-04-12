import Input from "@/UI/Input";
import Selector from "@/UI/Selector";
import React from "react";
import { MdOutlineSearch, MdSettings } from "react-icons/md";
import styles from "./FilterBar.module.scss";

type Props = {
  selectorList: string[][];
};

const FIlterBar = ({ selectorList }: Props) => {
  return (
    <div className={styles.filter}>
      <div className={styles.filterLeft}>
        <Input placeholder="Search..." />
        <MdOutlineSearch className={styles.searchButton} />
      </div>
      <div className={styles.filterRight}>
        {selectorList.map((obj, index) => (
          <div>
            <Selector selectorList={selectorList[index]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FIlterBar;
