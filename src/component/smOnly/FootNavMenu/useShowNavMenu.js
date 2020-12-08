import { useState, useCallback, useEffect } from 'react';

const useShowUnderThresholdOrOnScrollUp = (showThreshold) => {
  const [show, setShow] = useState(true);
  const [prevScroll, setPrevScroll] = useState(0);

  const scrollHandler = useCallback(() => {
    const currentScroll = window.scrollY;

    setShow(
      currentScroll < showThreshold
        ? true
        : currentScroll > prevScroll
        ? false
        : currentScroll === document.clientHeight
        ? false
        : true
    );

    setPrevScroll(currentScroll);
  });

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [scrollHandler]);

  return show;
};
export default useShowUnderThresholdOrOnScrollUp;
