import { FC, useEffect, useState } from 'react';
import post from '@/assets/home/post.png';
import exercise from '@/assets/home/exercise.png';

import MainLayout from '../../layouts/MainLayout';
import HomeMenu from '@/modules/HomeMenu';

import styles from './HomePage.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/redux/hooks';
import { selectUserData } from '@/redux/slices/user';
import { AuthResponse } from '@/core/api/dto';
import { MdArrowForward } from 'react-icons/md';
import Helmet from 'react-helmet';

const HomePage: FC = () => {
  const navigate = useNavigate();
  const userData = useAppSelector(selectUserData);

  return (
    <MainLayout>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title="Main"
        titleTemplate="GymGuide | %s"
        defaultTitle="GymGuide"
        meta={[{ name: 'description', content: 'GymGuide - all about a healthy lifestyle' }]}
      />
      <div className={styles.home}>
        <div className={styles.post}>
          <div className={styles.description}>
            <h1>Posts</h1>
            <p>
              We hold our articles to the highest editorial standards by conducting original
              reporting, citing recent and relevant research and providing full context to ensure
              readers have all the facts they need to make important decisions about their health.
            </p>
            <button onClick={() => navigate('/posts')}>More</button>
          </div>
          <div className={styles.imgBlock}>
            <div></div>
            <img src={post} alt="exercise" />
          </div>
        </div>
        <div className={styles.exercise}>
          <div className={styles.description}>
            <h1>Exercises</h1>
            <p>
              A section with a large number of different types of exercises with different equipment
              for people with different levels of training
            </p>
            <button onClick={() => navigate('/exercises')}>More</button>
          </div>
          <div className={styles.imgBlock}>
            <div></div>
            <img src={exercise} alt="exercise" />
          </div>
        </div>
        {!userData && (
          <div className={styles.registrationAd}>
            <h1>Registered user features</h1>
            <ul>
              <li>leave comments</li>
              <li>add to favorites</li>
              <li>rate posts</li>
              {/* <li>useful calculators</li> */}
              <li>dark theme</li>
            </ul>
            <button onClick={() => navigate('/auth/register')}>Sign up for free</button>
          </div>
        )}
        <div className={styles.about}>
          <Link
            target="_blank"
            to="https://certain-maize-8f7.notion.site/GymGuide-51c1fb2c102c4272b3bb27190dbcc66e">
            <button>
              Learn more about project <MdArrowForward className={styles.arrow} />
            </button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
