import React from 'react';
import { A, Wrapper } from './Notice.styled';

const Notice = ({ href, content }) => (
  <Wrapper>
    <A href={href}>{content}</A>
  </Wrapper>
);

export default Notice;
