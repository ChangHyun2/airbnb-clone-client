import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Global, css } from '@emotion/react';

ReactDOM.render(
  <>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }
      `}
    />
    <App />
  </>,
  document.getElementById('root')
);
