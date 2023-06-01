import MainLayout from '@/layouts/MainLayout';
import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './CreationPage.module.scss';
import { MdCancel, MdPhoto } from 'react-icons/md';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import './Editor.scss';
import Button from '@/UI/Button';
import { Api } from '@/core/api';
import { ExerciseDto, Сharacteristic } from '@/core/api/dto';
import Selector from '@/components/Selector';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/redux/hooks';
import { selectUserData } from '@/redux/slices/user';

type Props = {
  exerciseData?: ExerciseDto | null;
  isEdit?: boolean;
  id?: string | undefined;
};

const ExerciseCreation: FC<Props> = ({ exerciseData, isEdit, id }) => {
  const [equipment, setEquipment] = useState<Сharacteristic[] | null>(null);
  const [activeEquipment, setActiveEquipment] = useState(1);
  const [difficulty, setDifficulty] = useState<Сharacteristic[] | null>(null);
  const [activeDifficulty, setActiveDifficulty] = useState(1);
  const [muscles, setMuscles] = useState<Сharacteristic[] | null>(null);
  const [activeMuscles, setActiveMuscles] = useState(1);
  const userData = useAppSelector(selectUserData);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData?.role !== 'ADMIN') {
      navigate('/');
    }

    const fetchEquipments = async () => {
      return await Api().exercise.getEquipments();
    };
    const fetchDifficulties = async () => {
      return await Api().exercise.getDifficulties();
    };
    const fetchMuscles = async () => {
      return await Api().exercise.getMuscles();
    };
    fetchEquipments().then((data) => {
      setEquipment(data);
      setActiveEquipment(exerciseData?.equipmentId || data[0].id);
    });
    fetchDifficulties().then((data) => {
      setDifficulty(data);
      setActiveDifficulty(exerciseData?.difficultyId || data[0].id);
    });
    fetchMuscles().then((data) => {
      setMuscles(data);
      setActiveMuscles(exerciseData?.muscleGroupId || data[0].id);
    });
  }, []);

  const onSubmit = async () => {
    try {
      isEdit
        ? await Api()
            .exercise.updateExercise(
              {
                name: title,
                description: text,
                equipmentId: activeEquipment,
                difficultyId: activeDifficulty,
                muscleGroupId: activeMuscles,
                image: img.data,
              },
              id ? id : '',
            )
            .catch((e) => setError(e.response.data.message))
            .then((data) => {
              if (data) {
                navigate(`/exercises/${id}`);
              }
            })
        : await Api()
            .exercise.createExercise({
              name: title,
              description: text,
              equipmentId: activeEquipment,
              difficultyId: activeDifficulty,
              muscleGroupId: activeMuscles,
              image: img.data,
            })
            .catch((e) => setError(e.response.data.message))
            .then((data) => {
              if (data) {
                navigate(`/exercises/${data.id}`);
              }
            });
    } catch (error) {
      console.warn(error);
    }
  };

  const [title, setTitle] = useState(exerciseData?.name || '');
  const [text, setText] = useState(exerciseData?.description || '');
  const [img, setImg] = React.useState({
    url: exerciseData?.image || '',
    data: null,
  });

  const imgRef = useRef<HTMLInputElement>(null);

  const options = React.useMemo(
    () => ({
      placeholder: 'Write your thoughts...',
      maxHeight: '300px',
      autosave: {
        uniqueId: 'exercise-text',
        enabled: true,
        delay: 1000,
      },
    }),
    [],
  );

  const [error, setError] = React.useState([]);

  const handleImgInput = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const file: any = target.files === null ? '' : target.files[0];
    setImg({ url: URL.createObjectURL(file), data: file });
    target.value = '';
  };

  const clearImg = () => {
    setImg({ url: '', data: null });
  };

  const onTextChange = React.useCallback((value: string) => {
    setText(value);
  }, []);

  return (
    <MainLayout>
      <div className={styles.postPage}>
        <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Selector
          characteristic={equipment}
          value={activeEquipment}
          setActive={setActiveEquipment}
        />
        <Selector
          characteristic={difficulty}
          value={activeDifficulty}
          setActive={setActiveDifficulty}
        />
        <Selector characteristic={muscles} value={activeMuscles} setActive={setActiveMuscles} />
        {img.data || img.url ? (
          <div className={`${styles.activeImage}`}>
            <input
              name="img"
              className={styles.input}
              type="file"
              onChange={handleImgInput}
              accept="image/jpeg,image/png,image/gif"
              hidden
            />
            <div className={styles.inputtedImage}>
              <img alt={img.url} src={img.url} />
              <div onClick={clearImg}>
                <MdCancel className={styles.cross} />
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.image} onClick={() => imgRef.current && imgRef.current.click()}>
            <input
              ref={imgRef}
              className={styles.input}
              type="file"
              onChange={handleImgInput}
              accept="image/jpeg,image/png"
              hidden
            />
            <MdPhoto className={styles.noImage} />
          </div>
        )}
        <SimpleMDE options={options} value={text} onChange={onTextChange} />
        {Array.isArray(error) ? (
          error.map((obj) => <p className={styles.validationError}>{obj}</p>)
        ) : (
          <p className={styles.validationError}>{error}</p>
        )}
        <Button disabled={isEdit ? false : img.data === null ? true : false} onClick={onSubmit}>
          {isEdit ? 'Confirm' : 'Post it!'}
        </Button>
      </div>
    </MainLayout>
  );
};

export default ExerciseCreation;
