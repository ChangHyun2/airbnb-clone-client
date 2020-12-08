import React from 'react';
import BaseButton from './BaseButton';
import FluidButton from './Mobile/FluidButton';
import GhostButton from './GhostButton';
import RoundButton from './RoundButton';

// const Template = (args) => <BaseButton {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

export default {
  title: 'Button',
  decorators: [
    (Story) => (
      <div style={{ width: '500px', margin: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Base = () => <BaseButton>button</BaseButton>;
export const Ghost = () => <GhostButton>Ghost</GhostButton>;
export const Round = () => <RoundButton>r</RoundButton>;
export const Fluid = () => <FluidButton>Fluid</FluidButton>;
