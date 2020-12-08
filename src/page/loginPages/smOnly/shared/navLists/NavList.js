import React from 'react';
import styled from '@emotion/styled';
import s from 'S';

const Nav = styled.nav``;

const LinkItem = styled.li`
  ${s.h(16)}
  text-decoration: none;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: -3px;
  }

  &:hover {
    cursor: pointer;
  }

  svg {
    margin-right: 10px;
    width: 18px;
    height: 18px;
  }
`;

const Title = styled.div`
  ${s.h(10)}
  margin-bottom: 1.5em;
`;

const ItemTitle = styled.div`
  ${s.h(16)}
  position:relative;
`;

const Info = styled.p`
  ${s.h(12)}
  padding-left: 29px;
  margin-top: -2px;
  color: #555;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

function NavList({ title, items }) {
  return (
    <Nav>
      <Title>{title}</Title>
      {items.map(({ Icon, title: itemTitle, info }) => {
        return (
          <LinkItem>
            <a href="/" target="blank">
              <Flex>
                <Icon />
                <ItemTitle>{itemTitle}</ItemTitle>
              </Flex>
              <Info>{info}</Info>
            </a>
          </LinkItem>
        );
      })}
    </Nav>
  );
}

export default NavList;
