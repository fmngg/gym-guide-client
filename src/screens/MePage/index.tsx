import MainLayout from "@/layouts/MainLayout";
import ProfileContent from "@/modules/ProfileContent";
import React from "react";

type Props = {};

const MePage = (props: Props) => {
  return (
    <MainLayout>
      <ProfileContent />
    </MainLayout>
  );
};

export default MePage;
