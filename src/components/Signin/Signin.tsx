import { Formik, Field, Form, FormikHelpers, ErrorMessage } from 'formik';
import { IValues, IUser } from '../../interfaces/interfaces';
import { object, string, ObjectSchema } from 'yup';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../services/redux/store';
import { logInUser } from '../../services/redux/Operations/operations';

const emailRegexp =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const UserSigninSchema: ObjectSchema<Pick<IUser, 'email' | 'password'>> =
  object({
    email: string()
      .matches(emailRegexp, 'You have entered a valid email address!')
      .required('Required'),
    password: string().required('Required'),
  });

export const Signin = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit = (
    values: Pick<IValues, 'email' | 'password'>,
    action: FormikHelpers<Pick<IValues, 'email' | 'password'>>
  ) => {
    dispatch(logInUser(values));
    console.log(values);
    action.resetForm();
  };
  return (
    <div>
      <h1>Sign In</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={UserSigninSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="john@acme.com"
            type="email"
          />
          <ErrorMessage name="email" />

          <label htmlFor="password">Password</label>
          <Field id="password" name="password" placeholder="********" />
          <ErrorMessage name="password" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
