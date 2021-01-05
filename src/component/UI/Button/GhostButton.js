import styled from '@emotion/styled';
import BaseButton from './BaseButton';

const GhostButton = styled(BaseButton)`
  background-color: none;
  padding: none;
  border: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const SecondaryGhostButton = styled(GhostButton)`
  ${({ theme: { secondary } }) => `
  color: ${secondary}
    &:visited{
      color: ${secondary}
    }
  `}
`;

export default GhostButton;
