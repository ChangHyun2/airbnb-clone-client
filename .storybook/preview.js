import { addDecorator } from '@storybook/react';

import React from 'react';
import { ThemeProvider } from '@emotion/react';

const pallete = {
  black: '#000;',
  black1: ';#111;',
  black2: '#222;',
  black3: '#333;',
  black4: '#444;',
  black5: '#555;',
  white: '#fff;',
  whiteGrey0: '#f8f8f8;',
  whiteGrey1: '#f4f4f4;',
  grey0: '#eee;',
  grey1: '#ddd;',
  grey2: '#ccc;',
  grey3: '#bbb;',
  grey4: '#aaa;',
  grey5: '#999;',
  grey6: '#888;',
  grey7: '#777;',
  grey8: '#666;',
  primary: '#ff385c;',
  primaryDark: '#e21a60;',
  secondary: '#008489;',
  facebook: '#4568b2;',
  facebookDark: '#3b5998;',
};

const EmotionThemeProvider = (storyFn) => (
  <ThemeProvider theme={pallete}>{storyFn()}</ThemeProvider>
);

addDecorator(EmotionThemeProvider);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
