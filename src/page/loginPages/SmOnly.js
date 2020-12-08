import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './smOnly/Login';
import SignupLogin from './smOnly/SignupLogin';
import ForgotPassword from './smOnly/ForgotPassword';

function SmOnlyLoginPages() {
  return (
    <Switch>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/signup-login">
        <SignupLogin />
      </Route>
      <Route path="/forgot-password">
        <ForgotPassword />
      </Route>
    </Switch>
  );
}

export default SmOnlyLoginPages;
