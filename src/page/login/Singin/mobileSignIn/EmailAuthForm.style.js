import styled from '@emotion/styled';
import ghostButton from '@UI/Button/GhostButton';
import { Form as form } from 'Former';
import s from 'S';

export const Form = styled(form)`
  padding: 10px 0;
`;

export const FieldBox = styled.div`
  border-radius: 7px;
  margin-bottom: 18px;

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

export const GhostButton = styled(ghostButton)`
  padding: 0.5em;
  margin-left: 5px;
  background-color: transparent;
  ${s.h(14)}
  ${({ theme: { secondary } }) => `
    color: ${secondary}
  `}
`;

export const LinkItem = styled.div`
  ${s.center}
  ${s.textCenter}
`;

export const ForgotPasswordLinkItem = styled(LinkItem)`
  margin-bottom: 10px;

  a {
    margin: 3px 0 10px;
  }
`;

export const RegisterLinkItem = styled(LinkItem)`
  ${s.h16}
  margin-bottom: 30px;

  button {
    ${s.h16}
  }
`;
// Input
// touched일 때 value가 ''일 경우 적용하기
// onBlur일 때 value가 없을 경우 제거하기
