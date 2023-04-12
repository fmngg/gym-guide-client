import React from "react";
import styles from "./Rating.module.scss";

type Props = {};

const rateList = [
  {
    emoji: "🤢",
    color: "#f07167",
  },
  {
    emoji: "🙁",
    color: "#fe7f2d",
  },
  {
    emoji: "😐",
    color: "#fcca46",
  },
  {
    emoji: "🙂",
    color: "#a1c181",
  },
  {
    emoji: "😍",
    color: "#619b8a",
  },
];

const Rating = (props: Props) => {
  const [isActive, setIsActive] = React.useState(1);

  return (
    <div className={styles.rating}>
      {rateList.map((obj, index) => (
        <div
          onClick={() => {
            setIsActive(index);
          }}
          style={{ backgroundColor: obj.color }}
          key={index}
          className={
            isActive === index
              ? `${styles.rateBlock} ${styles.active}`
              : `${styles.rateBlock}`
          }
        >
          {obj.emoji}
        </div>
      ))}
    </div>
  );
};

export default Rating;
