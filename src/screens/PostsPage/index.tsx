import MainLayout from "@/layouts/MainLayout";
import FIlterBar from "@/modules/FilterBar";
import Posts from "@/modules/Posts";
import Category from "@/modules/Posts/Category";
import Input from "@/UI/Input";
import Selector from "@/UI/Selector";
import React from "react";

type Props = {};

const selectorList = [
  // ["Abs And Core", "Arms", "Back", "Chest", "Legs", "Shoulders"],
  ["Newest", "Popular"],
];

const PostsPage = (props: Props) => {
  return (
    <MainLayout>
      {/* <Category /> */}
      <FIlterBar selectorList={selectorList} />
      <Posts />
    </MainLayout>
  );
};

export default PostsPage;
