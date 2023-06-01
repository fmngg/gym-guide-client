import Button from '@/UI/Button';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Create.module.scss';

const Create: FC = () => {
  return (
    <div className={styles.create}>
      <Link to="/admin/post-create">
        <Button>Post</Button>
      </Link>
      <Link to="/admin/exercise-create">
        <Button>Exercise</Button>
      </Link>
    </div>
  );
};

export default Create;
