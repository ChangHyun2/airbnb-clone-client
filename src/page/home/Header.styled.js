import styled from '@emotion/styled';
import s from 'S';

export const SearchWrapper = styled.section`
  position: relative;
  height: 488px;
  width: 100%;
  border-top: 1px solid black;
  border-bottom: none;
`;

export const SearchSection = styled.div`
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

  & p { 
    ${s.h32}
    ${s.bold}

    ${({ theme: { white } }) => `
      color:${white}
    `}
  }

  & a {
    ${s.bold}
    ${s.h14}
    border: none;
    border-radius: 8px;
    padding: 7px 12px;
    ${({ theme: { white, black1 } }) => `
      color: ${black1}  
      background-color: ${white}
    `}
  }
`;

export const Notice = styled.div`
  ${s.textCenter}
  padding: 1.6em;
  ${({ theme: { black1, white } }) => `
    background-color: ${black1}
    ${s.over.sm(`
      background-color: ${white}
    `)}
  `}

  & a {
    ${s.bold}
    ${s.h14}
    text-decoration:underline;

    ${({ theme: { grey1, black1 } }) => `
      color:${grey1}
      &:visited{
        color:${grey1}
      }
      ${s.over.sm(`
        color: ${black1}
        &:visited{
          color:${black1}
        }
      `)}
    `}
  }
`;
