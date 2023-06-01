import AuthLayout from '@/layouts/AuthLayout';
import Button from '@/UI/Button';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from '@/core/utils/validations';
import styles from '../AuthPage.module.scss';
import Cookies from 'js-cookie';
import { LoginDto } from '@/core/api/dto';
import { Api } from '@/core/api';
import { useAppDispatch } from '@/redux/hooks';
import { Link, useNavigate } from 'react-router-dom';
import { setUserData } from '@/redux/slices/user';

const LoginPage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const form = useForm<LoginDto>({
    mode: 'onChange',
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = async (dto: LoginDto) => {
    try {
      await Api()
        .user.login(dto)
        .catch((e) => setError(e.response.data.message))
        .then((data) => {
          if (data) {
            Cookies.set('ggtoken', data.token, {
              expires: 30,
              path: '/',
            });
            setError('');
            dispatch(setUserData(data));
            navigate('/');
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
          <h1>Login</h1>
        </div>

        <div className={styles.redirectLabel}>
          <p>Don't have an account yet?</p>
          <Link to="/auth/register">
            <p className={styles.redirect}>Sign Up</p>
          </Link>
        </div>
        <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
          {error ? <p className={styles.validationError}>{error}</p> : null}
          <ul>
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
          <Button disabled={!form.formState.isValid} type="submit">
            Sign In
          </Button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
