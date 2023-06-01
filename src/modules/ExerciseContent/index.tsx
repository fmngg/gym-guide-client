import { FC, useEffect, useState } from 'react';
import styles from './ExerciseContent.module.scss';
import img from '@/assets/no-image.png';
import {
  MdStar,
  MdRemoveRedEye,
  MdArrowBack,
  MdOutlineFavorite,
  MdDelete,
  MdEdit,
} from 'react-icons/md';
import Rating from './Rating';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ExerciseDto } from '@/core/api/dto';
import { Api } from '@/core/api';
import { useAppSelector } from '@/redux/hooks';
import { selectUserData } from '@/redux/slices/user';
import ReactMarkdown from 'react-markdown';

const ExerciseContent: FC<ExerciseDto> = ({
  id,
  name,
  difficulty,
  equipment,
  muscleGroup,
  views,
  avgRating,
  description,
  image,
  recommended,
  rating,
}) => {
  const userData = useAppSelector(selectUserData);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    userData && userData.role === 'ADMIN' ? setIsAdmin(true) : null;
    const fetchFavs = async () => {
      return await Api().user.getFavourites();
    };
    fetchFavs()
      .then((data) => {
        data.forEach(function (obj: ExerciseDto) {
          if (id === obj.id) {
            setIsAdded(true);
          }
        });
      })
      .catch(() => {});
  }, [userData]);

  const [isAdded, setIsAdded] = useState(false);

  const onClickFavourite = async () => {
    if (!isAdded) return await Api().exercise.addToFavourites(Number(id));
    if (isAdded) return await Api().exercise.deleteFromFavourites(Number(id));
  };

  const onClickDelete = async () => {
    await Api().exercise.deleteExercise(String(id));
    navigate('/exercises');
  };

  return (
    <>
      <div className={styles.buttons}>
        <Link to="/exercises">
          <MdArrowBack className={styles.button} />
        </Link>
        {userData && (
          <div className={styles.right}>
            {isAdmin && (
              <>
                <MdDelete className={styles.delete} onClick={onClickDelete} />
                <Link to={`/admin/exercise-update/${id}`}>
                  <MdEdit className={styles.button} />
                </Link>
              </>
            )}
            <MdOutlineFavorite
              onClick={() => {
                onClickFavourite();
                setIsAdded(!isAdded);
              }}
              className={`${isAdded ? styles.active : ''} ${styles.button}`}
            />
          </div>
        )}
      </div>
      <div className={styles.exercisePage}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h1>{name}</h1>
            <div className={styles.info}>
              <div className={styles.infoLeft}>
                <div className={styles.category}>
                  <p>{muscleGroup.name}</p>
                  <p>{difficulty.name}</p>
                  <p>{equipment.name}</p>
                </div>
                <div className={styles.stats}>
                  <p>{views} </p>
                  <MdRemoveRedEye />
                  <p>{Number(avgRating).toFixed(1)} </p>
                  <MdStar />
                </div>
              </div>
            </div>
            {recommended && (
              <div className={styles.video}>
                <p>Recommended for viewing</p>
                <iframe src="https://www.youtube.com/embed/zYGijHIU6GM" allowFullScreen></iframe>
              </div>
            )}
            <Rating id={id} rating={rating} />
          </div>
          <div className={styles.headerRight}>
            <div className={styles.image}>
              <img
                alt="hello"
                src={image}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = img;
                }}
              />
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <ReactMarkdown children={description} />
        </div>
      </div>
    </>
  );
};

export default ExerciseContent;
