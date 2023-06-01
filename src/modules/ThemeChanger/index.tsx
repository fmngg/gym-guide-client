import { useEffect, useState } from 'react';
import styles from './ThemeChanger.module.scss';
import { BsFillSunFill } from 'react-icons/bs';

const ThemeChanger = () => {
  const [isDark, setIsDark] = useState(
    typeof window !== 'undefined'
      ? localStorage.getItem('selectedTheme') === 'dark'
        ? false
        : true
      : null,
  );
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('selectedTheme') === null) {
      localStorage.setItem('selectedTheme', 'light');
    }
    if (localStorage.getItem('selectedTheme') === 'light') {
      document.querySelector('html')?.setAttribute('theme', 'light');
    }
    if (localStorage.getItem('selectedTheme') === 'dark') {
      document.querySelector('html')?.setAttribute('theme', 'dark');
    }
  }, []);

  const onClickTheme = () => {
    setIsDark(!isDark);

    if (isDark) {
      setIsChanging(true);
      setTimeout(() => {
        localStorage.setItem('selectedTheme', 'dark');
        document.querySelector('html')?.setAttribute('theme', 'dark');
        setTimeout(() => {
          setIsChanging(false);
        }, 1000);
      }, 500);
    } else {
      setIsChanging(true);
      setTimeout(() => {
        localStorage.setItem('selectedTheme', 'light');
        document.querySelector('html')?.setAttribute('theme', 'light');
        setTimeout(() => {
          setIsChanging(false);
        }, 1000);
      }, 500);
    }
  };

  return (
    <div>
      <BsFillSunFill className={styles.theme} onClick={onClickTheme} />
      <div className={isChanging ? `${styles.loader} ${styles.active}` : `${styles.loader}`}>
        <h1>Theme changing...</h1>
      </div>
    </div>
  );
};

export default ThemeChanger;
