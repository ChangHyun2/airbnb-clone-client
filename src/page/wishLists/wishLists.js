import React from 'react';
import Show from '@component/Show';
import MobilewishLists from './MobilewishLists';

function WishLists() {
  return (
    <Show.onlySm>
      <MobilewishLists />
    </Show.onlySm>
  );
}

export default WishLists;
