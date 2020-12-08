import React from 'react';
import styled from '@emotion/styled';
import { center } from 'S';

const DividerWithChildren = styled.div`
  width: 100%;
  ${center}
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

  ${({ theme: { grey1, grey7 } }) => `
    & > *::before,
    & > *::after {
      border-bottom: 1px solid ${grey1}
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
  height: 50px;

  & > div {
    position: absolute;
    top: 0;
    width: 100%;
    height: 50%;
    ${({ theme: { grey1 } }) => `
      border-bottom: 1px solid ${grey1};
    `}
  }
`;

const OverFlowHidden = styled.div`
  overflow: hidden;
`;

const Divider = ({ children }) =>
  children ? (
    <OverFlowHidden>
      <DividerWithChildren>
        <div>{children}</div>
      </DividerWithChildren>
    </OverFlowHidden>
  ) : (
    <SingleDivider>
      <div></div>
    </SingleDivider>
  );

export default Divider;
