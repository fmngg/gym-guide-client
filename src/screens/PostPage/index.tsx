import MainLayout from "@/layouts/MainLayout";
import Image from "next/image";
import React from "react";
import styles from "./PostPage.module.scss";
import img from "@/assets/home/postsImg.jpg";
import { MdModeComment, MdRemoveRedEye, MdArrowBack } from "react-icons/md";
import RecommendedPosts from "@/modules/RecommendedPosts";
import Link from "next/link";
import PostContent from "@/modules/PostContent";
import CommentSection from "@/modules/CommentSection";

type Props = {};

const PostPage = (props: Props) => {
  return (
    <MainLayout>
      <PostContent />
      <RecommendedPosts />
      <CommentSection />
    </MainLayout>
  );
};

export default PostPage;
