import { FC } from 'react';
import defaultImage from '@/assets/default-profile-pic.jpg';
import styles from './Comment.module.scss';
import { AuthResponse, CommentDto } from '@/core/api/dto';
import { useAppDispatch } from '@/redux/hooks';
import { Api } from '@/core/api';
import { setComments } from '@/redux/slices/comment';
import { useNavigate } from 'react-router-dom';

type Props = {
  isProfile: boolean;
  comment: CommentDto;
  comments: CommentDto[];
  userData: AuthResponse | null;
};

const Comment: FC<Props> = ({ comment, userData, comments, isProfile }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onClick = async (id: number) => {
    await Api().post.deleteComment(id);
    dispatch(setComments(comments.filter((obj) => obj.id !== id)));
  };
  return (
    <div className={styles.comment}>
      <div className={styles.commentUpper}>
        <div className={styles.left}>
          <div className={styles.image}>
            <img
              alt={comment.userName}
              src={comment.userImage ? comment.userImage : defaultImage}
            />
          </div>
          <p className={styles.name}>{comment.userName}</p>
        </div>
        <div className={styles.right}>
          {userData?.id === comment.userId ? (
            <button onClick={() => onClick(comment.id)} className={styles.delete}>
              Delete
            </button>
          ) : null}
          {isProfile && (
            <button onClick={() => navigate(`/posts/${comment.postId}`)} className={styles.button}>
              Post
            </button>
          )}
        </div>
      </div>
      <p className={styles.content}>{comment.text}</p>
    </div>
  );
};

export default Comment;
