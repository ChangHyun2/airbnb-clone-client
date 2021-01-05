import React from 'react';
import styled from '@emotion/styled';
import { useToggle } from '@hooks';

import BaseButton from './BaseButton';
import NormalButton, {
  BlackButton,
  PrimaryButton,
  SecondaryButton,
  InvertedButton,
} from './Button';
import FluidButton from './FluidButton';
import GhostButton, { SecondaryGhostButton } from './GhostButton';
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

const Wrapper = styled.div`
  padding: 1em;
  & button {
    margin-right: 1em;
  }
`;

export const Base = () => {
  const isSubmitting = useToggle();

  return (
    <>
      <BaseButton style={{ width: 200 }} isSubmitting={isSubmitting.on}>
        button
      </BaseButton>
      <div>
        <BaseButton onClick={() => isSubmitting.toggle()}>
          toggle isSubmitting
        </BaseButton>
      </div>
    </>
  );
};

export const Button = () => (
  <>
    <Wrapper>
      <PrimaryButton size={'sm'}>sm</PrimaryButton>
      <PrimaryButton size={'md'}>md</PrimaryButton>
      <PrimaryButton size={'lg'}>lg</PrimaryButton>
    </Wrapper>
    <Wrapper>
      <PrimaryButton>primary</PrimaryButton>
      <SecondaryButton>secondary</SecondaryButton>{' '}
      <InvertedButton>inverted</InvertedButton>
    </Wrapper>
    <Wrapper style={{ backgroundColor: 'black' }}>
      <NormalButton>button</NormalButton>
      <BlackButton>Black</BlackButton>
    </Wrapper>
  </>
);
export const Ghost = () => (
  <>
    <GhostButton>Ghost</GhostButton>
    <SecondaryGhostButton>Ghost</SecondaryGhostButton>
  </>
);
export const Round = () => <RoundButton>r</RoundButton>;
export const Fluid = () => {
  const isSubmitting = useToggle();

  return (
    <>
      <FluidButton style={{ width: 200 }} isSubmitting={isSubmitting.on}>
        Fluid Button
      </FluidButton>
      <div>
        <BaseButton onClick={() => isSubmitting.toggle()}>
          toggle isSubmitting
        </BaseButton>
      </div>
    </>
  );
};
