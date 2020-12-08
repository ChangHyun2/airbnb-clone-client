import { useEffect, useState } from 'react';
import { useDetectOverThresholdOnScroll } from './useDetectOverThresholdOnScroll';

export const useDetectSticked = (ref) => {
  const [stickyOffsetTop, setStickyOffsetTop] = useState(0);

  useEffect(() => {
    var distanceToViewport =
      ref.current.getBoundingClientRect().top + window.scrollY;

    setStickyOffsetTop(distanceToViewport);
  }, [ref]);

  console.log(stickyOffsetTop);
  const isSticked = useDetectOverThresholdOnScroll(stickyOffsetTop);

  return isSticked;
};
