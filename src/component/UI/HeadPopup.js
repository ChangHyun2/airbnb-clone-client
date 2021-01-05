import React from 'react';
import styled from '@emotion/styled';
import s from 'S';
import { closeIcon, alertIcon } from '@UI/SVGIcon/Icons';
import ghostButton from '@UI/Button/GhostButton';

const StyledAlertPopup = styled.div`
  ${s.center}
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 10px;
  background-color: #ffd1c4;

  p {
    ${s.h14}
    ${s.textCenter}
  }
`;

const AlertIcon = styled(alertIcon)`
  color: #ffd1c4;
  width: 30px;
  height: 30px;
  background-color: #e4a593;
  border-radius: 100%;
  stroke-width: 3px;
  stroke: currentcolor;
  overflow: visible;
  margin-right: 15px;
`;

const CloseIcon = styled(closeIcon)`
  color: #b2725f;
  width: 11px;
  height: 11px;
  fill: none;
  stroke-width: 5px;
  stroke: currentcolor;
  overflow: visible;
  margin-left: 10px;
`;

const CloseButton = styled(ghostButton)`
  text-decoration: none;
  background: none;
  padding: none;

  ${({ theme: { black4, black } }) => `
    color: ${black4}
    &:hover{
      color: ${black}
    }
  `}
`;

export const AlertHeadPopup = ({ message, show, onClick }) => {
  return show ? (
    <StyledAlertPopup>
      <s.RowSpaceBetween>
        <AlertIcon />
        <p>{message}</p>
        <div style={{ alignSelf: 'stretch', paddingTop: '16px' }}>
          <CloseButton onClick={onClick}>
            <CloseIcon />
          </CloseButton>
        </div>
      </s.RowSpaceBetween>
    </StyledAlertPopup>
  ) : null;
};
