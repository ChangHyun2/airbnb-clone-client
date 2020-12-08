import React from 'react';
import styled from '@emotion/styled';

const Window = styled.div`
  position: relative;
  border: 2px solid red;
  ${({ windowSize }) => `
      width: ${windowSize.width}px;
      height:${windowSize.height}px;
  `}
`;

export default Window;
