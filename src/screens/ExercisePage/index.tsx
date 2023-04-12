import MainLayout from "@/layouts/MainLayout";
import ExerciseContent from "@/modules/ExerciseContent";
import React from "react";

type Props = {};

const ExercisePage = (props: Props) => {
  return (
    <MainLayout>
      <ExerciseContent />
    </MainLayout>
  );
};

export default ExercisePage;
