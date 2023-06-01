import AuthLayout from '@/layouts/AuthLayout';
import Button from '@/UI/Button';
import React, { FC } from 'react';
import styles from '../AuthPage.module.scss';
import { MdPhoto, MdCancel } from 'react-icons/md';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterSchema } from '@/core/utils/validations';
import { Api } from '@/core/api';
import { RegisterDto } from '@/core/api/dto';
import { useAppDispatch } from '@/redux/hooks';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { setUserData } from '@/redux/slices/user';

const RegisterPage: FC = () => {
  const dispatch = useAppDispatch();

  const [img, setImg] = React.useState({
    url: '',
    data: null,
  });

  const [error, setError] = React.useState('');

  const handleImgInput = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const file: any = target.files === null ? '' : target.files[0];
    setImg({ url: URL.createObjectURL(file), data: file });
    target.value = '';
  };

  const clearImg = () => {
    setImg({ url: '', data: null });
  };

  const form = useForm<RegisterDto>({
    mode: 'onChange',
    resolver: yupResolver(RegisterSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (dto: RegisterDto) => {
    try {
      await Api()
        .user.register({ ...dto, img: img.data })
        .catch((e) => setError(e.response.data.message))
        .then((data) => {
          if (data) {
            if (data) {
              Cookies.set('ggtoken', data.token, {
                expires: 30,
                path: '/',
              });
              setError('');
              dispatch(setUserData(data));
              navigate('/');
            }
          }
        });
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <AuthLayout>
      <div className={styles.formPage}>
        <div className={styles.formHeader}>
          <h1>Register</h1>
        </div>
        <div className={styles.redirectLabel}>
          <p>Already have an account?</p>
          <Link to="/auth/login">
            <p className={styles.redirect}>Sign In</p>
          </Link>
        </div>
        <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
          {img.data ? (
            <div className={`${styles.activeImage}`}>
              <input
                {...form.register('img')}
                name="img"
                className={styles.input}
                type="file"
                onChange={handleImgInput}
                accept="image/jpeg,image/png"
              />
              <div className={styles.inputtedImage}>
                <img alt={img.url} src={img.url} />
                <div onClick={clearImg}>
                  <MdCancel className={styles.cross} />
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.image}>
              <input
                className={styles.input}
                type="file"
                onChange={handleImgInput}
                accept="image/jpeg,image/png"
              />
              <MdPhoto className={styles.noImage} />
            </div>
          )}
          {error ? <p className={styles.validationError}>{error}</p> : null}
          <ul>
            <li>
              <input
                className={`${styles.input} ${form.formState.errors.name ? styles.error : ''}`}
                {...form.register('name')}
                name="name"
                placeholder="name"
              />
              {form.formState.errors.name?.message ? (
                <p>{form.formState.errors.name?.message.toString()}</p>
              ) : null}
            </li>
            <li>
              <input
                className={`${styles.input} ${form.formState.errors.email ? styles.error : ''}`}
                {...form.register('email')}
                name="email"
                placeholder="email"
              />
              {form.formState.errors.email?.message ? (
                <p>{form.formState.errors.email?.message.toString()}</p>
              ) : null}
            </li>
            <li>
              <input
                className={`${styles.input} ${form.formState.errors.password ? styles.error : ''}`}
                {...form.register('password')}
                name="password"
                placeholder="password"
              />
              {form.formState.errors.password?.message ? (
                <p>{form.formState.errors.password?.message.toString()}</p>
              ) : null}
            </li>
          </ul>
          <Button disabled={!form.formState.isValid || form.formState.isSubmitting} type="submit">
            Sign Up
          </Button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;
