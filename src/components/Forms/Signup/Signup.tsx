import { IUser, IValues } from '../../../interfaces/interfaces';
import { FormikHelpers, useFormik } from 'formik';
import { object, string, ObjectSchema } from 'yup';
import { AppDispatch } from '../../../services/redux/store';
import { signUpUser } from '../../../services/redux/operations/operations';
import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';
import {
  StyledBox,
  StyledBtn,
  StyledForm,
} from '../FormStyles/FormsComponents.styled';

const pwRegexp =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

const UserSignupSchema: ObjectSchema<IUser> = object({
  name: string().required('Required'),
  lastname: string(),
  email: string()
    .email('You have entered a valid email address!')
    .required('Required'),
  password: string()
    .matches(
      pwRegexp,
      'Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character!'
    )
    .required('Required'),
});

export const Signup = () => {
  const dispatch = useDispatch<AppDispatch>();

  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
      password: '',
    },
    validationSchema: UserSignupSchema,
    onSubmit: (values: IValues, action: FormikHelpers<IValues>) => {
      dispatch(signUpUser(values));
      action.resetForm();
    },
  });

  return (
    <StyledBox>
      <h1>Signup</h1>
      <StyledForm onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          id="lastname"
          name="lastname"
          label="Last name"
          value={formik.values.lastname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.lastname && Boolean(formik.errors.lastname)}
          helperText={formik.touched.lastname && formik.errors.lastname}
        />
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
