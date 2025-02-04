import React, { useRef, useState, useEffect, useCallback } from 'react';
import Carousel from './carousel/Carousel';

import styled from '@emotion/styled';

const Img = styled.img`
  width: 100%;
  height: 250px;
`;

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list')
      .then((res) => res.json())
      .then((data) => {
        setImages(data.slice(0, 5));
      });
  }, []);

  return (
    <div>
      <p>이미지 크기에 따라 windowSize 고정</p>
      <h1>showBothSlides</h1>
      <Carousel
        config={{
          showButton: true,
          slideGap: 20,
          showBothSlides: true,
        }}
        style={{ width: '50%' }}
      >
        {images.map(({ id, download_url: url, author }, index) => (
          <Img key={id} src={url} alt={author} style={{ width: '60%' }} />
        ))}
      </Carousel>
      <h1>showRightSlide</h1>
      <Carousel
        config={{
          showButton: true,
          slideGap: 20,
          showRightSlide: true,
        }}
      >
        {images.map(({ id, download_url: url, author }, index) => (
          <Img key={id} src={url} alt={author} style={{ width: '80%' }} />
        ))}
      </Carousel>
      <h1>normal</h1>
      <Carousel
        config={{
          showButton: true,
          slideGap: 20,
        }}
      >
        {images.map(({ id, download_url: url, author }, index) => (
          <Img key={id} src={url} alt={author} />
        ))}
      </Carousel>
      <Carousel
        config={{
          showButton: true,
          slideGap: 20,
          showBothSlides: true,
        }}
        style={{ width: '400px' }}
      >
        {images.map(({ id, download_url: url, author }, index) => (
          <Img key={id} src={url} alt={author} style={{ width: '300px' }} />
        ))}
      </Carousel>
    </div>
  );
}

export default App;
