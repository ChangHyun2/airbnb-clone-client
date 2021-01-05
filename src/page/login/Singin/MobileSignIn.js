import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import EmailAuthForm from './mobileSignIn/EmailAuthForm';
import ThirdAuth from '../shared/ThirdAuth';
import NavLists from '../shared/NavLists';
import { OrDivider, Title } from './MobileSignIn.styled';
import { MobileWrapper } from '@UI/Wrapper';
import Divider from '@UI/Divider';

function MobileSignIn() {
  return (
    <MobileWrapper>
      <Title>환영합니다!</Title>
      <ThirdAuth />

      <OrDivider>
        <span>또는</span>
      </OrDivider>
      <EmailAuthForm />
      <Divider />
      <NavLists />
      {/* <Locale /> */}
    </MobileWrapper>
  );
}

export default MobileSignIn;
