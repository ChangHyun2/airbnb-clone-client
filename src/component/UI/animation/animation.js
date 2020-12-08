import { keyframes } from '@emotion/react';

const scaleUp = keyframes`
 0%{
   transform: translate(-50%, -50%) scale(0);
 }
 100%{
   transform: translate(-50%, -50%) scale(1);
 }
`;

const scaleDown = keyframes`
 0%{
   transform:translate(-50%, -50%) scale(1);
 }
 100%{
   transform:translate(-50%, -50%) scale(0);
 }
`;

const fadeIn = keyframes`
  0%{
    opacity:0;
  }
  100%{
    opacity:0.5;
  }
`;

const fadeOut = keyframes`
  0%{
    opacity:0.5;
  }
  100%{
    opacity:0;
  }
`;
export { scaleUp, scaleDown, fadeIn, fadeOut };
