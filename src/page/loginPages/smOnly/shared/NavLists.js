import React from 'react';
import NavList from './navLists/NavList';
import navListData from './navLists/data';
import Divider from '@UI/Divider';

const NavLists = () => {
  return navListData.map(({ title, items }) => (
    <>
      <NavList title={title} items={items} />
      <Divider />
    </>
  ));
};

export default NavLists;
