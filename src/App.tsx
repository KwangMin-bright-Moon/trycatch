import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { TCtheme } from './styles/theme';
import { darkPalette, lightPalette } from './styles/colors';
import { useState } from 'react';

function App() {
  const [colorTheme, setColorTheme] = useState('light');
  const onChangeColorTheme = () =>
    colorTheme === 'light' ? setColorTheme('dark') : setColorTheme('light');

  const theme = { ...TCtheme };
  theme.colors = colorTheme === 'light' ? lightPalette : darkPalette;
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
