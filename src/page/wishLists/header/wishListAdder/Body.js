import React, { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  padding: 3em;
`;

const InputBox = styled.div`
  padding: 7px 10px;
  height: 55px;
  border-radius: 8px;
  border: 1px solid #aaa;
  margin: 3em auto;
  &:focus {
    border: 3px;
  }
`;

function Body() {
  const [inputs, setInputs] = useState({ name: '', isPrivate: false });

  return (
    <Wrapper>
      <InputBox>
        <label
          htmlFor="name"
          css={css`
            display: block;
          `}
        >
          <div>이름</div>
          <input type="text" name="name"></input>
        </label>
      </InputBox>
      <InputBox>
        <label
          htmlFor="privateInfo"
          css={css`
            display: block;
          `}
        >
          <div> 개인정보 설정</div>
          <select
            name="privateInfo"
            css={css`
              width: 50%;
            `}
          >
            <option>전체공개</option>
            <option>비공개</option>
          </select>
        </label>
      </InputBox>
    </Wrapper>
  );
}

export default Body;
