import styled from '@emotion/styled';
import s from 'S';
import divider from '@UI/Divider';
import { InvertedButton } from '@UI/Button/Button';
import BaseModal from '@UI/Modal';
import FluidButton from '@component/UI/Button/FluidButton';

export const AuthHeader = styled.div`
  ${s.spaceBetween}
`;

export const AddListButton = styled(InvertedButton)`
  ${s.h16}
  ${s.bold}

  transition: transform 0.05s ease-out;
  &:active {
    transform: scale(0.95);
  }
`;

export const Modal = styled(BaseModal)`
  width: 95%;
  max-width: 400px;
  max-height: 400px;
  background-color: white;
`;

export const H1 = styled.h1`
  ${s.bold}
  ${s.h32}
  margin-bottom:1em;
`;

export const LoginButton = styled(FluidButton)`
  ${({ theme: { white, black, black2 } }) => `
    color: ${white}
    background-color: ${black2}
    border: 2px solid ${black2}
    &:hover {
      background-color: ${black}
      border: 2px solid ${black}
    }
  `}
`;

export const Divider = styled(divider)`
  width: 100%;
  margin: 1.5em 0;
`;
