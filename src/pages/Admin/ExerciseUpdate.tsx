import Loader from '@/components/Loader';
import { Api } from '@/core/api';
import { ExerciseDto } from '@/core/api/dto';
import ExerciseCreation from '@/modules/Admin/ExerciseCreation';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ExerciseUpdatePage: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [exerciseData, setExerciseData] = useState<ExerciseDto | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercise = async () => {
      return await Api().exercise.getOne(Number(id));
    };
    fetchExercise()
      .then(async (data) => {
        setExerciseData(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(true));
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return <ExerciseCreation id={id} isEdit={true} exerciseData={exerciseData} />;
};

export default ExerciseUpdatePage;
