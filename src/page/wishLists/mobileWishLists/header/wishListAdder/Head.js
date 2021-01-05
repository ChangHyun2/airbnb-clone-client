import React from 'react';
import styled from '@emotion/styled';
import BaseButton from '@UI/Button/BaseButton';
import { closeIcon as CloseIcon } from '@UI/SVGIcon/Icons';
import RoundButton from '@UI/Button/RoundButton';
import s from 'S';

const Header = styled.div`
  ${s.spaceBetween}
  border-bottom: 1px solid #eee;

  h2 {
    ${s.h16};
    ${s.textCenter};
    ${s.bold};
  }

  // align H2 to center
  span:last-type-of {
    visibility: invisible;
    padding: 23px;
  }
`;

const CloseButton = styled(RoundButton)`
  padding: 10px;
  margin: 13px;

  div {
    ${s.size(11, 11)}
    stroke-width: 3px;
    fill: none;

    ${({ theme: { black2 } }) => `
      stroke: ${black2};
    `}
  }

  svg {
    ${s.size(11, 11)}
    stroke-width: 3px;
    fill: none;

    ${({ theme: { black2 } }) => `
      stroke: ${black2};
    `}
  }
`;

const Head = ({ modalSetOff }) => {
  return (
    <Header>
      <CloseButton onClick={modalSetOff}>
        <CloseIcon />
      </CloseButton>
      <h2>목록 만들기</h2>
      <span />
    </Header>
  );
};

export default Head;
