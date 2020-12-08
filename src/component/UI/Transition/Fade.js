import React from 'react';
import { Transition } from 'react-transition-group';

const createDefaultStyle = (duration) => ({
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
});

const transitionStyles = {
  // inProp에 의해 토글링됨
  // inProp이 true일 경우, "enter" stage가 시작됨
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export const Fade = ({ in: inProp, children, duration }) => {
  console.log(inProp);
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

/*

버튼 클릭 (open)

 - modal 마운팅,
 - css atttach (scale : 1, backdrop color)
 - transition 0.3초

버튼 클릭 (close)

  - css attach (scale : 0, backdrop color)
  - transition 0.3초
  - 0.3초 후, unmount
*/