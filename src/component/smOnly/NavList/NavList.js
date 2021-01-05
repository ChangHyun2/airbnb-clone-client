import React from 'react';
import styled from '@emotion/styled';
import s from 'S';
import Divider from '@UI/Divider';

const Nav = styled.nav`
  margin-bottom: 40px;
`;

const LinkItem = styled.li`
  ${s.h(16)}
  text-decoration: none;
  margin-bottom: 20px;
  ${({ theme: { black5 } }) => `
    color:${black5}
  `}
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
  margin-bottom: 25px;
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
  svg {
    fill: ${({ theme: { black5 } }) => `
        ${black5}
      `};
  }
`;

function NavList({ title, items, ...otherProps }) {
  return (
    <>
      <Nav {...otherProps}>
        {title ? <Title>{title}</Title> : null}
        {items.map(({ Icon, title: itemTitle, info }) => {
          return (
            <LinkItem key={itemTitle}>
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
      <Divider />
    </>
  );
}

export default NavList;
