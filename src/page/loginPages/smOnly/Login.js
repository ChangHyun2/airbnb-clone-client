import React from 'react';
import styled from '@emotion/styled';
import s from 'S';
import Divider from '@UI/Divider';
import LoginForm from './login/LoginForm';
import ThirdAuth from './shared/ThirdAuth';
import NavLists from './shared/NavLists';

const SmWrapper = styled.div`
  margin: 36px 24px 24px 24px;
`;

const Title = styled.h1`
  ${s.h(22)}
  line-height:1;
  margin-bottom: 1em;
`;

const Span = styled.span`
  ${s.h(14)}
  padding: 0 1.2em;
`;

function SmOnlyLogin() {
  return (
    <SmWrapper>
      <Title>환영합니다!</Title>
      <ThirdAuth />

      <Divider>
        <Span>또는</Span>
      </Divider>

      <LoginForm />

      <Divider />

      <NavLists />
      {/* <Locale /> */}
    </SmWrapper>
  );
}

export default SmOnlyLogin;
