import React from 'react';
import styled from '@emotion/styled';
import BaseButton from '@UI/Button/BaseButton';
import s from 'S';

const Wrapper = styled.div`
  ${s.spaceBetween}
  border-top: 1px solid #eee;
  padding: 15px 25px 15px 10px;
`;

const SaveButton = styled(BaseButton)`
  ${s.bold}
  ${s.h16}
  padding: 14px 25px;
  border-radius: 7px;
  border: none;
  ${({ theme: { white, black2 } }) => `
    color:${white}
    background-color: ${black2}
  `}
`;

const CancelButton = styled(BaseButton)`
  ${s.bold}
  ${s.h16}
  padding: 0 13px;
  height: 40px;
  border-radius: 7px;
  border: none;
  text-decoration: underline;
  ${({ theme: { white, whiteGrey0 } }) => `
    background-color: ${white};
    &:hover {
      background-color: ${whiteGrey0};
    }
  `}
`;

const Foot = ({ modalSetOff }) => {
  return (
    <Wrapper>
      <CancelButton onClick={modalSetOff}>취소</CancelButton>
      <SaveButton>저장</SaveButton>
    </Wrapper>
  );
};

export default Foot;
