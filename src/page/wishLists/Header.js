import React from 'react';
import styled from '@emotion/styled';
import s from 'S';
import { useToggle } from '@hooks';
import { useAuthContext } from '@context/AuthContext';
import divider from '@UI/Divider';
import BaseButton from '@UI/Button/BaseButton';
import BaseModal from '@UI/Modal';
import FluidButton from '@UI/Button/Mobile/FluidButton';
import { scaleUp, scaleDown } from '@UI/animation/animation';
import WishListAdder from './header/WishListAdder';

const AuthHeader = styled.div`
  ${s.spaceBetween}
`;

const Button = styled(BaseButton)`
  display: block;
  padding: 12px 23px;
  border-radius: 7px;
  font-weight: bold;

  ${({ theme: { black } }) => `
    border: 1px solid ${black}
  `}
`;

const AddListButton = styled(Button)`
  ${s.h16}
  transition: transform 0.05s ease-out;

  &:active {
    transform: scale(0.95);
  }

  ${({ theme: { whiteGrey, white } }) => `
    background-color:${white}
    &:hover {
      background-color: ${whiteGrey}
    }
  `}
`;

const Modal = styled(BaseModal)`
  width: 95%;
  max-width: 400px;
  max-height: 400px;
  background-color: white;
`;

const H1 = styled.h1`
  ${s.bold}
  ${s.h32}
  margin-bottom: 30px;
`;

const LoginButton = styled(FluidButton)`
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

const Divider = styled(divider)`
  width: 100%;
  margin: 1.5em 0;
`;

function Header() {
  const isAuth = useAuthContext();
  const modal = useToggle(false);

  return isAuth ? (
    <AuthHeader>
      <H1>저장 목록</H1>
      <AddListButton onClick={modal.setOn}>목록 만들기</AddListButton>
      <Modal
        show={modal.on}
        onClose={modal.setOff}
        duration={0.4}
        animationOnMount={scaleUp}
        animationOnUnMount={scaleDown}
      >
        <WishListAdder modalSetOff={modal.setOff} />
      </Modal>
    </AuthHeader>
  ) : (
    <header>
      <H1>저장 목록</H1>
      <LoginButton>로그인</LoginButton>
      <Divider />
    </header>
  );
}

export default Header;
