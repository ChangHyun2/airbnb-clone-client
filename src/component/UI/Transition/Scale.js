import React from 'react';
import { Transition } from 'react-transition-group';

const createDefaultStyle = (duration) => ({
  transition: `all ${duration}ms ease-in-out`,
  width: '0px',
  height: '0px',
});

const transitionStyles = {
  // inProp에 의해 토글링됨
  // inProp이 true일 경우, "enter" stage가 시작됨
  entering: { width: '100px', height: '100px' },
  entered: { width: '500px', height: '500px' },
  exiting: { width: '500px', height: '500px' },
  exited: { width: '0px', height: '0px' },
};

export const Scale = ({ in: inProp, children, duration }) => {
  return (
    <Transition in={inProp} timeout={duration}>
      {(state) => (
        <div
          style={{
            ...createDefaultStyle(duration),
            ...transitionStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};
