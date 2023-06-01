import Loader from '@/components/Loader';
import Pagination from '@/components/Pagination';
import Search from '@/components/Search';
import { Api } from '@/core/api';
import { PostDto, PostsDto } from '@/core/api/dto';
import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Post from '../../components/Post';
import styles from './Posts.module.scss';

type Props = {
  title: string;
  sort: string;
};

const Posts: FC<Props> = ({ title, sort }) => {
  const [postsData, setPostsData] = useState<PostsDto | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(true);
  const [totalCount, setTotalCount] = useState<number>(0);

  useEffect(() => {
    const fetchPost = async () => {
      return await Api().post.getAll(sort, title, currentPage);
    };
    fetchPost()
      .then(({ data, headers }) => {
        setPostsData(data);
        setTotalCount(headers['x-total-count']);
        setIsLoading(false);
      })
      .catch(() => {
        setPostsData(null);
      });
  }, [title, sort, currentPage]);

  if (isLoading) {
    return <Loader />;
  }

  if (!Array.isArray(postsData) || postsData.length === 0) {
    return <Search />;
  }

  return (
    <>
      <div className={styles.posts}>
        <div className={styles.firstPostBlock}>
          {postsData[0] && (
            <Link to={`${postsData[0].id}`}>
              <Post
                category={postsData[0].category.name}
                isRecommended={false}
                isFirst={true}
                title={postsData[0].title}
                views={postsData[0].views}
                comments={postsData[0].comments.length}
                image={postsData[0].image}
              />
            </Link>
          )}
        </div>
        {postsData &&
          postsData.slice(1).map((obj: PostDto) => (
            <Link key={obj.id} to={`${obj.id}`}>
              <Post
                category={obj.category.name}
                isRecommended={false}
                isFirst={false}
                title={obj.title}
                views={obj.views}
                comments={obj.comments.length}
                image={obj.image}
              />
            </Link>
          ))}
      </div>
      <Pagination
        totalCount={totalCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Posts;
