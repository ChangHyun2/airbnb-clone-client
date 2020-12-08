import React from 'react';
import styled from '@emotion/styled';
import { useCarouselContext } from './context/CarouselContext';

const Btn = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: none;
  background-color: white;
`;

const NextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 1;
`;

const PrevWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  z-index: 1;
`;

const NavigateBtn = ({ direction }) => {
  const { dispatch, state } = useCarouselContext();

  const handleOnClick = (e) => {
    const { slides, current: oldCurrent, trackOffset: oldTrackOffset } = state;
    if (slides.length === 0) {
      return;
    }

    const oldSlideWidth = slides[oldCurrent].offsetWidth;
    const navigateDirection = e.target.dataset.direction;

    let newCurrent;
    let newTrackOffset;

    if (navigateDirection === 'prev') {
      if (oldCurrent === 0) {
        return;
      } else {
        newCurrent = oldCurrent - 1;
      }
    }

    if (navigateDirection === 'next') {
      if (oldCurrent === state.slides.length - 1) {
        return;
      } else {
        newCurrent = oldCurrent + 1;
      }
    }

    newTrackOffset = -state.slideRelativePositions[newCurrent];
    if (newCurrent !== 0) {
      newTrackOffset += 40;
    }

    dispatch({
      type: 'CLICK_NAVIGATE_BTN',
      value: {
        current: newCurrent,
        trackOffset: newTrackOffset,
        direction: navigateDirection,
      },
    });
  };

  return <Btn onClick={handleOnClick} data-direction={direction} />;
};

const Navigate = ({ onClick }) => {
  return (
    <>
      <NextWrapper>
        <NavigateBtn direction={'prev'} />
      </NextWrapper>
      <PrevWrapper>
        <NavigateBtn direction={'next'} />
      </PrevWrapper>
    </>
  );
};

export default Navigate;
