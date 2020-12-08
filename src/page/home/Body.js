import React from 'react';
import styled from '@emotion/styled';
import Location from './body/Location';
import Theme from './body/Theme';
import Adventure from './body/Adventure';
import Host from './body/Host';

const Wrapper = styled.div`
  padding: 24px;
`;

function Body() {
  return (
    <Wrapper>
      <Location />
      <Theme />
      <Adventure />
      <Host />
      <div style={{ height: '1000px' }}></div>
    </Wrapper>
  );
}

export default Body;
