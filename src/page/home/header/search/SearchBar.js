import React, { useCallback, useState, useRef } from 'react';
import { useDetectSticked } from '@hooks';
import { Sticky, Wrapper, Paragraph, SearchIcon } from './SearchBar.styled.js';

function SearchBar() {
  const [isSearching, setSearching] = useState(false);
  const onClickParagraph = useCallback(() => setSearching(true));

  const stickyRef = useRef();
  const isSticked = useDetectSticked(stickyRef);

  return (
    <Sticky ref={stickyRef} isSticked={isSticked}>
      <Wrapper isSticked={isSticked}>
        {!isSearching && <SearchIcon />}
        <Paragraph onClick={onClickParagraph}>어디로 여행가세요?</Paragraph>
      </Wrapper>
    </Sticky>
  );
}

export default SearchBar;
