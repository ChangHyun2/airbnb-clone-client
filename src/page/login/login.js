import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import MobileSignIn from './Singin/MobileSignIn';
import MobileSignUp from './Signup/MobileSignUp';
import MobileSignUpEmail from './Signup/MobileSignUpEmail';
import MobileForgotPassword from './ForgotPassword/MobileForgotPassword';
import Show from '@component/Show';

function Login() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <Show.onlySm>
      <Switch>
        {isAuth && <Redirect to="/" />}
        <Route path="/signin" exact>
          <MobileSignIn />
        </Route>
        <Route path="/signup">
          <MobileSignUp />
        </Route>
        <Route path="/signup-email">
          <MobileSignUpEmail />
        </Route>
        <Route path="/forgot-password">
          <MobileForgotPassword />
        </Route>
      </Switch>
    </Show.onlySm>
  );
}

export default Login;
