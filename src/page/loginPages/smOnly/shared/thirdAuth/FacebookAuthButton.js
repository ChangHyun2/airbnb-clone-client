import React from 'react';
import styled from '@emotion/styled';
import { facebookIcon } from '@UI/SVGIcon/Icons';
import FluidButton from '@UI/Button/Mobile/FluidButton';

const FacebookFluidButton = styled(FluidButton)`
  ${({ theme: { facebookDark, white } }) => `
    border: 2px solid ${facebookDark}
    background-color: ${facebookDark};
    color: ${white};
    & svg {
      fill: ${white};
    }  
  `}
`;

const FacebookIcon = styled(facebookIcon)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const FacebookAuthButton = (props) => (
  <FacebookFluidButton Icon={FacebookIcon} {...props}>
    페이스북 계정으로 로그인
  </FacebookFluidButton>
);

export default FacebookAuthButton;
