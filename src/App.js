import React from 'react';
import Navigations from './Navigations';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './Utills/Theme';
import "./css/common.css";
import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <GlobalProvider>
        <Navigations />
      </GlobalProvider>
    </MuiThemeProvider>
  );
}

export default App;
