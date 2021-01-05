import * as yup from 'yup';

// https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
// 대/소문자 1개 이상, 숫자 1개 이상, 특수문자 1개 이상, 최소 8자 최대 20자

const validateSchema = yup.object().shape({
  firstName: yup.string().required('first name is required'),
  lastName: yup.string().required('last name is required'),
  birthDay: yup.date().required('birthday is required'),
  email: yup.string().required('email is required').email(),
  password: yup
    .string()
    .required('password is required')
    .matches(
      '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$'
    ),
  password2: yup
    .string()
    .required('password2 is required')
    .oneOf([yup.ref('password')], 'passwords must match'),
});

const validateField = (values, field) =>
  yup.reach(validateSchema, field).validate(values[field]);

export { validateField, validateSchema };
