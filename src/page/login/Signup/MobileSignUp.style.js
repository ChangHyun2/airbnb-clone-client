import styled from '@emotion/styled';
import s from 'S';
import { emailIcon } from '@UI/SVGIcon/Icons';
import Divider from '@UI/Divider';

export const OrDivider = styled(Divider)`
  padding: 5px;

  & span {
    ${s.h(14)}
    padding: 0 1.2em;
  }
`;

export const ToSignIn = styled.div`
  ${s.center}
  ${s.h16}
  padding: 15px 0;
  text-align: center;
  margin-bottom: 10px;
`;

export const EmailIcon = styled(emailIcon)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  ${({ theme: { white } }) => `fill:${white}`}
`;
