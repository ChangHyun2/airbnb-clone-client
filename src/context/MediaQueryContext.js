import React from 'react';
import { createContext } from 'react';
import { useMediaQuery } from '@hooks';
import { breakpoint } from '@variable';

const MediaQueryContext = createContext({});

const { sm, md, lg, xl } = breakpoint;

const MediaQueryContextProvider = ({ children }) => {
  const isOnlySm = useMediaQuery(`(max-width: ${sm}px)`);
  const isOverSm = useMediaQuery(`(min-width: ${sm}px)`);
  const isSmToMd = useMediaQuery(
    `(min-width: ${sm}px) and (max-width: ${md}px)`
  );
  const isOverMd = useMediaQuery(`(min-width: ${md}px)`);
  const isUnderMd = useMediaQuery(`(max-width: ${md}px)`);

  return (
    <MediaQueryContext.Provider
      value={{ isOnlySm, isSmToMd, isOverMd, isUnderMd, isOverSm }}
    >
      {children}
    </MediaQueryContext.Provider>
  );
};

export { MediaQueryContext, MediaQueryContextProvider };
