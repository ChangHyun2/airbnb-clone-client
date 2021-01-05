import React from 'react';
import { Link } from 'react-router-dom';
import ThirdAuth from '../shared/ThirdAuth';
import NavLists from '../shared/NavLists';
import { EmailIcon, OrDivider, ToSignIn } from './MobileSignUp.style';
import { SecondaryFluidButton } from '@UI/Button/FluidButton';
import { SecondaryGhostButton } from '@UI/Button/GhostButton';
import Divider from '@UI/Divider';
import { MobileWrapper } from '@UI/Wrapper';

function MobileSignIn() {
  return (
    <MobileWrapper>
      <ThirdAuth />
      <OrDivider>
        <span>또는</span>
      </OrDivider>
      <Link to="/signup-email">
        <SecondaryFluidButton Icon={EmailIcon}>
          이메일로 회원 가입
        </SecondaryFluidButton>
      </Link>
      <ToSignIn>
        <div>이미 에어비앤비 계정이 있으신가요?</div>
        <Link to="/signin">
          <SecondaryGhostButton>로그인</SecondaryGhostButton>
        </Link>
      </ToSignIn>
      <Divider />
      <NavLists />
      {/* <Locale /> */}
    </MobileWrapper>
  );
}

export default MobileSignIn;
