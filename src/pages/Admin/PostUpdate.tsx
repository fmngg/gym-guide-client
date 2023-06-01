import Loader from '@/components/Loader';
import { Api } from '@/core/api';
import { PostDto } from '@/core/api/dto';
import PostCreation from '@/modules/Admin/PostCreation';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostUpdatePage: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [postData, setPostData] = useState<PostDto | null>(null);
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
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return <PostCreation id={id} isEdit={true} postData={postData} />;
};

export default PostUpdatePage;
