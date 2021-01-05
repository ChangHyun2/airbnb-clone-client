import React from 'react';
import styled from '@emotion/styled';
import BaseButton from './BaseButton';

const Button = styled(BaseButton)`
  border-radius: 8px;
  border: none;
  ${({ size = 'sm' }) =>
    `padding: ${
      size === 'sm'
        ? '7px 15px'
        : size === 'md'
        ? '10px 20px'
        : size === 'lg'
        ? '13px 23px'
        : ''
    };`}
`;

export const BlackButton = styled(Button)`
  ${({ theme: { black, grey5, white } }) => `
    border: 1px solid ${white}
    background-color:${black}
    color: ${white}
    &:hover{
      background-color:${grey5}
    }
  `}
`;

export const PrimaryButton = styled(Button)`
  ${({ theme: { primary, white } }) => `
    background-color:${primary}
    color:${white}
  `}
`;

export const SecondaryButton = styled(Button)`
  ${({ theme: { secondary, white } }) => `
    background-color:${secondary}
    color:${white}
  `}
`;

export const InvertedButton = styled(Button)`
  ${({ theme: { black, whiteGrey0, white } }) => `
    border: 1px solid ${black}
    &:hover{
      background-color:${whiteGrey0}
    }
  `}
`;
export default Button;
