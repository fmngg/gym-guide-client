import ReactDOM from 'react-dom/client';
import '@/styles/globals.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import PostsPage from './pages/Posts';
import PostPage from './pages/Post';
import RegisterPage from './pages/Auth/RegisterPage';
import LoginPage from './pages/Auth/LoginPage';
import ExercisesPage from './pages/Exercises';
import ExercisePage from './pages/Exercise';
import MePage from './pages/Me';
import PostCreationPage from './pages/Admin/PostCreation';
import ExerciseCreationPage from './pages/Admin/ExerciseCreation';
import ExerciseUpdatePage from './pages/Admin/ExerciseUpdate';
import PostUpdatePage from './pages/Admin/PostUpdate';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/posts',
    element: <PostsPage />,
  },
  {
    path: '/posts/:id',
    element: <PostPage />,
  },
  {
    path: '/auth/register',
    element: <RegisterPage />,
  },
  {
    path: '/auth/Login',
    element: <LoginPage />,
  },
  {
    path: '/exercises',
    element: <ExercisesPage />,
  },
  {
    path: '/exercises/:id',
    element: <ExercisePage />,
  },
  {
    path: '/me',
    element: <MePage />,
  },
  {
    path: '/admin/post-create',
    element: <PostCreationPage />,
  },
  {
    path: '/admin/post-update/:id',
    element: <PostUpdatePage />,
  },
  {
    path: '/admin/exercise-create',
    element: <ExerciseCreationPage />,
  },
  {
    path: '/admin/exercise-update/:id',
    element: <ExerciseUpdatePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
