import React from 'react';
import { NavLink as navlink } from 'react-router-dom';
import { ClassNames, useTheme } from '@emotion/react';
import styled from '@emotion/styled';

const Li = styled.li`
  flex: 1;
  max-width: 100px;

  ${({ theme: { primary, black } }) => `
  &:hover {
    & path {
      fill: ${primary}
    }
    & span {
      color: ${black}
    }
  }
  `}
`;

const NavLink = styled(navlink)`
  display: block;
  text-decoration: none;
  text-align: center;
  margin: 1.2em;
`;

// https://stackoverflow.com/questions/57117445/how-to-create-a-css-class-for-use-in-activeclassname
const NavItem = ({ children, to, exact, otherProps }) => {
  const theme = useTheme();
  console.log(theme);

  return (
    <Li>
      <ClassNames>
        {({ css }) => (
          <NavLink
            to={to}
            exact={exact}
            activeClassName={css`
              & path {
                fill: ${theme.primary};
              }
              & span {
                color: ${theme.black};
              }
            `}
            {...otherProps}
          >
            {children}
          </NavLink>
        )}
      </ClassNames>
    </Li>
  );
};

export default NavItem;
