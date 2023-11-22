import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { TCtheme } from './styles/theme';

import Layout from './layouts/Layout';
import { DarkModeProvider } from './contexts/DarkModeContext';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState({ ...TCtheme });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <DarkModeProvider>
        <Layout setTheme={setTheme} />
      </DarkModeProvider>
    </ThemeProvider>
  );
}

export default App;
