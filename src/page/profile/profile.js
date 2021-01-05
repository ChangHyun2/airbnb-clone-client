import React from 'react';
import Show from '@component/Show';
import MobileProfile from './MobileProfile';

function Profile() {
  return (
    <Show.onlySm>
      <MobileProfile />
    </Show.onlySm>
  );
}

export default Profile;
