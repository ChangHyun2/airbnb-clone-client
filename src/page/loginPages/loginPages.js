import React from 'react';
import Show from '@component/Show';
import SmOnlyLogin from './SmOnly';

function loginPages() {
  return (
    <Show.onlySm>
      <SmOnlyLogin />
    </Show.onlySm>
  );
}

export default loginPages;
