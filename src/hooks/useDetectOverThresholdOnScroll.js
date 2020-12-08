import { useState, useEffect, useCallback } from 'react';

export const useDetectOverThresholdOnScroll = (threshold) => {
  const [overThreshold, setOverThreshold] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > threshold) {
      setOverThreshold(true);
    } else {
      setOverThreshold(false);
    }
  }, [threshold]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return overThreshold;
};
