import { Api } from '@/core/api';
import { useAppSelector } from '@/redux/hooks';
import { selectUserData } from '@/redux/slices/user';
import React, { FC, useEffect } from 'react';
import styles from './Rating.module.scss';

type Props = {
  id: number;
  rating: { id: number; rate: number; userId: number; exerciseId: number; createdAt: string }[];
};

const rateList = [
  {
    rate: 1,
    emoji: '🤢',
  },
  {
    rate: 2,
    emoji: '🙁',
  },
  {
    rate: 3,
    emoji: '😐',
  },
  {
    rate: 4,
    emoji: '🙂',
  },
  {
    rate: 5,
    emoji: '😍',
  },
];

const Rating: FC<Props> = ({ rating, id }) => {
  const [isActive, setIsActive] = React.useState(-1);
  const userData = useAppSelector(selectUserData);

  useEffect(() => {
    rating.forEach((obj) => {
      if (obj.userId === userData?.id) {
        setIsActive(obj.rate);
      }
    });
  }, [userData]);

  const onClick = async (objId: number) => {
    if (isActive !== objId) {
      await Api().exercise.rate(id, objId);
      setIsActive(objId);
    }
  };

  if (!userData) {
    return (
      <div className={styles.error}>
        <p>Sign in to add to favoutires and rate</p>
      </div>
    );
  }

  return (
    <div className={styles.rating}>
      {rateList.map((obj) => (
        <div
          onClick={() => onClick(obj.rate)}
          key={obj.rate}
          className={
            isActive === obj.rate ? `${styles.rateBlock} ${styles.active}` : `${styles.rateBlock}`
          }>
          {obj.emoji}
        </div>
      ))}
    </div>
  );
};

export default Rating;
