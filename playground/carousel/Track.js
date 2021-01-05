import React, { useRef, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useCarouselContext } from './context/CarouselContext';

const TrackWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 1s;
`;

const Slide = (props) => {
  console.log(props.slideRelativePositions[props.index]);

  return (
    <div
      style={{
        width: '100%',
        position: 'absolute',
        left: props.slideRelativePositions[props.index],
      }}
      {...props}
    >
      {props.children}
    </div>
  );
};

const Track = React.forwardRef(({ children, ...props }, ref) => {
  let isSetSlides = useRef(false);

  const { state, dispatch } = useCarouselContext();

  useEffect(() => {
    if (props.carouselChildren && props.carouselChildren.length > 0) {
      isSetSlides.current = true;

      const slides = ref.current.querySelectorAll('.carousel-slide');

      const slideRelativePositions = [0];
      let slideRelativePosition = 0;
      let maxHeight = 0;

      slides.forEach((slideNode, index) => {
        slideRelativePosition +=
          slideNode.firstElementChild.width + state.config.slideGap;
        slideRelativePositions.push(slideRelativePosition);

        if (maxHeight < slideNode.offsetHeight) {
          maxHeight = slideNode.offsetHeight;
        }
      });

      dispatch({
        type: 'SET_SLIDES',
        value: {
          slides,
          slideRelativePositions,
          windowHeight: maxHeight,
          isSetSlides,
        },
      });
    }
  }, [props.carouselChildren, dispatch]);

  return (
    <TrackWrapper
      style={{ transform: `translateX(${state.trackOffset}px)` }}
      {...props}
      ref={ref}
    >
      {React.Children.map(props.carouselChildren, (child, index) =>
        React.createElement(
          Slide,
          {
            index,
            className: 'carousel-slide',
            key: 'slide' + index,
            slideRelativePositions: props.slideRelativePositions,
          },
          child
        )
      )}
    </TrackWrapper>
  );
});

export default Track;
