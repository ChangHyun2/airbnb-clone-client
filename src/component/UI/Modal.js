import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Backdrop from './Backdrop';
import { zIndex } from '@variable';
import { fadeIn, fadeOut } from '@UI/animation/animation';

const Content = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center;
  border-radius: 1em;
  background-color: none;
  z-index: ${zIndex.modal};
  animation: ${({ show, animationOnMount, animationOnUnMount }) =>
      show ? animationOnMount : animationOnUnMount}
    ${({ duration }) => duration}s;
`;

const defaultBackdrop = styled(Backdrop)`
  animation: ${({ show }) => (show ? fadeIn : fadeOut)} linear
    ${({ duration }) => duration}s;
`;

const useAnimation = (show) => {
  const [shouldRender, setShouldRender] = useState(show);

  useEffect(() => {
    if (show) return setShouldRender(true);
  }, [show]);

  const handleAnimationEnd = () => {
    if (!show) {
      setShouldRender(false);
    }
  };

  return [shouldRender, handleAnimationEnd];
};

const Modal = ({
  Backdrop = defaultBackdrop,
  show,
  onClose,
  children,
  backdropProps,
  duration,
  animationOnMount,
  animationOnUnMount,
  ...props
}) => {
  const [shouldRender, handleAnimationEnd] = useAnimation(show);

  return shouldRender ? (
    <>
      <Backdrop
        onClick={onClose}
        show={show}
        duration={duration}
        {...backdropProps}
      />
      <Content
        show={show}
        onAnimationEnd={handleAnimationEnd}
        duration={duration}
        animationOnMount={animationOnMount}
        animationOnUnMount={animationOnUnMount}
        {...props}
      >
        {children}
      </Content>
    </>
  ) : null;
};

export default Modal;
