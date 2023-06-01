import { Api } from '@/core/api';
import { PostDto, PostsDto } from '@/core/api/dto';
import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Post from '../../components/Post';
import styles from './RecommendedPosts.module.scss';
import Search from '@/components/Search';

type Props = {
  categoryId: number;
};

const RecommendedPosts: FC<Props> = ({ categoryId }) => {
  const [postsData, setPostsData] = useState<PostsDto | []>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      return await Api().post.getRecommended(categoryId);
    };
    fetchPosts()
      .then((data) => {
        setPostsData(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(true));
  }, []);

  return (
    <div className={styles.recommendedPosts}>
      <h1 className={styles.title}>Might be interesting</h1>
      <div className={styles.posts}>
        {postsData && postsData.length > 1 ? (
          postsData.map((obj: PostDto) => {
            return obj.id === Number(id) ? null : (
              <div
                key={obj.id}
                onClick={() => {
                  navigate(`/posts/${obj.id}`);
                  window.scrollTo(0, 0);
                }}>
                <Post isRecommended={true} isFirst={false} title={obj.title} image={obj.image} />
              </div>
            );
          })
        ) : (
          <Search />
        )}
      </div>
    </div>
  );
};

export default RecommendedPosts;
