import React from 'react';
import { Button, P, Section, Wrapper } from './Search.styled';
import SearchBar from './search/SearchBar';

function Search() {
  return (
    <Section>
      <Wrapper>
        <div>
          <P>
            이제, 여행은 <br />
            가까운 곳에서
          </P>
          <Button href="#">근처의 숙소 둘러보기</Button>
        </div>
      </Wrapper>
      <SearchBar />
    </Section>
  );
}
// const Wrapper2 = styled.div`
//   position: absolute;
//   width: 100%;
//   top: 0;
// `;
export default Search;
