import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useCarouselContext } from './context/CarouselContext';

const StyledSlide = styled.div`
  width: 100%;
  position: absolute;
  ${({ left }) => `left:${left}px;`}
`;

const Slide = (props) => {
  const { state } = useCarouselContext();
  const [styles, setStyles] = useState({
    left: state.slideRelativePositions[props.index],
  });

  useEffect(() => {
    setStyles({
      left: state.slideRelativePositions[props.index],
    });
  }, [state.slideRelativePositions]);

  return (
    <StyledSlide style={styles} left={props.left} className={'carousel-slide'}>
      {props.children}
    </StyledSlide>
  );
};

export default Slide;
