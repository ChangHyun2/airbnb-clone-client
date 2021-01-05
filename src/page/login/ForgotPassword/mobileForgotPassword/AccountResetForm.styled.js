import styled from '@emotion/styled';

import { Form as form } from 'Former';
import { alertIcon } from '@UI/SVGIcon/Icons';
import s from 'S';

export const Form = styled(form)`
  padding: 10px 0;
`;

export const FieldBox = styled.div`
  border-radius: 7px;
  margin-bottom: 8px;

  ${({ theme: { grey3 } }) => `
  box-shadow: inset 0 0 0 1px ${grey3}
`}
`;

export const FieldWrapper = styled.div`
  ${s.center}
  width: 100%;
  height: 57px;
  padding: 5px 10px;

  ${({ theme: { grey3 } }) => `
&:not(:first-of-type){
  border-top: 1px solid ${grey3}
}
`}
  &[data-focused='true'] {
    box-shadow: inset 0 0 0 2px black;
    border-radius: 7px;
    & ~ div {
      border-top: 1px solid transparent;
    }
  }
  &[data-has-error='true'] {
    box-shadow: inset 0 0 0 2px rgb(193, 53, 21);
    & div {
      color: rgb(193, 53, 21);
    }
    &:not([data-focused='true']) {
      background-color: rgba(193, 53, 21, 0.03);
    }
    & div[data-shrink='true'] {
      font-weight: bold;
    }
  }
`;

export const Label = styled.label`
  position: relative;
  flex: 1;
  display: block;
  height: 100%;
`;
export const InputName = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 15px;
  transition: top 0.2s, transform 0.2s, font-size 0.2s;
  &[data-shrink='true'] {
    font-size: 12px;
    top: 0;
    transform: translateY(0);
  }
  ${({ theme }) => `
  color: ${theme.grey6}
`}
`;

export const Input = styled.input`
  display: block;
  position: absolute;
  top: 10px;
  border: 1px blue solid;
  height: calc(100% - 5px);
  width: 100%;
  outline: none;
  border: none;
  padding: 0;
  background: transparent;
  &:focus {
    border: none;
  }
`;

// Input
// touched일 때 value가 ''일 경우 적용하기
// onBlur일 때 value가 없을 경우 제거하기

export const Alert = styled.div`
  ${s.row}
  color: rgb(193, 53, 21);
`;

export const AlertIcon = styled(alertIcon)`
  width: 15px;
  height: 15px;
  fill: none;
  stroke-width: 2px;
  stroke: currentcolor;
  overflow: visible;
  margin-right: 5px;
`;

export const EmptyAlert = styled.div`
  height: 15px;
`;
