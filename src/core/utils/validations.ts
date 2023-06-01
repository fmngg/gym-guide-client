import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
  email: yup.string().email('Email must be valid').required('This field is required'),
  password: yup
    .string()
    .min(4, 'Password must be longer than 4 characters')
    .max(16, 'Password must be shorter than 16 characters')
    .required('This field is required'),
});

export const RegisterSchema = yup
  .object()
  .shape({
    name: yup
      .string()
      .min(4, 'Name must be longer than 4 characters')
      .max(16, 'Name must be shorter than 16 characters')
      .required('This field is required'),
  })
  .concat(LoginSchema);
