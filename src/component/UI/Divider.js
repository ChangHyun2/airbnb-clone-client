import React from 'react';
import styled from '@emotion/styled';
import { center } from 'S';

const DividerWithChildren = styled.div`
  width: 100%;
  ${center}
  margin-bottom: 15px;

  & > * {
    position: relative;
  }

  & > *::after {
    content: '';
    display: tabel-cell;
    position: absolute;
    width: 5000px;
    left: 100%;
    top: 50%;
  }

  & > *::before {
    content: '';
    display: tabel-cell;
    position: absolute;
    width: 5000px;
    right: 100%;
    top: 50%;
  }

  ${({ theme: { grey0, grey7, whiteGrey0 } }) => `
    & > *::before,
    & > *::after {
      border-bottom: 1px solid ${grey0}
      box-shadow: 0px 0px 0px 0.5px ${whiteGrey0}
    }
    & > * {
      color: ${grey7} 
    }
  `}
`;

const SingleDivider = styled.div`
  ${center}
  position: relative;
  width: 100%;
  margin-bottom: 25px;

  & > div {
    position: absolute;
    top: 0;
    width: 100%;
    height: 50%;
    ${({ theme: { grey0, whiteGrey0 } }) => `
      border-bottom: 1px solid ${grey0}
      box-shadow: 0px 0px 0px 0.5px ${whiteGrey0}
    `}
  }
`;

const OverFlowHidden = styled.div`
  overflow: hidden;
`;

const Divider = ({ children, ...otherProps }) =>
  children ? (
    <OverFlowHidden {...otherProps}>
      <DividerWithChildren>
        <div>{children}</div>
      </DividerWithChildren>
    </OverFlowHidden>
  ) : (
    <SingleDivider {...otherProps}>
      <div></div>
    </SingleDivider>
  );

export default Divider;
