import React from 'react';
import styled from '@emotion/styled';
import { zIndex } from '@variable';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 1s linear;
  background-color: rgb(34, 34, 34);
  opacity: 0.5;
  z-index: ${zIndex.Backdrop};
`;

export default Backdrop;
