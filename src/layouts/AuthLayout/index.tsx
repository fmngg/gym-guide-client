import { Api } from '@/core/api';
import { FC, PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './AuthLayout.module.scss';

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await Api().user.getMe();

      if (userData) {
        navigate('/');
      }
    };
    fetchUserData();
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.layout}>
        <div style={{ display: 'flex', flex: 'auto', flexDirection: 'column' }}>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
