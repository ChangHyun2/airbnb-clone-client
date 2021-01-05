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

const GoogleSuccess = () => {
  React.useEffect(() => {
    const params = window.location.search;
    if (window.opener) {
      // send them to the opening window
      window.opener.postMessage(params);
      // close the popup
      window.close();
    }
  });
  return <h2>waitsdfsdfsdfsdfsdfsdfsdfsfsdfsdfsing...</h2>;
};

function Layout() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <>
      <Switch>
        <Route path="/google/success">
          <GoogleSuccess />
        </Route>
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
