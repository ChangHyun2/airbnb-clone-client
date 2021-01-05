import React from 'react';
import { useHistory } from 'react-router-dom';
import NavLists from '../shared/NavLists';
import AccountResetForm from './mobileForgotPassword/AccountResetForm';
import { ArrowLeftIcon, Header, Main } from './MobileForgotPassword.styled';
import RoundButton from '@UI/Button/RoundButton';
import { MobileWrapper } from '@UI/Wrapper';
import Divider from '@UI/Divider';

function ForgotPassword() {
  const history = useHistory();

  return (
    <>
      <Header>
        <RoundButton
          onClick={() => {
            history.push('/signin');
          }}
        >
          <ArrowLeftIcon />
        </RoundButton>
      </Header>
      <Divider />
      <Main>
        <div style={{ padding: '0 8px' }}>
          <p>
            계정으로 사용하는 이메일 주소를 입력하시면, 비밀번호 재설정 링크를
            전송해드립니다.
          </p>
          <AccountResetForm />
        </div>
      </Main>
      <MobileWrapper>
        <NavLists />
      </MobileWrapper>
    </>
  );
}

export default ForgotPassword;
