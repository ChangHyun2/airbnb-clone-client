import styled from '@emotion/styled';

const Window = styled.div`
  position: relative;
  border: 2px solid red;
  ${({ windowSize }) => `
      width: ${windowSize.width}px;
      height:${windowSize.height}px;
  `}
  overflow: hidden;
`;

export default Window;
