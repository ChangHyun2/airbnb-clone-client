import styled from '@emotion/styled';
import s from 'S';
import Divider from '@UI/Divider';

export const Title = styled.h1`
  ${s.h(22)}
  line-height:1;
  margin-bottom: 1em;
`;

export const OrDivider = styled(Divider)`
  padding: 5px;

  & span {
    ${s.h(14)}
    padding: 0 1.2em;
  }
`;
