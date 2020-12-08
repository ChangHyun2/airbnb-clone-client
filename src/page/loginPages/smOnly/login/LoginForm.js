import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Former, { Form as form } from 'Former';
import { useToggle } from '@hooks';
import ghostButton from '@UI/Button/GhostButton';
import { SecondaryFluidButton } from '@UI/Button/Mobile/FluidButton';
import s from 'S';

const Form = styled(form)`
  padding: 10px 0;
`;

const FieldBox = styled.div`
  border-radius: 7px;
  margin: 1.8em 0;

  ${({ theme: { grey3 } }) => `
    box-shadow: inset 0 0 0 1px ${grey3}
  `}
`;

const FieldWrapper = styled.div`
  ${s.center}
  width: 100%;
  height: 57px;
  padding: 5px 10px;

  ${({ theme: { grey3 } }) => `
  &:not(:first-of-type){
    border-top: 1px solid ${grey3}
  }
  `}
  &[data-focused='true'] {
    box-shadow: inset 0 0 0 2px black;
    border-radius: 7px;
    & ~ div {
      border-top: 1px solid transparent;
    }
  }
  &[data-has-error='true'] {
    box-shadow: inset 0 0 0 2px rgb(193, 53, 21);
    & div {
      color: rgb(193, 53, 21);
    }
    &:not([data-focused='true']) {
      background-color: rgba(193, 53, 21, 0.03);
    }
    & div[data-shrink='true'] {
      font-weight: bold;
    }
  }
`;

const Label = styled.label`
  position: relative;
  flex: 1;
  display: block;
  height: 100%;
`;
const InputName = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 15px;
  transition: top 0.2s, transform 0.2s, font-size 0.2s;
  &[data-shrink='true'] {
    font-size: 12px;
    top: 0;
    transform: translateY(0);
  }
  ${({ theme }) => `
    color: ${theme.grey6}
  `}
`;

const Input = styled.input`
  display: block;
  position: absolute;
  top: 10px;
  border: 1px blue solid;
  height: calc(100% - 5px);
  width: 100%;
  outline: none;
  border: none;
  padding: 0;
  background: transparent;
  &:focus {
    border: none;
  }
`;

const GhostButton = styled(ghostButton)`
  padding: 0.5em;
  margin-left: 5px;
  background-color: transparent;
  ${s.h(14)}
  ${({ theme: { secondary } }) => `
    color: ${secondary}
  `}
`;

// Input
// touched일 때 value가 ''일 경우 적용하기
// onBlur일 때 value가 없을 경우 제거하기
const Center = styled.div`
  ${s.center}
  text-align:center;
  margin-bottom: 10px;
`;

function LoginForm() {
  return (
    <Former
      onSubmit={(values) => console.log(values)}
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
            <Center>
              <Link
                to={`/forgot_password${
                  values.email ? `/?email=${values.email}` : ''
                }`}
              >
                <GhostButton
                  css={css`
                    margin: 3px 0 10px;
                  `}
                >
                  비밀번호를 잊으셨나요?
                </GhostButton>
              </Link>
            </Center>
            <Center>
              <div
                css={css`
                  ${s.h(16)}
                `}
              >
                에어비앤비 계정이 없으신가요?
              </div>
              <Link to="/signup-login">
                <GhostButton
                  css={css`
                    ${s.h(16)}
                  `}
                >
                  등록하기
                </GhostButton>
              </Link>
            </Center>
          </Form>
        );
      }}
    </Former>
  );
}

export default LoginForm;
