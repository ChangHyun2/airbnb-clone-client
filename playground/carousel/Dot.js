import styled from 'emotion/styled';
import { useCarouselContext } from './context/CarouselContext';

const StyledDot = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: none;
  background-color: white;
`;

const StyledDots = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dot = (props) => {
  const { state } = useCarouselContext;

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
        // add fallback transition
        return;
      } else {
        newCurrent = oldCurrent - 1;
      }
    }

    if (navigateDirection === 'next') {
      if (oldCurrent === state.slides.length - 1) {
        // add fallback transition
        return;
      } else {
        newCurrent = oldCurrent + 1;
      }
    }

    if (newCurrent === 0) {
      isFirstSlide = true;
      isLastSlide = false;
    }

    newTrackOffset = -state.slideRelativePositions[newCurrent];

    if (0 < newCurrent && newCurrent < state.slides.length - 1) {
      if (state.config.showBothSlides) {
        newTrackOffset +=
          (state.windowRef.current.offsetWidth -
            state.slides[newCurrent].firstElementChild.width) /
          2;
      }
      isFirstSlide = false;
      isLastSlide = false;
    }

    if (newCurrent === state.slides.length - 1) {
      isLastSlide = true;
      newTrackOffset +=
        -state.slides[newCurrent].firstElementChild.width +
        state.windowRef.current.offsetWidth;
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

  return <StyledDot onClick={handleOnClick} />;
};

const Dots = (props) => {
  const [count, setCount] = useState(0);

  const hnaldeOnClick = () => {};

  return (
    <StyledDots>
      {Array(props.count)
        .fill(0)
        .map((dot, index) => {
          return <Dot index={index} />;
        })}
    </StyledDots>
  );
};
