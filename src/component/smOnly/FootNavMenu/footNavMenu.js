import React from 'react';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { center } from 'S';
import { useAuthContext } from '@context/AuthContext';
import { breakpoint } from '@variable';
import Icons from './Icons';
import NavItem from './NavItem';
import useShowNavMenu from './useShowNavMenu';
import navItems from './data/navItems';

const FixedBottom = styled.div`
  ${center}
  box-shadow: 0 0 3px  #eee;
  background-color: rgba(255, 255, 255);
  position: fixed;
  bottom: 0;
  width: 100%;
  transition: bottom 1s;
  ${({ show }) => (show ? '' : 'bottom: -100%;')}
`;

const Wrapper = styled.nav`
  ${center}
  width: 100%;
  max-width: ${breakpoint.md * 0.7}px;
`;

const Text = styled.span`
  font-weight: bold;
  ${({ theme: { grey4 } }) => `color: ${grey4}`}
`;

// https://github.com/facebook/react/issues/14066
function FootNavMenu({ showThreshold }) {
  const show = useShowNavMenu(showThreshold);
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <FixedBottom show={show}>
      <Wrapper>
        {navItems.map(({ to, exact, text, isAuth: shouldAuth, logo }) => {
          if (shouldAuth !== undefined && shouldAuth !== isAuth) {
            return null;
          }

          const Icon = Icons[logo + 'Icon'];

          return (
            <NavItem key={text} to={to} exact={exact}>
              <Icon />
              <Text>{text}</Text>
            </NavItem>
          );
        })}
      </Wrapper>
    </FixedBottom>
  );
}

export default React.memo(FootNavMenu);
