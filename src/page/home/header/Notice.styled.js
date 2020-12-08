import styled from '@emotion/styled';
import s from 'S';

export const Wrapper = styled.div`
  ${s.textCenter}
  padding: 1.6em;

  ${({ theme: { black1, white } }) => `
    background-color: ${black1}
    ${s.over.sm(`
      background-color: ${white}
    `)}
  `}
`;

export const A = styled.a`
  ${s.bold}
  ${s.h14}
  text-decoration:underline;

  ${({ theme: { grey1, black1 } }) => `
    color:${grey1}
    ${s.over.sm(`
      color: ${black1}
    `)}
  `}
`;
