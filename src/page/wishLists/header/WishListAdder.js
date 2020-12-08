import React from 'react';
import Head from './wishListAdder/Head';
import Foot from './wishListAdder/Foot';
import Body from './wishListAdder/Body';

const WishListAdder = ({ modalSetOff }) => {
  return (
    <>
      <Head modalSetOff={modalSetOff} />
      <Body />
      <Foot modalSetOff={modalSetOff} />
    </>
  );
};

export default WishListAdder;
