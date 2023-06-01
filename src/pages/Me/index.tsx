import MainLayout from '@/layouts/MainLayout';
import ProfileContent from '@/modules/ProfileContent';
import { FC } from 'react';

const MePage: FC = () => {
  return (
    <MainLayout>
      <ProfileContent />
    </MainLayout>
  );
};

export default MePage;
