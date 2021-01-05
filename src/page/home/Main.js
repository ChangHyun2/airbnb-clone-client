import React from 'react';
import { Section, BlackMobileWrapper } from './Main.styled';
import { MobileWrapper } from '@UI/Wrapper';

function Main() {
  return (
    <>
      <MobileWrapper>
        <Section>
          <div>부천시</div>
          <div>부천시</div>
          <div>부천시</div>
          <div>부천시</div>
        </Section>
        <Section>
          <h2>어디에서나, 여행은 살아보는 거야!</h2>
        </Section>
      </MobileWrapper>
      <BlackMobileWrapper>
        <Section>
          <h2>온라인 체험</h2>
        </Section>
      </BlackMobileWrapper>
      <MobileWrapper>
        <Section>
          <h2>
            수백만 명에 이르는 에어비앤비 호스트 커뮤니티의 일원이 되어보세요.
          </h2>
        </Section>
      </MobileWrapper>
      <div style={{ height: '1000px' }}></div>
    </>
  );
}

export default Main;
