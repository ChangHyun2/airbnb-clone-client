import styled from '@emotion/styled';
import BaseButton from '@UI/Button/BaseButton';
import { center } from 'S';

const RoundButton = styled(BaseButton)`
  ${center}
  background: none;
  border: 2px solid transparent;
  border-radius: 100%;
  padding: 1em;
  ${({ children }) => {
    const length = children.length;

    return `
      width:${length}em;
      height:${length}em;
    `;
  }}
  ${({ theme: { whiteGrey1, black } }) => `
  &:hover {
    background-color: ${whiteGrey1}
  }
  &:focus{
    border: 2px solid ${black}
  }
`}
`;

export default RoundButton;
