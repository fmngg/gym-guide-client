import MainLayout from "@/layouts/MainLayout";
import Exercises from "@/modules/Exercises";
import FIlterBar from "@/modules/FilterBar";
import React from "react";

type Props = {};

const selectorList = [
  ["All", "Abs And Core", "Arms", "Back", "Chest", "Legs", "Shoulders"],
  ["Newest", "Popular", "Rating"],
];
const ExercisesPage = (props: Props) => {
  return (
    <MainLayout>
      <FIlterBar selectorList={selectorList} />
      <Exercises />
    </MainLayout>
  );
};

export default ExercisesPage;
