import React from 'react';
import styled from '@emotion/styled';
import { TripleDotLoading as TripleDot } from './index';
import s from 'S';

export default {
  title: 'Loading',
  decorators: [
    (Story) => (
      <div style={{ width: '500px', margin: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

const Wrapper = styled.div`
  ${s.center}
  margin-bottom: 50px;
`;

export const TripleDotLoading = () => (
  <>
    {[5, 15, 30].map((size) => (
      <>
        <h2>size : {size}</h2>
        <Wrapper>
          <TripleDot size={size} />
        </Wrapper>
      </>
    ))}
  </>
);
