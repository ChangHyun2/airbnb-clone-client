import styled from '@emotion/styled';
import s from 'S';

export const Profile = styled.div`
  ${s.spaceBetween}

  & div {
    h1 {
      ${s.h(22)}
      line-height:1;
      margin-bottom: 10px;
    }
    a,
    button {
      ${s.h(16)}
    }

    margin-bottom: 30px;
  }
`;
