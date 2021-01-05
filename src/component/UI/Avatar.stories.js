import React from 'react';
import * as Avatar from './Avatar';

export default {
  title: 'Avatar',
  decorators: [
    (Story) => (
      <div style={{ width: '500px', margin: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export const MobileAvatar = () => <Avatar.MobileAvatar />;
