import { zIndex as zIndexObj } from '@variable';

export const zIndex = Object.entries(zIndexObj).reduce((zIndex, component) => {
  const [name, size] = component;

  return {
    ...zIndex,
    [name]: `z-index: ${size};`,
  };
});
