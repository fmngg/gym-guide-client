import { FC } from 'react';
import styles from './Exercise.module.scss';
import img from '@/assets/no-image.png';
import { MdStar, MdRemoveRedEye } from 'react-icons/md';
import { ExerciseDto } from '@/core/api/dto';

type Props = {
  exercise: ExerciseDto;
  isFavourite: boolean;
};

const Exercise: FC<Props> = ({ exercise, isFavourite }) => {
  return (
    <div className={styles.exerciseItem}>
      <div className={styles.image}>
        {!isFavourite && (
          <div className={styles.info}>
            <p>{exercise.muscleGroup.name}</p>
            <p>{exercise.difficulty.name}</p>
            <p>{exercise.equipment.name}</p>
          </div>
        )}
        <img
          alt={exercise.name}
          src={exercise.image}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = img;
          }}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.stats}>
          <p>
            {exercise.views} <MdRemoveRedEye className={styles.icon} />
          </p>
          <p>
            {Number(exercise.avgRating).toFixed(1)} <MdStar className={styles.icon} />
          </p>
        </div>
        <h1 className={styles.title}>{exercise.name}</h1>
      </div>
    </div>
  );
};

export default Exercise;
