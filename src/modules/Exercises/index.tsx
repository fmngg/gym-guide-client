import { FC, useEffect, useState } from 'react';
import styles from './Exercises.module.scss';
import { Link } from 'react-router-dom';
import { Api } from '@/core/api';
import Loader from '@/components/Loader';
import { ExercisesDto } from '@/core/api/dto';
import Search from '@/components/Search';
import Exercise from '@/components/Exercise';
import Pagination from '@/components/Pagination';

type Props = {
  title: string;
  sort: string;
  equipment: number;
  difficulty: number;
  muscleGroup: number;
};

const Exercises: FC<Props> = ({ title, sort, muscleGroup, difficulty, equipment }) => {
  const [exercisesData, setExercisesData] = useState<ExercisesDto | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(true);
  const [totalCount, setTotalCount] = useState<number>(0);
  useEffect(() => {
    const fetchPost = async () => {
      return await Api().exercise.getAll(
        sort,
        title,
        difficulty,
        equipment,
        muscleGroup,
        currentPage,
      );
    };
    fetchPost()
      .then(({ data, headers }) => {
        setExercisesData(data);
        setTotalCount(headers['x-total-count']);
        setIsLoading(false);
      })
      .catch(() => {
        setExercisesData(null);
      });
  }, [sort, title, difficulty, equipment, muscleGroup, currentPage]);

  if (isLoading) {
    return <Loader />;
  }

  if (!Array.isArray(exercisesData) || exercisesData.length === 0) {
    return <Search />;
  }

  return (
    <>
      <div className={styles.exercises}>
        {exercisesData.map((obj) => (
          <Link key={obj.id} to={`${obj.id}`}>
            <Exercise isFavourite={false} exercise={obj} />
          </Link>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalCount={totalCount}
      />
    </>
  );
};

export default Exercises;
