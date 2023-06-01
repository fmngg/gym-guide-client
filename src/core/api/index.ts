import axios from 'axios';
import { PostApi } from './post';
import { UserApi } from './user';
import Cookies from 'js-cookie';
import { ExerciseApi } from './exercise';

type ApiReturnType = {
  user: ReturnType<typeof UserApi>;
  post: ReturnType<typeof PostApi>;
  exercise: ReturnType<typeof ExerciseApi>;
};

export const Api = (): ApiReturnType => {
  const token = Cookies.get('ggtoken');

  const instance = axios.create({
    baseURL: 'http://localhost:7000',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return {
    user: UserApi(instance),
    post: PostApi(instance),
    exercise: ExerciseApi(instance),
  };
};
