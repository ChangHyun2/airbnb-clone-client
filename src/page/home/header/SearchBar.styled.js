import { searchIcon } from '@UI/SVGIcon/Icons';
import styled from '@emotion/styled';
import s from 'S';

export const Sticky = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1;
  top: 0;
  ${s.center}
  padding: 17px 24px;
  transition: background-color 0.5s;
  ${({ isSticked, theme: { white } }) =>
    isSticked &&
    `
    background-color: ${white}
    position:fixed;
    top:0;
    width:100%;
    `};
`;

export const Wrapper = styled.div`
  ${s.center}
  width: 100%;
  border-radius: 2em;
  transition: background-color 0.5s;
  ${({ isSticked, theme: { whiteGrey0, grey1, white } }) =>
    isSticked
      ? `${s.smOnly(`background-color: ${whiteGrey0}`)}
         ${s.over.sm(`box-shadow: 0 0 10px ${grey1}`)}`
      : `background-color: ${white}`}
`;

export const P = styled.p`
  ${s.center}
  ${s.textCenter}
  ${s.bgTransparent}
  ${s.h14}
  font-weight: bold;
  border: none;
`;

export const SearchIcon = styled(searchIcon)`
  width: 17px;
  height: 17px;
  margin-right: 7px;
  ${s.under.sm('fill:red;')}
`;
