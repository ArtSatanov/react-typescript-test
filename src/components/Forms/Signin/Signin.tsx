import { FormikHelpers, useFormik } from 'formik';
import { IValues, IUser } from '../../../interfaces/interfaces';
import { object, string, ObjectSchema } from 'yup';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../services/redux/store';
import { logInUser } from '../../../services/redux/operations/operations';
import { TextField } from '@mui/material';
import {
  StyledBox,
  StyledBtn,
  StyledForm,
} from '../FormStyles/FormsComponents.styled';

const UserSigninSchema: ObjectSchema<Pick<IUser, 'email' | 'password'>> =
  object({
    email: string()
      .email('You have entered a valid email address!')
      .required('Required'),
    password: string().required('Required'),
  });

export const Signin = () => {
  const dispatch = useDispatch<AppDispatch>();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: UserSigninSchema,
    onSubmit: (
      values: Pick<IValues, 'email' | 'password'>,
      action: FormikHelpers<Pick<IValues, 'email' | 'password'>>
    ) => {
      dispatch(logInUser(values));
      action.resetForm();
    },
  });

  return (
    <StyledBox>
      <h1>Signup</h1>
      <StyledForm onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <StyledBtn variant="contained" type="submit">
          Submit
        </StyledBtn>
      </StyledForm>
    </StyledBox>
  );
};
