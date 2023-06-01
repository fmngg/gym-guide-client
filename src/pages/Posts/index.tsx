import MainLayout from '@/layouts/MainLayout';
import FIlterBar from '@/modules/FilterBar';
import Posts from '@/modules/Posts';
import { FC, useState } from 'react';
import Helmet from 'react-helmet';

const selectorList = ['Newest', 'Popular'];

const PostsPage: FC = () => {
  const [title, setTitle] = useState('');
  const [sort, setSort] = useState(selectorList[0]);

  return (
    <MainLayout>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title="Posts"
        titleTemplate="GymGuide | %s"
        defaultTitle="GymGuide"
        meta={[
          { name: 'description', content: 'GymGuide - articles on health, sports and nutrition' },
        ]}
      />
      <FIlterBar
        title={title}
        setTitle={setTitle}
        sort={sort}
        setSort={setSort}
        selectorList={selectorList}
      />
      <Posts title={title} sort={sort} />
    </MainLayout>
  );
};

export default PostsPage;
