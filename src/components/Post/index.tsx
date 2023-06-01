import styles from './Post.module.scss';
import img from '@/assets/no-image.png';
import { MdModeComment, MdRemoveRedEye } from 'react-icons/md';
import { FC } from 'react';

type Props = {
  isFirst: boolean;
  isRecommended: boolean;
  title: string;
  views?: number;
  comments?: number;
  image: string;
  category?: string;
};

const Post: FC<Props> = ({ isRecommended, isFirst, title, views, comments, image, category }) => {
  if (isRecommended) {
    return (
      <div className={styles.recommendedPost}>
        <div className={styles.image}>
          <img
            alt="recommended"
            src={image}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = img;
            }}
          />
        </div>
        <h1 className={styles.title}>{title}</h1>
      </div>
    );
  }

  return (
    <div className={isFirst ? `${styles.firstPost}` : `${styles.postItem}`}>
      <div className={styles.image}>
        <img
          alt="post image"
          src={image}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = img;
          }}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.stats}>
          <div>
            <p>{views}</p> <MdRemoveRedEye />
          </div>
          <div>
            <p>{comments}</p> <MdModeComment />
          </div>
        </div>
        <div className={styles.category}>
          <p>● {category}</p>
        </div>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </div>
  );
};

export default Post;
