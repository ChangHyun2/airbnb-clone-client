import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AuthWithThirdParty } from '@store/actions/authActions';
import { useToggle } from '@hooks';
import Former from 'Former';
import {
  FieldBox,
  FieldWrapper,
  Form,
  GhostButton,
  Input,
  InputName,
  Label,
  ForgotPasswordLinkItem,
  RegisterLinkItem,
} from './EmailAuthForm.style';
import { SecondaryFluidButton } from '@UI/Button/FluidButton';

function EmailAuthForm() {
  const dispatch = useDispatch();

  return (
    <Former
      onSubmit={(values) => {
        dispatch(loginUser(values));
      }}
      initialValues={{
        email: '',
        password: '',
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
        password: (value) => {
          const error = {};
          if (!value) {
            error.required = 'password is required';
          } else if (value.length < 4) {
            error.minLength = 'password min length is 4';
          }
          return error;
        },
      }}
    >
      {({ getFieldProps, focused, values, errors }) => {
        const { on: showPassword, toggle: toggleShowPassword } = useToggle(
          false
        );

        React.useEffect(() => {
          console.log(values);
        }, [values]);

        React.useEffect(() => {
          console.log(errors);
        }, [errors]);

        return (
          <Form>
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
                    이메일
                  </InputName>
                </Label>
              </FieldWrapper>
              <FieldWrapper
                data-focused={!!focused.password}
                data-has-error={Object.keys(errors.password || {}).length > 0}
              >
                <Label>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    onFocus={() => setFieldFocus('password', true)}
                    {...getFieldProps('password')}
                  />
                  <InputName
                    data-shrink={
                      !!(focused.password || values.password.length > 0)
                    }
                  >
                    비밀번호
                  </InputName>
                </Label>
                <GhostButton type="button" onClick={toggleShowPassword}>
                  {showPassword ? '숨기기' : '표시'}
                </GhostButton>
              </FieldWrapper>
            </FieldBox>
            <SecondaryFluidButton type="submit" style={{ fontSize: '16px' }}>
              <span>로그인</span>
            </SecondaryFluidButton>

            <ForgotPasswordLinkItem>
              <Link
                to={`/forgot-password${
                  values.email ? `/?email=${values.email}` : ''
                }`}
              >
                <GhostButton>비밀번호를 잊으셨나요?</GhostButton>
              </Link>
            </ForgotPasswordLinkItem>
            <RegisterLinkItem>
              <div>에어비앤비 계정이 없으신가요?</div>
              <Link to="/signup">
                <GhostButton>등록하기</GhostButton>
              </Link>
            </RegisterLinkItem>
          </Form>
        );
      }}
    </Former>
  );
}

export default EmailAuthForm;
