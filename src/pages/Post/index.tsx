import MainLayout from '@/layouts/MainLayout';
import { FC, useEffect, useState } from 'react';

import RecommendedPosts from '@/modules/RecommendedPosts';
import PostContent from '@/modules/PostContent';
import CommentSection from '@/modules/CommentSection';
import { useParams } from 'react-router-dom';
import { Api } from '@/core/api';
import { PostDto } from '@/core/api/dto';
import Loader from '@/components/Loader';
import { useAppDispatch } from '@/redux/hooks';
import { setComments } from '@/redux/slices/comment';
import Helmet from 'react-helmet';

const PostPage: FC = () => {
  const dispatch = useAppDispatch();
  const [postData, setPostData] = useState<PostDto | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      return await Api().post.getOne(Number(id));
    };
    fetchPost()
      .then(async (data) => {
        setPostData(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(true));
  }, [id]);

  dispatch(setComments(postData ? postData.comments : []));

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      {postData ? (
        <MainLayout>
          <Helmet
            htmlAttributes={{ lang: 'en' }}
            title={postData ? postData.title : 'Post'}
            titleTemplate="GymGuide | %s"
            defaultTitle="GymGuide"
            meta={[
              {
                name: 'description',
                content: postData ? postData.title : 'Post',
              },
            ]}
          />
          <PostContent {...postData} />
          <RecommendedPosts categoryId={postData.categoryId} />
          <CommentSection id={id ? id : ''} />
        </MainLayout>
      ) : (
        <h1>Unhandled Error</h1>
      )}
    </>
  );
};

export default PostPage;
