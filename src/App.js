import React, { useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { pallete } from '@variable';
import { MediaQueryContextProvider } from '@context/MediaQueryContext';
import Layout from './page/Layout';

function App() {
  // useEffect(() => {}, []); check auth from storage token

  return (
    <ThemeProvider theme={pallete}>
      <MediaQueryContextProvider>
        <Router>
          <Layout isAuth={false} />
        </Router>
      </MediaQueryContextProvider>
    </ThemeProvider>
  );
}

export default App;
