import styled from '@emotion/styled';
import s from 'S';
import { MobileWrapper } from '@UI/Wrapper';

export const BlackMobileWrapper = styled(MobileWrapper)`
  ${({ theme: { black2, white } }) => `
    background-color:${black2}
    color:${white}
  `}
`;

export const Section = styled.section`
  margin-bottom: 24px;

  h2 {
    ${s.h22}
  }
`;
