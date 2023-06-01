import Loader from '@/components/Loader';
import { Api } from '@/core/api';
import { ExerciseDto } from '@/core/api/dto';
import MainLayout from '@/layouts/MainLayout';
import ExerciseContent from '@/modules/ExerciseContent';
import { FC, useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { useParams } from 'react-router-dom';

const ExercisePage: FC = () => {
  const [exerciseData, setExerciseData] = useState<ExerciseDto | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercises = async () => {
      return await Api().exercise.getOne(Number(id));
    };
    fetchExercises()
      .then((data) => {
        setExerciseData(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(true));
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {exerciseData ? (
        <MainLayout>
          <Helmet
            htmlAttributes={{ lang: 'en' }}
            title={exerciseData ? exerciseData.name : 'Exercise'}
            titleTemplate="GymGuide | %s"
            defaultTitle="GymGuide"
            meta={[
              {
                name: 'description',
                content: exerciseData ? exerciseData.name : 'Exercise',
              },
            ]}
          />
          <ExerciseContent {...exerciseData} />
        </MainLayout>
      ) : (
        <h1>Unhandled Error</h1>
      )}
    </>
  );
};

export default ExercisePage;
