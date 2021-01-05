import styled from '@emotion/styled';
import s from 'S';
import { arrowLeftIcon } from '@UI/SVGIcon/Icons';
import { MobileWrapper } from '@UI/Wrapper';

export const Header = styled.header`
  padding: 18px 12px 6px;
`;

export const Main = styled(MobileWrapper)`
  p {
    ${s.h16}
  }
`;

export const ArrowLeftIcon = styled(arrowLeftIcon)`
  width: 13px;
  height: 13px;
  stroke: currentcolor;
  stroke-width: 3;
`;
