import React from 'react';

import NavList from '@component/smOnly/NavList/NavList';
import navListsData from './NavLists.data.';

const NavLists = () =>
  navListsData.map(({ title, items, id }) => (
    <NavList title={title} items={items} key={id} />
  ));

export default NavLists;
