import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './home/home';
import { useHistory } from 'react-router-dom';
import Login from './login/login';
import WishLists from './wishLists/MobilewishLists';
import Profile from './profile/profile';

import Show from '@component/Show';
import FootNavMenu from '@component/smOnly/FootNavMenu/footNavMenu';

function Layout() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <>
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
        <Route path="/message">
          <Message />
        </Route> */}
        <Route path="/profile">
          {isAuth ? <Profile /> : <Redirect to="/" />}
        </Route>
      </Switch>
      <Login />
      <Show.underMd>
        <FootNavMenu showThreshold={200} />
      </Show.underMd>
    </>
  );
}

export default Layout;
