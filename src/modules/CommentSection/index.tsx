import { Api } from '@/core/api';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectComments, setComments } from '@/redux/slices/comment';
import { selectUserData } from '@/redux/slices/user';
import { FC, useEffect, useRef, useState } from 'react';
import Comment from './Comment';
import CommentInput from './CommentInput';
import styles from './CommentSection.module.scss';

type Props = {
  id: string;
};

const CommentSection: FC<Props> = ({ id }) => {
  const dispatch = useAppDispatch();
  const comments = useAppSelector(selectComments);
  const userData = useAppSelector(selectUserData);
  const [commentData, setCommentData] = useState('');
  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
    } else {
      const createComment = async () => {
        if (commentData !== '') {
          return await Api().post.createComment(Number(id), commentData);
        } else throw new Error('Комментарий не должен быть пустым');
      };
      createComment()
        .then((data) => {
          dispatch(setComments([...comments, data]));
        })
        .catch((error) => console.log(error));
    }
  }, [commentData]);

  return (
    <div className={styles.commentSection}>
      <h1 className={styles.title}>Comments: {comments.length}</h1>
      {comments.map((obj) => (
        <Comment
          isProfile={false}
          comments={comments}
          userData={userData}
          comment={obj}
          key={obj.id}
        />
      ))}
      <CommentInput setCommentData={setCommentData} />
    </div>
  );
};

export default CommentSection;
