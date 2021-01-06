import React from 'react';
import { useHistory, Route, useRouteMatch } from 'react-router-dom';
import styled from '@emotion/styled';
import { FacebookFluidButton, GoogleFluidButton } from '@UI/Button/FluidButton';
import { facebookIcon, googleIcon } from '@UI/SVGIcon/Icons';

const GoogleIcon = styled(googleIcon)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const FacebookIcon = styled(facebookIcon)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

/*
popup handler
() => {
          const url = new URL('http://localhost:3000/api/auth/google');

          // window.open(url, '_self');

          let windowReference = null;
          let previousUrl = null;

          const receiveMessage = (e) => {
            console.log(e);
            console.log(e.origin);
            if (e.origin !== 'http://localhost:5000') {
              return;
            }

            const { data } = e;
            console.log(data);

            if (data.source === 'lma-login-redirect') {
              const { payload } = data;
              console.log(data);
              const redirectUrl = `/api/auth/google${payload}`;
              window.location.pathname = redirectUrl;
            }
          };

          const openPopup = (url, name) => {
            window.removeEventListener('message', receiveMessage);

            const windowFeatures =
              'toolbar=no, menubar=no, width=600, height=700, top=100, left=100';

            if (windowReference === null || windowReference.closed) {
              windowReference = window.open(url, name, windowFeatures);
            } else if (previousUrl !== url) {
              windowReference = window.open(url, name, windowFeatures);
              windowReference.focus();
            } else {
              windowReference.focus();
            }

            window.addEventListener('message', receiveMessage);
            previousUrl = url;
          };

          openPopup('http://localhost:3000/api/auth/google', 'google');
        }
*/

const ThirdAuth = () => {
  const history = useHistory();

  return (
    <>
      <FacebookFluidButton Icon={FacebookIcon}>
        페이스북 계정으로 로그인
      </FacebookFluidButton>
      <GoogleFluidButton
        Icon={GoogleIcon}
        onClick={() => {
          location.href = 'http://localhost:3000/api/auth/google';
        }}
      >
        구글 계정으로 로그인
      </GoogleFluidButton>
    </>
  );
};

export default ThirdAuth;
