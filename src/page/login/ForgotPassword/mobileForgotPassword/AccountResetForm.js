import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import Former from 'Former';
import s from 'S';
import { sendResetPasswordEmail } from '@api/sendgrid';
import axios from '@/axios';
import {
  Alert,
  AlertIcon,
  EmptyAlert,
  FieldBox,
  FieldWrapper,
  Form,
  Input,
  InputName,
  Label,
} from './AccountResetForm.styled';
import { AlertHeadPopup } from '@UI/HeadPopup';
import Divider from '@UI/Divider';
import { BlackFluidButton } from '@UI/Button/FluidButton';
import { useToggle } from '@hooks';

const hasError = (errors) => {
  let hasError = false;
  Object.keys(errors).forEach((fieldName) => {
    const fieldError = errors[fieldName];

    if (Object.keys(fieldError).length > 0) {
      hasError = true;
      return;
    }
  });

  return hasError;
};

const useQuery = () => new URLSearchParams(useLocation().search);

function AccountResetForm() {
  const dispatch = useDispatch();
  const AlertPopup = useToggle();
  const query = useQuery();
  const history = useHistory();

  const [submittedEmail, setSubmittedEmail] = React.useState(
    query.get('email')
  );

  return (
    <Former
      onSubmit={async (values) => {
        const { email } = values;

        try {
          const {
            data: { name },
          } = await axios.get('/api/users?email=' + email);

          AlertPopup.setOff();

          await sendResetPasswordEmail(email, name);
          history.push('/login');
        } catch (e) {
          setSubmittedEmail(email);
          AlertPopup.setOn();
          throw new Error(e);
        }
      }}
      initialValues={{
        email: query.get('email') || '',
      }}
      validationSchema={{
        email: (value) => {
          const error = {};
          if (!value) {
            error.required = 'email is required';
          } else if (value.indexOf('@') === -1) {
            error.format = 'email format is not valid';
          }
          return error;
        },
      }}
    >
      {({ getFieldProps, focused, values, errors, isSubmitting }) => (
        <Form>
          <AlertHeadPopup
            show={AlertPopup.on}
            onClick={() => AlertPopup.setOff()}
            message={`${submittedEmail}의 계정이 존재하지 않습니다.
              다른 이메일 또는 잘못된 이메일로 가입하셨을 수 있습니다.`}
          />
          <FieldBox>
            <FieldWrapper
              data-focused={!!focused.email}
              data-has-error={Object.keys(errors.email || {}).length > 0}
            >
              <Label>
                <Input
                  type="email"
                  onFocus={() => setFieldFocus('email', true)}
                  autoComplete="off"
                  {...getFieldProps('email')}
                />
                <InputName
                  data-shrink={!!(focused.email || values.email.length > 0)}
                >
                  Email
                </InputName>
              </Label>
            </FieldWrapper>
          </FieldBox>
          {hasError(errors) ? (
            <Alert>
              <span>
                <AlertIcon />
              </span>
              <span>이메일을 입력하세요. </span>
            </Alert>
          ) : (
            <EmptyAlert />
          )}
          <BlackFluidButton
            type="submit"
            style={{
              fontSize: '16px',
              marginTop: '150px',
              marginBottom: '70px',
            }}
            isSubmitting={isSubmitting}
          >
            <span>재설정 링크 전송하기</span>
          </BlackFluidButton>
          <Divider />
        </Form>
      )}
    </Former>
  );
}

export default AccountResetForm;
