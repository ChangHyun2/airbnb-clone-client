import React from 'react';
import noticeData from '@data/notice';
import Notice from './header/Notice';
import Search from './header/Search';

const { href, content } = noticeData.slice(-1)[0];

function Header() {
  return (
    <header>
      <Notice href={href} content={content} />
      <Search />
    </header>
  );
}

export default Header;
