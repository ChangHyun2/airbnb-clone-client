import React from 'react';
import { Notice, SearchSection, SearchWrapper } from './Header.styled';
import SearchBar from './header/SearchBar';
import BaseButton from '@UI/Button/BaseButton';
import noticeData from '@data/notice';

const { href, content } = noticeData.slice(-1)[0];

function Header() {
  return (
    <header>
      <Notice>
        <a href={href}>{content}</a>
      </Notice>
      <SearchWrapper>
        <SearchSection>
          <div>
            <p>
              이제, 여행은 <br />
              가까운 곳에서
            </p>
            <BaseButton href="#">근처의 숙소 둘러보기</BaseButton>
          </div>
        </SearchSection>
        <SearchBar />
      </SearchWrapper>
    </header>
  );
}

export default Header;
