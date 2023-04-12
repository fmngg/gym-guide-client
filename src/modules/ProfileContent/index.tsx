import React, { SetStateAction } from "react";
import styles from "./ProfileContent.module.scss";
import img from "@/assets/home/postsImg.jpg";
import Image from "next/image";
import SectionSelector from "./SectionSelector";
import Favourites from "./Favourites";
import Comments from "./Comments";

type Props = {};

interface SectionSelectorContext {
  selectedItem: number;
  setSelectedItem: React.Dispatch<SetStateAction<number>>;
}

export const SectionSelectorContext =
  React.createContext<SectionSelectorContext>({
    selectedItem: 0,
    setSelectedItem: () => {},
  });

const ProfileContent = (props: Props) => {
  const [selectedItem, setSelectedItem] = React.useState(0);
  return (
    <div className={styles.profile}>
      <div className={styles.info}>
        <div className={styles.image}>
          <Image alt="hello" src={img} fill={true} />
        </div>
        <h1>UserName</h1>
      </div>
      <SectionSelectorContext.Provider
        value={{ selectedItem, setSelectedItem }}
      >
        <SectionSelector />
      </SectionSelectorContext.Provider>
      {selectedItem === 0 ? <Favourites /> : null}
      {selectedItem === 1 ? <Comments /> : null}
    </div>
  );
};

export default ProfileContent;
