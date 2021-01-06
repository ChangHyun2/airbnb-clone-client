import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';

import { pallete } from '@variable';
import { MediaQueryContextProvider } from '@context/MediaQueryContext';
import Layout from './page/Layout';
import jwt_decode from 'jwt-decode';
import { setCurrentUser } from '@store/actions/authActions';
import store from '@store/index';

function App() {
  useEffect(() => {
    const jwtToken = localStorage.jwtToken;
    console.log('app loaded');

    if (jwtToken) {
      const decoded = jwt_decode(jwtToken);
      const currentTime = Date.now() / 1000;

      console.log('local auth', { jwtToken: decoded });
      if (currentTime < decoded.exp) {
        store.dispatch(setCurrentUser(decoded));
      }
    } else {
      fetch('http://localhost:3000/api/auth/login', {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
      })
        .then((res) => res.json())
        .then((user) => {
          if (user) {
            console.log('success initial auth', user);
            store.dispatch(setCurrentUser(user));
          }
        })
        .catch((e) => {
          console.log(e, 'error initial auth');
        });
    }
  }, []);

  return (
    <ThemeProvider theme={pallete}>
      <MediaQueryContextProvider>
        <Router>
          <Layout />
        </Router>
      </MediaQueryContextProvider>
    </ThemeProvider>
  );
}

export default App;
