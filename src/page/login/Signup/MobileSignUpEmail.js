import React from 'react';
import styled from '@emotion/styled';
import s from 'S';
import SignUpEmailForm from './mobileSignUpEmail/SignUpEmailForm';
import { MobileWrapper } from '@UI/Wrapper';
import { arrowLeftIcon as ArrowLeftIcon } from '@UI/SVGIcon/Icons';

const GoBack = styled(s.Row)`
  margin: -10px 0 30px;

  svg {
    width: 15px;
    height: 15px;
    stroke: currentcolor;
    stroke-width: 3;
  }
`;

const H1 = styled.h1`
  ${s.h22}
  margin-bottom: 23px;
`;

function MobileSignUpEmail() {
  return (
    <MobileWrapper>
      <GoBack>
        <ArrowLeftIcon />
      </GoBack>
      <H1>이메일로 회원 가입</H1>
      <SignUpEmailForm />
    </MobileWrapper>
  );
}

export default MobileSignUpEmail;
