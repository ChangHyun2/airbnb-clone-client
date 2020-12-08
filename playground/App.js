import React, { useRef, useState, useEffect, useCallback } from 'react';
import Carousel from './carousel/Carousel';

import styled from '@emotion/styled';

const Img = styled.img`
  width: 70vw;
  height: 300px;
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
    <>
      <Carousel config={{ showButton: true, slideGap: 20, windowOverSize: 40 }}>
        {images.map(({ id, download_url: url, author }) => (
          <Img key={id} src={url} alt={author} />
        ))}
      </Carousel>
    </>
  );
}

export default App;
