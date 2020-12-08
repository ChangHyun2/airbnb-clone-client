import styled from '@emotion/styled';
import BaseButton from '@UI/Button/BaseButton';
import { center } from 'S';

const RoundButton = styled(BaseButton)`
  ${center}
  background: none;
  border: none;
  border-radius: 100%;
  padding: 1em;
  ${({ children }) => {
    const length = children.length;

    return `
      width:${length}em;
      height:${length}em;
    `;
  }}
  ${({ theme: { whiteGrey1 } }) => `
  &:hover {
    background-color: ${whiteGrey1}
  }
`}
`;

export default RoundButton;
