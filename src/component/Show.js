import { useContext } from 'react';
import { MediaQueryContext } from '@context/MediaQueryContext';

const Show = {
  onlySm: ({ children }) => {
    const { isOnlySm } = useContext(MediaQueryContext);

    if (isOnlySm) {
      return children;
    }
    return null;
  },
  overSm: ({ children }) => {
    const { isOverSm } = useContext(MediaQueryContext);

    if (isOverSm) {
      return children;
    }
    return null;
  },
  smToMd: ({ children }) => {
    const { isSmToMd } = useContext(MediaQueryContext);

    if (isSmToMd) {
      return children;
    }

    return null;
  },
  overMd: ({ children }) => {
    const { isOverMd } = useContext(MediaQueryContext);

    if (isOverMd) {
      return children;
    }

    return null;
  },
  underMd: ({ children }) => {
    const { isUnderMd } = useContext(MediaQueryContext);

    if (isUnderMd) {
      return children;
    }

    return null;
  },
};

export default Show;
