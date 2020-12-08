import styled from '@emotion/styled';
import React from 'react';
import s from 'S';
import BaseButton from '@UI/Button/BaseButton';

const StyledFluidButton = styled(BaseButton)`
  ${s.spaceBetween}
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

const FluidButton = React.forwardRef(
  ({ Icon, onClick, children, ...others }, ref) => {
    return Icon ? (
      <StyledFluidButton ref={ref} onClick={onClick} {...others}>
        <Icon />
        <s.Flex>{children}</s.Flex>
      </StyledFluidButton>
    ) : (
      <StyledFluidButton ref={ref} onClick={onClick} {...others}>
        <s.Flex>{children}</s.Flex>
      </StyledFluidButton>
    );
  }
);

export const SecondaryFluidButton = styled(FluidButton)`
  ${({ theme: { white, secondary } }) => `
      border: 2px solid ${secondary}
      color: ${white}
      background-color: ${secondary}
    `}
`;

export default FluidButton;
