import { breakpoint as bp } from '@variable';

const breakpoint = Object.values(bp);

export const over = ['sm', 'md', 'lg', 'xl'].reduce(
  (over, bp, i) => ({
    ...over,
    [bp]: (cssRules) =>
      `@media only screen and (min-width:${breakpoint[i]}px){${cssRules}}`,
  }),
  {}
);

export const under = ['sm', 'md', 'lg', 'xl'].reduce(
  (under, bp, i) => ({
    ...under,
    [bp]: (cssRules) =>
      `@media only screen and (max-width:${breakpoint[i]}px){${cssRules}}`,
  }),
  {}
);

export const smOnly = (cssRules) =>
  `@media only screen and (max-width: ${breakpoint[0]}px){${cssRules}}`;

export const smTo = ['md', 'lg', 'xl'].reduce(
  (smTo, bp, i) => ({
    ...smTo,
    [bp]: (cssRules) =>
      `@media only screen and (min-width:${breakpoint[0]}px) and (max-width:${
        breakpoint[i + 1]
      }px){${cssRules}}`,
  }),
  {}
);
export const mdTo = ['lg', 'xl'].reduce(
  (mdTo, bp, i) => ({
    ...mdTo,
    [bp]: (cssRules) =>
      `@media only screen and (min-width:${breakpoint[1]}) and (max-width:${
        breakpoint[i + 2]
      }px){${cssRules}}`,
  }),
  {}
);

// export const lgToXl = (cssRules) => `@media only screen and (min-width:${breakpoint[2]}) and (max-width:${breakpoint[3]}){${cssRules}}`,
