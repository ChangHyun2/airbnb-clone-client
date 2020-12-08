import styled from '@emotion/styled';
import BaseButton from './BaseButton';

const GhostButton = styled(BaseButton)`
  background-color: none;
  border: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default GhostButton;
