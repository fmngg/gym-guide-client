import MainLayout from "@/layouts/MainLayout";
import Image from "next/image";
import React from "react";
import styles from "./ExerciseContent.module.scss";
import img from "@/assets/home/cable-cross-over.gif";
import { MdStar, MdRemoveRedEye, MdArrowBack } from "react-icons/md";
import RecommendedPosts from "@/modules/RecommendedPosts";
import Link from "next/link";
import Rating from "./Rating";
type Props = {};

const ExerciseContent = (props: Props) => {
  return (
    <div className={styles.exercisePage}>
      <Link href="/exercises">
        <MdArrowBack className={styles.arrow} />
      </Link>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h1>
            История о том, как наш новый тимлид нифига не зная стал тимлидом
          </h1>
          <div className={styles.info}>
            <div className={styles.infoLeft}>
              <p className={styles.category}>Chest</p>
              <div className={styles.stats}>
                <p>100 </p>
                <MdRemoveRedEye />
                <p>5 </p>
                <MdStar />
              </div>
            </div>
          </div>
          <div className={styles.video}>
            <p>Recommended for viewing</p>
            <iframe
              src="https://www.youtube.com/embed/cXWGpsszhpE"
              allowFullScreen
            ></iframe>
          </div>
          <Rating />
        </div>
        <div className={styles.headerRight}>
          <div className={styles.image}>
            <Image alt="hello" src={img} fill={true} />
          </div>
        </div>
      </div>
      <div className={styles.content}>text</div>
    </div>
  );
};

export default ExerciseContent;
