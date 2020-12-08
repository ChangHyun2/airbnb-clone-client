import React from 'react';
import styled from '@emotion/styled';
import BaseButton from '../BaseButton';

const ButtonPill = (cssRules) => styled(BaseButton)`
  padding: 12px 20px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  ${cssRules}
`;

export default ButtonPill;
