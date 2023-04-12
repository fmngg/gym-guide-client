import Image from "next/image";
import React from "react";
import styles from "./Exercise.module.scss";
import img from "@/assets/home/cable-cross-over.gif";
import { MdStar, MdRemoveRedEye } from "react-icons/md";

type Props = {
  title: string;
  views: number;
  rating: number;
};

const Exercise = ({ views, rating, title }: Props) => {
  return (
    <div className={styles.exerciseItem}>
      <div className={styles.image}>
        <p>Chest</p>
        <Image alt="hello" src={img} fill={true} />
      </div>
      <div className={styles.content}>
        <div className={styles.stats}>
          <p>
            {views} <MdRemoveRedEye className={styles.icon} />
          </p>
          <p>
            {rating} <MdStar className={styles.icon} />
          </p>
        </div>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </div>
  );
};

export default Exercise;
