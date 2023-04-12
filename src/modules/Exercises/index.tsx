import Link from "next/link";
import React from "react";
import Exercise from "./Exercise";
import styles from "./Exercises.module.scss";

type Props = {};

const exerciseList = [
  {
    id: 1,
    title: "История о том, как наш новый тимлид нифига не зная стал тимлидом",
    views: 109,
    rating: 5,
  },
  {
    id: 2,
    title: "Как с помощью Dadata определить город по IP?",
    views: 200,
    rating: 4,
  },
  {
    id: 3,
    title: "Мои темы и плагины для VS Code на 2019 год",
    views: 75,
    rating: 3,
  },
  {
    id: 4,
    title: "hello hello hello",
    views: 101,
    rating: 1,
  },
  {
    id: 5,
    title: "hello hello hello",
    views: 100,
    rating: 0,
  },
];

const Exercises = (props: Props) => {
  return (
    <div className={styles.exercises}>
      {exerciseList.map((obj) => (
        <Link href={`/exercises/${obj.id}`}>
          <Exercise key={obj.id} {...obj} />
        </Link>
      ))}
    </div>
  );
};

export default Exercises;
