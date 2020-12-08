import React from 'react';
import styled from '@emotion/styled';
import Header from './Header';

const Wrapper = styled.div`
  padding: 12px 23px;
`;

function wishLists() {
  return (
    <Wrapper>
      <Header />
      {/* <WishCards /> */}
    </Wrapper>
  );
}

export default wishLists;
