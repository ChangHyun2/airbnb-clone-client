import React from 'react';
import styled from '@emotion/styled';
import FluidButton from '@UI/Button/Mobile/FluidButton';
import { googleIcon } from '@UI/SVGIcon/Icons';

const GoogleFluidButton = styled(FluidButton)`
  ${({ theme: { grey4 } }) => `
    border: 2px solid ${grey4}
  `}
  color: #444;
`;

const GoogleIcon = styled(googleIcon)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const GoogleAuthButton = (props) => (
  <GoogleFluidButton Icon={GoogleIcon} {...props}>
    구글 계정으로 로그인
  </GoogleFluidButton>
);

export default GoogleAuthButton;
