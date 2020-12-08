const path = require('path');

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
          '@emotion/styled': toPath('node_modules/@emotion/styled'),
          S: toPath('src/lib/S/index.js'),
          '@variable': toPath('src/variable'),
          '@UI': toPath('src/component/UI'),
          '@hooks': toPath('src/hooks'),
          '@context': toPath('src/context'),
          '@component': toPath('src/component'),
          '@data': toPath('src/data'),
          '@utils': toPath('src/utils'),
        },
      },
    };
  },
};
