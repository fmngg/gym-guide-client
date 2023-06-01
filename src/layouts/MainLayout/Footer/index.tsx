import styles from './Footer.module.scss';
import { SiGithub, SiTelegram, SiLinkedin } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <p>Copyright © 2023 GymGuide. All rights reserved.</p>
      <div className={styles.media}>
        <Link target="_blank" to="https://github.com/fmngg/gym-guide-client">
          <SiGithub className={styles.mediaLink} />
        </Link>
        <Link target="_blank" to="https://github.com/fmngg/gym-guide-client">
          <SiTelegram className={styles.mediaLink} />
        </Link>
        <Link target="_blank" to="https://github.com/fmngg/gym-guide-client">
          <SiLinkedin className={styles.mediaLink} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
