import styled from '@emotion/styled';
import React from 'react';
import s from 'S';
import BaseButton from '@UI/Button/BaseButton';

const StyledFluidButton = styled(BaseButton)`
  ${({ Icon }) => Icon && s.spaceBetween}
  ${s.h14}
  ${s.bold}
  width: 100%;
  padding: 12px 10px;
  margin-bottom: 15px;
  border-radius: 8px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% + 13px);
    height: 58px;
    border: 1px solid transparent;
    border-radius: 13px;
    transition: border-color 0.7s;
  }
  &:focus::before {
    border-color: #555;
  }
`;

export const FluidButton = React.forwardRef(
  ({ Icon, children, ...others }, ref) => {
    return (
      <StyledFluidButton ref={ref} {...others} Icon={Icon}>
        {Icon ? <Icon /> : null}
        <s.Flex>{children}</s.Flex>
      </StyledFluidButton>
    );
  }
);

export const BlackFluidButton = styled(FluidButton)`
  ${({ theme: { black, grey5, white } }) => `
    border: 1px solid ${white}
    background-color:${black}
    color: ${white}
  `}
`;

export const PrimaryFluidButton = styled(FluidButton)`
  ${({ theme: { primary, white } }) => `
    border: 2px solid ${primary}
    background-color:${primary}
    color:${white}
  `}
`;

export const SecondaryFluidButton = styled(FluidButton)`
  ${({ theme: { white, secondary } }) => `
      border: 2px solid ${secondary}
      color: ${white}
      background-color: ${secondary}
    `}
`;

export const FacebookFluidButton = styled(FluidButton)`
  ${({ theme: { facebookDark, white } }) => `
    border: 2px solid ${facebookDark}
    background-color: ${facebookDark};
    color: ${white};
    & svg {
      fill: ${white};
    }  
  `}
`;

export const GoogleFluidButton = styled(FluidButton)`
  ${({ theme: { grey4 } }) => `
  border: 2px solid ${grey4}
`}
  color: #444;
`;

export default FluidButton;
