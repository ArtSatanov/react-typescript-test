import { Formik, Field, Form, FormikHelpers, ErrorMessage } from 'formik';
import { IValues, IUser } from '../../interfaces/interfaces';
import { object, string, ObjectSchema } from 'yup';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../services/redux/store';
import { logInUser } from '../../services/redux/Operations/operations';

const pwRegexp =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
const emailRegexp =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const UserSigninSchema: ObjectSchema, Pick<IUser,"email" | "password"> = object({
  email: string()
    .matches(emailRegexp, 'You have entered a valid email address!')
    .required('Required'),
  password: string()
    .matches(
      pwRegexp,
      'Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character!'
    )
    .required('Required'),
});

export const Signin = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit = (values: IValues, action: FormikHelpers<IValues>) => {
    dispatch(logInUser(values));
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
          <label htmlFor="firstName">First Name</label>
          <Field id="name" name="name" placeholder="John" />
          <ErrorMessage name="name" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastname" name="lastname" placeholder="Doe" />
          <ErrorMessage name="lastname" />

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
