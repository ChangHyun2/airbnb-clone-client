import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import s from 'S';
import Divider from '@UI/Divider';
import ghostButton from '@UI/Button/GhostButton';
import EmailRegisterButton from './signupLogin/EmailRegisterButton';
import ThirdAuth from './shared/ThirdAuth';
import NavLists from './shared/NavLists';

const SmWrapper = styled.div`
  margin: 36px 24px 24px 24px;
`;

const Span = styled.span`
  ${s.h(14)}
  padding: 0 1.2em;
`;
const Center = styled.div`
  ${s.center}
  text-align:center;
  margin-bottom: 10px;
`;
const GhostButton = styled(ghostButton)`
  display: block;
  ${({ theme: { secondary } }) => `
    color: ${secondary}
  `}
`;

function SmOnlyLogin() {
  return (
    <SmWrapper>
      <ThirdAuth />

      <div style={{ marginBottom: '10px' }}>
        <Divider>
          <Span>또는</Span>
        </Divider>
      </div>

      <EmailRegisterButton />

      <s.Text size={s.h16}>
        <Center>
          <div>이미 에어비앤비 계정이 있으신가요?</div>
          <Link to="/login">
            <GhostButton>로그인</GhostButton>
          </Link>
        </Center>
      </s.Text>

      <Divider />

      <NavLists />
      {/* <Locale /> */}
    </SmWrapper>
  );
}

export default SmOnlyLogin;
