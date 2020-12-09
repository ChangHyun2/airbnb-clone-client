import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useCarouselContext } from './context/CarouselContext';

const Btn = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: none;
  background-color: white;
  ${({ disabled }) => `
    ${disabled ? 'visibility:hidden' : ''}
  `}
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
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    console.log(state.isFirstSlide);
    switch (direction) {
      case 'prev':
        setDisabled(state.isFirstSlide);
        break;
      case 'next':
        setDisabled(state.isLastSlide);
        break;
      default:
        setDisabled(false);
        break;
    }
  }, [direction, state.isFirstSlide, state.isLastSlide]);

  const handleOnClick = (e) => {
    if (state.slides.length === 0) {
      return;
    }

    const navigateDirection = e.target.dataset.direction;

    const oldCurrent = state.current;
    let newCurrent;
    let newTrackOffset;
    let isFirstSlide;
    let isLastSlide;

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

    isFirstSlide = newCurrent === 0 ? true : false;

    newTrackOffset = -state.slideRelativePositions[newCurrent];

    if (0 < newCurrent && newCurrent < state.slides.length - 1) {
      if (state.config.showBothSlides) {
        newTrackOffset +=
          (-state.slides[newCurrent].offsetWidth + state.windowSize.width) / 2;
      }
    }

    if (newCurrent === state.slides.length - 1) {
      isLastSlide = true;
      newTrackOffset +=
        -state.slides[newCurrent].offsetWidth + state.windowSize.width;
    } else {
      isLastSlide = false;
    }

    dispatch({
      type: 'CLICK_NAVIGATE_BTN',
      value: {
        current: newCurrent,
        trackOffset: newTrackOffset,
        direction: navigateDirection,
        isFirstSlide,
        isLastSlide,
      },
    });
  };

  return (
    <Btn
      onClick={handleOnClick}
      data-direction={direction}
      disabled={disabled}
    />
  );
};

const Navigate = () => {
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
