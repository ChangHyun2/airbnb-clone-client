import React, { useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { useCarouselContext } from './context/CarouselContext';

const TrackWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  transition: transform 1s;
`;

const Track = ({ children, ...props }) => {
  const trackRef = useRef();
  let updatedSlides = useRef(false);

  const { state, dispatch } = useCarouselContext();

  const handleOnTransitionEnd = () => {
    console.log(state);
  };
  useEffect(() => {
    dispatch({ type: 'SET_TRACK_REF', value: trackRef });
  }, [trackRef, dispatch]);

  useEffect(() => {
    if (children.length > 0 && !updatedSlides.current) {
      dispatch({
        type: 'SET_SLIDES',
        value: trackRef.current.querySelectorAll('.carousel-slide'),
      });
      updatedSlides.current = true;
    }
  }, [children, dispatch]);

  return (
    <TrackWrapper
      style={{ transform: `translateX(${state.trackOffset}px)` }}
      ref={trackRef}
      onTransitionEnd={handleOnTransitionEnd}
      {...props}
    >
      {children}
    </TrackWrapper>
  );
};

export default Track;
