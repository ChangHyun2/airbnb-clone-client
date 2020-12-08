import React from 'react';
import styled from '@emotion/styled';
import BaseButton from '@UI/Button/BaseButton';
import { closeIcon, loginIcon } from '@UI/SVGIcon/Icons';
import RoundButton from '@UI/Button/RoundButton';
import s from 'S';

const Wrapper = styled.div`
  ${s.spaceBetween}
  border-bottom: 1px solid #eee;
`;

const CloseButton = styled(RoundButton)`
  padding: 10px;
  margin: 13px;
`;

const CloseIcon = styled(closeIcon)`
  ${s.size(11, 11)}
  stroke-width: 3px;
  fill: none;

  ${({ theme: { black2 } }) => `
    stroke: ${black2};
  `}
`;

const H2 = styled.h2`
  ${s.h16};
  ${s.textCenter};
  ${s.bold};
`;

// align H2 to center
const Empty = styled.span`
  visibility: invisible;
  padding: 23px;
`;

const Head = ({ modalSetOff }) => {
  return (
    <Wrapper>
      <CloseButton onClick={modalSetOff}>
        <CloseIcon />
      </CloseButton>
      <H2>목록 만들기</H2>
      <Empty />
    </Wrapper>
  );
};

export default Head;
