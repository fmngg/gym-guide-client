import { Api } from '@/core/api';
import MainLayout from '@/layouts/MainLayout';
import Exercises from '@/modules/Exercises';
import FIlterBar from '@/modules/FilterBar';
import { FC, useEffect, useState } from 'react';
import Helmet from 'react-helmet';

const selectorList = ['Newest', 'Popular', 'Rating'];

const ExercisesPage: FC = () => {
  const [filtersData, setFiltersData] = useState([]);
  const [title, setTitle] = useState('');
  const [equipment, setEquipment] = useState(0);
  const [difficulty, setDifficulty] = useState(0);
  const [muscleGroup, setMuscleGroup] = useState(0);
  const [sort, setSort] = useState(selectorList[0]);

  useEffect(() => {
    const fetchPost = async () => {
      return await Api().exercise.getFilters();
    };
    fetchPost()
      .then((data) => {
        setFiltersData(data);
      })
      .catch(() => {});
  }, []);

  return (
    <MainLayout>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title="Exercises"
        titleTemplate="GymGuide | %s"
        defaultTitle="GymGuide"
        meta={[{ name: 'description', content: 'GymGuide - extensive list of exercises' }]}
      />
      <FIlterBar
        title={title}
        setTitle={setTitle}
        sort={sort}
        setSort={setSort}
        selectorList={selectorList}
        filterList={filtersData}
        setEquipment={setEquipment}
        setDifficulty={setDifficulty}
        setMuscleGroup={setMuscleGroup}
      />
      <Exercises
        equipment={equipment}
        difficulty={difficulty}
        muscleGroup={muscleGroup}
        title={title}
        sort={sort}
      />
    </MainLayout>
  );
};

export default ExercisesPage;
