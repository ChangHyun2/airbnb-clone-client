import React from 'react';
import Divider from '@UI/Divider';

export default {
  title: 'Divider',
};

export const SingleDivider = () => <Divider />;

export const DoubleDividewr = () => (
  <Divider>
    <span style={{ padding: '1em' }}>double divider</span>
  </Divider>
);
