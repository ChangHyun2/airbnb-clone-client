import { useState } from 'react';

export const useToggle = (initialOn) => {
  const [on, setOnState] = useState(initialOn);
  const setOn = () => setOnState(true);
  const setOff = () => setOnState(false);
  const toggle = () => setOnState((on) => !on);

  return { on, setOn, setOff, toggle };
};
