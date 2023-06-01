import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react';
import styles from './ProfileContent.module.scss';
import img from '@/assets/default-profile-pic.jpg';
import SectionSelector from './SectionSelector';
import Favourites from './Favourites';
import Comments from './Comments';
import { useAppSelector } from '@/redux/hooks';
import { selectUserData } from '@/redux/slices/user';
import { useNavigate } from 'react-router-dom';
import Create from './Create';

interface SectionSelectorContext {
  selectedItem: number;
  setSelectedItem: Dispatch<SetStateAction<number>>;
}

export const SectionSelectorContext = createContext<SectionSelectorContext>({
  selectedItem: -1,
  setSelectedItem: () => {},
});

const ProfileContent = () => {
  const [selectedItem, setSelectedItem] = useState(-1);
  const userData = useAppSelector(selectUserData);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      navigate('/');
    }
  }, []);

  return (
    <div className={styles.profile}>
      <div className={styles.info}>
        <div className={styles.image}>
          <img
            alt={userData?.name}
            src={userData?.img != null ? userData.img : img}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = img;
            }}
          />
        </div>
        <h1>{userData && userData?.name}</h1>
      </div>
      <SectionSelectorContext.Provider value={{ selectedItem, setSelectedItem }}>
        <SectionSelector userData={userData} />
      </SectionSelectorContext.Provider>
      {selectedItem === 1 ? <Favourites /> : null}
      {selectedItem === 2 ? <Comments /> : null}
      {selectedItem === 3 ? <Create /> : null}
    </div>
  );
};

export default ProfileContent;
