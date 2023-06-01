import Logo from '@/UI/Logo';
import React from 'react';
import styles from './Header.module.scss';
import { MdAccountCircle, MdOutlineLogin, MdOutlineLogout } from 'react-icons/md';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
import ThemeChanger from '@/modules/ThemeChanger';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectUserData, setUserData } from '@/redux/slices/user';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

type Props = {};

const Header = (props: Props) => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(selectUserData);
  const navigate = useNavigate();

  const ifAuth = true;
  // const { asPath, replace } = useRouter();
  // const pathList = asPath.split('/');

  // const onClickPath = (obj: string) => {
  //   const arr = asPath.split('/').splice(1);
  //   const path: string[] = [];
  //   const id = arr.indexOf(obj);

  //   arr.forEach((elem, index) => {
  //     if (index <= id) {
  //       path.push(elem);
  //     }
  //   });
  //   replace('/' + path.join('/'));
  // };

  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <Link to="/">
          <Logo />
        </Link>
        <div className={styles.sections}>
          <Link to="/posts">
            <p>Posts</p>
          </Link>
          <Link to="/exercises">
            <p>Exercises</p>
          </Link>
        </div>
      </div>
      <div className={styles.buttons}>
        {!userData ? (
          <>
            <Link to="/auth/register">
              <MdOutlineLogin className={styles.button} />
            </Link>
          </>
        ) : (
          <>
            <ThemeChanger />
            <Link to="/me">
              <MdAccountCircle className={styles.button} />
            </Link>

            <MdOutlineLogout
              onClick={() => {
                Cookies.remove('ggtoken');
                dispatch(setUserData(null));
                navigate('/');
                location.reload();
              }}
              className={styles.logout}
            />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
