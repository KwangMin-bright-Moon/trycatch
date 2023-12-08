import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { TCtheme } from './styles/theme';

import Layout from './layouts/Layout';
import { DarkModeProvider } from './contexts/DarkModeContext';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState({ ...TCtheme });

  return (
    <ThemeProvider theme={theme}>
      <DarkModeProvider>
        <GlobalStyle />
        <Layout setTheme={setTheme}>
          <Outlet />
        </Layout>
      </DarkModeProvider>
    </ThemeProvider>
  );
}

export default App;
