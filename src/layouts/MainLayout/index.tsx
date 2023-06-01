import { Api } from '@/core/api';
import { useAppDispatch } from '@/redux/hooks';
import { setUserData } from '@/redux/slices/user';
import { FC, PropsWithChildren, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import styles from './MainLayout.module.scss';

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await Api().user.getMe();
      dispatch(setUserData(userData));
    };
    fetchUserData().catch(() => console.log('Unauthorized'));
  }, []);
  return (
    <div className={styles.layout}>
      <Header />
      <div style={{ display: 'flex', flex: 'auto', flexDirection: 'column' }}>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
