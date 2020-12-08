import styled from '@emotion/styled';
import s from 'S';
import BaseButton from '@UI/Button/BaseButton';

export const Section = styled.section`
  position: relative;
  height: 488px;
  width: 100%;
  border-top: 1px solid black;
  border-bottom: none;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  ${({ theme: { black } }) => `
  background-color: ${black}
  `}

  & > div {
    height: 100%;
    padding: 60px 24px;
    width: 100%;
    background-image: url('https://a0.muscache.com/im/pictures/e831a0e1-80b5-490b-a8fa-067c540c24c1.jpg?im_w=720');
    background-size: cover;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-position: right;
  }
`;

export const P = styled.p`
  ${s.h32}
  ${s.bold}

  ${({ theme: { white } }) => `
    color:${white}
  `}
`;

export const Button = styled(BaseButton)`
  ${s.bold}
  ${s.h14}
  border: none;
  border-radius: 8px;
  padding: 7px 12px;

  ${({ theme: { white, black1 } }) => `
    color: ${black1}  
    background-color: ${white}
  `}
`;
