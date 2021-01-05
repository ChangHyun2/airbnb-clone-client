import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { CarouselContextProvider } from './context/CarouselContext';
import Window from './Window';
import Navigate from './Navigate';
import Track from './Track';
import Slide from './Slide';

const CarouselWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

// store
const initialState = {
  trackOffset: 0,
  slides: [],
  slidesRef: [],
  current: 0,
  direction: 'next',
  windowSize: {
    width: 0,
    height: 0,
  },
  isFirstSlide: true,
  isLastSlide: false,
  slideRelativePositions: [],
};

const reducer = (state, action) => {
  switch (action.type) {
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

    case 'SET_SLIDES': {
      const {
        slides,
        slideRelativePositions,
        windowHeight,
        isSetSlides,
      } = action.value;
      return {
        ...state,
        slides,
        slideRelativePositions,
        windowHeight,
        isSetSlides,
      };
    }

    case 'WINDOW-RESIZED': {
      const { slides, slideRelativePositions, trackOffset } = action.value;
      return {
        ...state,
        slides,
        slideRelativePositions,
        trackOffset,
      };
    }

    default:
      return state;
  }
};

// utils

// carousel
const Carousel = (props) => {
  const { showButton, slideGap = 0, showBothSlides = false } = props.config;

  const windowRef = useRef(null);
  const trackRef = useRef(null);

  const [state, dispatch] = React.useReducer(reducer, {
    ...initialState,
    config: {
      slideGap,
      showBothSlides,
    },
    windowRef,
    trackRef,
  });

  useEffect(() => {
    window.onresize = () => {
      const slideRelativePositions = [0];
      let slideRelativePosition = 0;

      const slides = state.trackRef.current.querySelectorAll('.carousel-slide');

      slides.forEach((slide) => {
        slideRelativePosition +=
          slide.firstElementChild.width + state.config.slideGap;
        slideRelativePositions.push(slideRelativePosition);
      });

      let newTrackOffset;

      newTrackOffset = -slideRelativePositions[state.current];

      if (0 < state.current && state.current < slides.length - 1) {
        if (state.config.showBothSlides) {
          newTrackOffset +=
            (state.windowRef.current.offsetWidth -
              slides[state.current].firstElementChild.width) /
            2;
        }
      }

      if (state.current === slides.length - 1) {
        newTrackOffset +=
          -slides[state.current].firstElementChild.width +
          state.windowRef.current.offsetWidth;
      }

      dispatch({
        type: 'WINDOW-RESIZED',
        value: {
          slides,
          slideRelativePositions,
        },
      });
    };
  }, [state.isSetSlides]);

  useEffect(() => {
    console.log('updated');
  }, [state.slideRelativePositions]);

  return (
    <CarouselContextProvider
      value={{
        state,
        dispatch,
      }}
    >
      <CarouselWrapper {...props}>
        <Window ref={windowRef} style={{ height: state.windowHeight }}>
          {showButton ? <Navigate /> : null}
          <Track
            ref={trackRef}
            carouselChildren={props.children}
            slideRelativePositions={state.slideRelativePositions}
          />
        </Window>
      </CarouselWrapper>
    </CarouselContextProvider>
  );
};

export default Carousel;
