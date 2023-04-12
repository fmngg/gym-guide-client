import Button from "@/UI/Button";
import React from "react";
import Post from "../../components/Post";
import styles from "./RecommendedPosts.module.scss";

type Props = {};

const RecommendedPosts = (props: Props) => {
  return (
    <div className={styles.recommendedPosts}>
      <h1 className={styles.title}>Might be interesting</h1>
      <div className={styles.posts}>
        {[...Array(4)].map((obj) => (
          <Post
            isRecommended={true}
            isFirst={false}
            title={
              "История о том, как наш новый тимлид нифига не зная стал тимлидом"
            }
            views={100}
            comments={100}
          />
        ))}
        <Button>See More</Button>
      </div>
    </div>
  );
};

export default RecommendedPosts;
