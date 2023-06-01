import Comment from '@/modules/CommentSection/Comment';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectComments, setComments } from '@/redux/slices/comment';
import { selectUserData } from '@/redux/slices/user';
import Button from '@/UI/Button';
import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Comments.module.scss';

const Comments: FC = () => {
  const userData = useAppSelector(selectUserData);
  const comments = useAppSelector(selectComments);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    userData && dispatch(setComments(userData?.comments));
  }, []);

  if (comments.length === 0) {
    return (
      <div className={styles.noResult}>
        <svg
          fill="#000000"
          height="800px"
          width="800px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 415.188 415.188">
          <path
            d="M412.861,78.976c3.404-6.636,2.831-14.159-0.15-20.404c0.84-7.106-1.02-14.321-7.746-19.855
	c-6.262-5.151-12.523-10.305-18.781-15.457c-11.005-9.055-28.237-11.913-38.941,0c-48.619,54.103-99.461,105.856-152.167,155.725
	c-39.185-36.605-78.846-72.713-118.223-108.868c-13.82-12.693-33.824-8.71-42.519,6.411c-12.665,6.286-22.931,14.481-31.42,28.468
	c-4.042,6.664-3.727,15.076,0,21.764c25.421,45.578,74.557,85.651,114.957,122.529c-5.406,4.839-10.772,9.724-16.287,14.461
	c-54.43,46.742-91.144,76.399-23.029,124.325c0.919,0.647,1.856,0.504,2.789,0.882c1.305,0.602,2.557,1.026,4.004,1.264
	c0.45,0.017,0.87,0.093,1.313,0.058c1.402,0.114,2.774,0.471,4.195,0.192c36.621-7.18,70.677-35.878,101.576-67.48
	c30.1,29.669,62.151,58.013,97.395,74.831c8.391,4.005,18.395,1.671,24.855-3.931c10.832,0.818,20.708-5.913,25.665-15.586
	c0.734-0.454,1.207-0.713,2.002-1.21c15.748-9.838,17.187-29.431,5.534-42.936c-26.313-30.492-54.284-59.478-82.798-87.95
	C316.426,196.043,380.533,141.939,412.861,78.976z"
          />
        </svg>
        <h1>Your comment section is clear. Leave a comment to see it here.</h1>
        <Button onClick={() => navigate('/posts')}>To posts</Button>
      </div>
    );
  }

  return (
    <div>
      {comments.map((obj) => (
        <Comment
          key={obj.id}
          isProfile={true}
          comments={comments}
          comment={obj}
          userData={userData}
        />
      ))}
    </div>
  );
};

export default Comments;
