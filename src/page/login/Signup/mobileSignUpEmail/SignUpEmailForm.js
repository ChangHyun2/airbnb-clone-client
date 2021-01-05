import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import s from 'S';
import Former from 'Former';
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
} from './SignUpEmailForm.styled';
import { TripleDotLoading } from '@component/UI/Loading';
import { AlertHeadPopup } from '@UI/HeadPopup';
import Divider from '@UI/Divider';
import { SecondaryFluidButton } from '@UI/Button/FluidButton';
import GhostButton from '@UI/Button/GhostButton';
import { useToggle } from '@hooks';
import errorReducer from '@store/reducers/errorReducer';
import { validateSchema, validateField } from './SignUpEmailFormValidate';

// {hasError(errors) ? (
//   <Alert>
//     <span>
//       <AlertIcon />
//     </span>
//     <span>이메일을 입력하세요. </span>
//   </Alert>
// ) : (
//   <EmptyAlert />

function SignUpEmailForm() {
  const dispatch = useDispatch();
  const AlertPopup = useToggle();
  const history = useHistory();

  const alertPopup = (
    <AlertHeadPopup
      show={AlertPopup.on}
      onClick={() => AlertPopup.setOff()}
      message={`~~를 다시 입력해주세요.`}
    />
  );

  return (
    <Former
      onSubmit={async (values) => {
        console.log('submit sign up email form');
        AlertPopup.setOff();
        history.push('/signup_login#email');
      }}
      initialValues={{
        firstName: '',
        lastName: '',
        birthday: '',
        email: '',
        password: '',
        promotionConsent: '',
      }}
      validationSchema={validateSchema}
    >
      {({ getFieldProps, focused, values, errors, isSubmitting }) => (
        <Form>
          <FieldBox>
            <FieldWrapper
              data-focused={!!focused.firstName}
              data-has-error={Object.keys(errors.firstName || {}).length > 0}
            >
              <Label>
                <Input
                  type="firstName"
                  onFocus={() => setFieldFocus('firstName', true)}
                  autoComplete="off"
                  {...getFieldProps('firstName')}
                />
                <InputName
                  data-shrink={
                    !!(focused.firstName || values.firstName.length > 0)
                  }
                >
                  이름(예: 길동)
                </InputName>
              </Label>
            </FieldWrapper>
            <FieldWrapper
              data-focused={!!focused.lastName}
              data-has-error={Object.keys(errors.lastName || {}).length > 0}
            >
              <Label>
                <Input
                  type="lastName"
                  onFocus={() => setFieldFocus('lastName', true)}
                  autoComplete="off"
                  {...getFieldProps('lastName')}
                />
                <InputName
                  data-shrink={
                    !!(focused.lastName || values.lastName.length > 0)
                  }
                >
                  성(예: 홍)
                </InputName>
              </Label>
            </FieldWrapper>
          </FieldBox>
          <s.Text>
            정부 발급 신분증에 표시된 이름과 일치하는지 확인하세요.
          </s.Text>
          <FieldBox>
            <FieldWrapper
              data-focused={!!focused.birthday}
              data-has-error={Object.keys(errors.birthday || {}).length > 0}
            >
              <Label>
                <Input
                  type="date"
                  onFocus={() => setFieldFocus('birthday', true)}
                  autoComplete="off"
                  {...getFieldProps('birthday')}
                />
                <InputName
                  data-shrink={
                    !!(focused.birthday || values.birthday.length > 0)
                  }
                >
                  생일
                </InputName>
              </Label>
            </FieldWrapper>
          </FieldBox>
          <s.Text>
            만 18세 이상만 에어비앤비를 이용할 수 있습니다. 다른 사용자에게
            회원님의 생년월일이 공개되지 않습니다.
          </s.Text>
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
          </FieldBox>
          <s.Text>예약 확인 이메일이 전송됩니다.</s.Text>
          <FieldBox>
            <FieldWrapper
              data-focused={!!focused.password}
              data-has-error={Object.keys(errors.password || {}).length > 0}
            >
              <Label>
                <Input
                  type="password"
                  onFocus={() => setFieldFocus('password', true)}
                  autoComplete="off"
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
            </FieldWrapper>
          </FieldBox>
          <s.Text size={10} bold>
            에어비앤비의 마케팅 프로모션, 특별 할인 및 추천 여행 정보, 정책
            변경사항을 이메일로 보내드립니다.
          </s.Text>
          <s.Row>
            <input type="checkbox" />
            <s.Text>
              에어비앤비에서 보내는 마케팅 메세지를 받고싶지 않습니다.
            </s.Text>
          </s.Row>
          <Divider />
          <s.Text size={10} bold>
            {[
              '에어비앤비의',
              <a href="#">서비스 약관</a>,
              ',',
              <a href="#">특별 할인 및 추천 여행 정보</a>,
              ',',
              <a href="#">개인정보 처리방침</a>,
              ',',
              <a href="#">차별 금지 정책</a>,
              '에 동의합니다.',
            ]}
          </s.Text>
          <SecondaryFluidButton
            type="submit"
            style={{
              fontSize: '16px',
              marginTop: '150px',
              marginBottom: '70px',
            }}
            isSubmitting={isSubmitting}
          >
            에어비엔비 계정 만들기
          </SecondaryFluidButton>
        </Form>
      )}
    </Former>
  );
}

export default SignUpEmailForm;
