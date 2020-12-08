import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './home/home';
import LoginPages from './loginPages/loginPages';
import WishLists from './wishLists/wishLists';

import Show from '@component/Show';
import FootNavMenu from '@component/smOnly/FootNavMenu/footNavMenu';
import { AuthContextProvider } from '@context/AuthContext';
console.log('hi');

function Layout({ isAuth }) {
  return (
    <AuthContextProvider value={isAuth}>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/wishlists">
          <WishLists />
        </Route>
        {/* <Route path="/trips">
          <Trips />
        </Route>
        <Route path="/inbox">
          <Inbox />
        </Route>
        <Route path="/account-setting">
          <AccountSetting />
        </Route>
        */}
      </Switch>
      <LoginPages />
      <Show.underMd>
        <FootNavMenu showThreshold={200} />
      </Show.underMd>
    </AuthContextProvider>
  );
}

export default Layout;
