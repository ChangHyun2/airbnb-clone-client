import React from 'react';
import { useSelector } from 'react-redux';
import { useToggle } from '@hooks';
import WishListAdder from './header/WishListAdder';
import {
  AddListButton,
  AuthHeader,
  Divider,
  H1,
  LoginButton,
  Modal,
} from './Header.styled';
import { scaleUp, scaleDown } from '@UI/animation/animation';

function Header() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const modal = useToggle(false);

  return isAuth ? (
    <AuthHeader>
      <H1>저장 목록</H1>
      <AddListButton onClick={modal.setOn} size={'lg'}>
        목록 만들기
      </AddListButton>
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
