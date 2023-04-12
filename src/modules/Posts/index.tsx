import Link from "next/link";
import React from "react";
import Post from "../../components/Post";
import styles from "./Posts.module.scss";

type Props = {};

const postList = [
  {
    id: 1,
    title: "История о том, как наш новый тимлид нифига не зная стал тимлидом",
    views: 109,
    comments: 5,
  },
  {
    id: 2,
    title: "Как с помощью Dadata определить город по IP?",
    views: 200,
    comments: 4,
  },
  {
    id: 3,
    title: "Мои темы и плагины для VS Code на 2019 год",
    views: 75,
    comments: 3,
  },
  {
    id: 4,
    title: "hello hello hello",
    views: 101,
    comments: 1,
  },
  {
    id: 5,
    title: "hello hello hello",
    views: 100,
    comments: 0,
  },
];

const Posts = (props: Props) => {
  return (
    <div className={styles.posts}>
      <Link href={`posts/${postList[0].id}`}>
        <Post
          isRecommended={false}
          isFirst={true}
          title={postList[0].title}
          views={postList[0].views}
          comments={postList[0].comments}
        />
      </Link>
      {postList.slice(1).map((obj) => (
        <Link href={`posts/${obj.id}`}>
          <Post key={obj.id} isRecommended={false} isFirst={false} {...obj} />
        </Link>
      ))}
    </div>
  );
};

export default Posts;
