import { FC, useEffect, useState } from 'react';
import styles from './PostContent.module.scss';
import img from '@/assets/no-image.png';
import { MdModeComment, MdRemoveRedEye, MdArrowBack, MdDelete, MdEdit } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { Api } from '@/core/api';
import { PostDto } from '@/core/api/dto';
import ReactMarkdown from 'react-markdown';
import { useAppSelector } from '@/redux/hooks';
import { selectUserData } from '@/redux/slices/user';

const PostContent: FC<PostDto> = ({
  title,
  text,
  image,
  views,
  comments,
  createdAt,
  category,
  id,
}) => {
  const date = new Date(createdAt).toLocaleDateString();
  const userData = useAppSelector(selectUserData);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    userData && userData.role === 'ADMIN' ? setIsAdmin(true) : null;
  }, [userData]);

  const onClickDelete = async () => {
    await Api().post.deletePost(String(id));
    navigate('/posts');
  };

  return (
    <>
      <div className={styles.buttons}>
        <Link to="/posts">
          <MdArrowBack className={styles.button} />
        </Link>
        {userData && (
          <div className={styles.right}>
            {isAdmin && (
              <>
                <MdDelete className={styles.delete} onClick={onClickDelete} />
                <Link to={`/admin/post-update/${id}`}>
                  <MdEdit className={styles.button} />
                </Link>
              </>
            )}
          </div>
        )}
      </div>
      <div className={styles.postPage}>
        <h1>{title}</h1>
        <div className={styles.info}>
          <div className={styles.infoLeft}>
            {category ? <p className={styles.category}>● {category?.name} </p> : null}
            <div className={styles.stats}>
              <p>{views} </p>
              <MdRemoveRedEye />
              <p>{comments?.length} </p>
              <MdModeComment />
            </div>
          </div>
          <p>{date}</p>
        </div>
        {image && (
          <div className={styles.image}>
            <img
              alt="hello"
              src={image}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = img;
              }}
            />
          </div>
        )}
        <div className={styles.text}>
          <ReactMarkdown children={text} />
        </div>
      </div>
    </>
  );
};

export default PostContent;
