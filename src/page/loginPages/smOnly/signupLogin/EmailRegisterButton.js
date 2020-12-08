import React from 'react';
import styled from '@emotion/styled';
import { emailIcon } from '@UI/SVGIcon/Icons';
import { SecondaryFluidButton } from '@UI/Button/Mobile/FluidButton';

const EmailIcon = styled(emailIcon)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  ${({ theme: { white } }) => `fill:${white}`}
`;

const EmailRegisterButton = (props) => (
  <SecondaryFluidButton Icon={EmailIcon} {...props}>
    이메일로 회원 가입
  </SecondaryFluidButton>
);

export default EmailRegisterButton;
