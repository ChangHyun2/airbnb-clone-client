import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50%{
    background-position: 100% 50%;
  }
  10%{
    background-position: 0% 50%;
  }
`;

const flick = keyframes`
  0%, 80%, 100%{
    opacity: 0;
  }
  
  30%, 50%{
    opacity: 1;
  }
`;

const Wrapper = styled.span`
  display:inline-block;
}
`;

const Dot = styled.span`
  ${({ size }) => `
    width: ${size}px;
    height: ${size}px;
  `}
  display: inline-block;
  background: linear-gradient(-90deg, #666, #999, #bbb, #fff);
  background-size: 600% 600%;
  animation: ${gradient} 1s infinite, ${flick} 1s infinite;
  line-height: 1;
  vertical-align: middle;
  border-radius: 100%;
  background-color: #000;

  &:not(:last-child) {
    margin-right: 3px;
  }
  &:nth-of-type(2) {
    animation-delay: 0.2s;
  }
  &:last-child {
    animation-delay: 0.4s;
  }
`;

export const TripleDotLoading = ({ size = 7, ...otherProps }) => {
  return (
    <Wrapper {...otherProps}>
      <Dot size={size} />
      <Dot size={size} />
      <Dot size={size} />
    </Wrapper>
  );
};
