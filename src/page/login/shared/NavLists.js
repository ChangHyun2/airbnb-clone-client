import React from 'react';
import { houseIcon, adventureIcon, helpIcon } from '@UI/SVGIcon/Icons';
import NavList from '@component/smOnly/NavList/NavList';
import navListData from './NavLists.data';

const NavLists = () =>
  navListData.map(({ title, items }) => (
    <NavList title={title} items={items} key={title} />
  ));

export default NavLists;
