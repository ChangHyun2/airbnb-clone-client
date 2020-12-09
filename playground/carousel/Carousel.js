import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { CarouselContextProvider } from './context/CarouselContext';
import Window from './Window';
import Navigate from './Navigate';
import Track from './Track';

const CarouselWrapper = styled.div`
  position: relative;
`;

const initialState = {
  trackRef: null,
  trackOffset: 0,
  slides: [],
  current: 0,
  direction: 'next',
  windowSize: {
    width: 0,
    height: 0,
  },
  isFirstSlide: true,
  isLastSlide: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TRACK_REF':
      return { ...state, trackRef: action.value };
    case 'CLICK_NAVIGATE_BTN': {
      const {
        current,
        trackOffset,
        direction,
        isFirstSlide,
        isLastSlide,
      } = action.value;
      return {
        ...state,
        current,
        trackOffset,
        direction,
        isFirstSlide,
        isLastSlide,
      };
    }
    case 'SET_SLIDES':
      return { ...state, slides: action.value };
    case 'SLIDES_LOADED':
      const { windowSize, slideRelativePositions } = action.value;
      return {
        ...state,
        windowSize,
        slideRelativePositions,
      };

    default:
      return;
  }
};

// utils
const getMaxSlideSize = (slides) => {
  const windowSize = { width: 0, height: 0 };

  slides.forEach((slideNode) => {
    const { offsetWidth, offsetHeight } = slideNode;
    if (windowSize.width < offsetWidth) {
      windowSize.width = offsetWidth;
    }
    if (windowSize.height < offsetHeight) {
      windowSize.height = offsetHeight;
    }
  });

  return windowSize;
};

const getSlideRelativePositions = (slides, slideGap, windowOverSize) => {
  const slideRelativePositions = [0];
  let slideRelativePosition = 0;

  slides.forEach((slideNode, index) => {
    slideRelativePosition += slideNode.offsetWidth + slideGap;
    slideRelativePositions.push(slideRelativePosition);
  });

  return slideRelativePositions;
};

const Carousel = (props) => {
  const {
    showButton,
    slideGap = 0,
    windowOverSize = 0,
    showRightSlide = false,
    showBothSlides = false,
  } = props.config;

  const [state, dispatch] = React.useReducer(reducer, {
    ...initialState,
    config: {
      showRightSlide,
      showBothSlides,
    },
  });

  // update
  useEffect(() => {
    console.log('updated state', state);
  }, [state]);

  useEffect(() => {
    if (state.slides.length > 0) {
      const windowSize = getMaxSlideSize(state.slides);

      if (showRightSlide) {
        windowSize.width += windowOverSize + slideGap;
      }
      if (showBothSlides) {
        windowSize.width += (windowOverSize + slideGap) * 2;
      }

      const slideRelativePositions = getSlideRelativePositions(
        state.slides,
        slideGap,
        windowOverSize
      );

      state.slides.forEach((slideNode, index) => {
        slideNode.style.position = 'absolute';
        slideNode.style.left = `${slideRelativePositions[index]}px`;
        if (index === slideNode.length - 1) {
          slideNode.style.left = `${state.slides[index]}`;
        }
      });

      dispatch({
        type: 'SLIDES_LOADED',
        value: {
          windowSize,
          slideRelativePositions,
        },
      });
    }
  }, [state.slides, slideGap, windowOverSize, showBothSlides, showRightSlide]);

  return (
    <CarouselContextProvider
      value={{
        state,
        dispatch,
      }}
    >
      <CarouselWrapper {...props}>
        <Window windowSize={state.windowSize}>
          {showButton ? <Navigate /> : null}
          <Track>
            {React.Children.map(props.children, (child, index) => (
              <div className={`carousel-slide`}>{child}</div>
            ))}
          </Track>
        </Window>
      </CarouselWrapper>
    </CarouselContextProvider>
  );
};

export default Carousel;
