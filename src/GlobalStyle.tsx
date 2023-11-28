import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  font: inherit;
  color: inherit;
}

*,
:after,
:before {
  box-sizing: border-box;
}

:root {
  -webkit-tap-highlight-color: transparent;
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
  cursor: default;
  line-height: 1.5;
  overflow-wrap: break-word;
  word-break: break-word;
  tab-size: 4;
}

html,
body {
  height: 100%;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

button {
  background: none;
  border: 0;
  cursor: pointer;
}

a {
  text-decoration: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.content};
  transition: background-color 0.5s, color 0.5s;

}

#root {
  width: 100%;
  height: 100%;
  max-width: 500px;
  overflow: hidden;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: ${(props) => props.theme.colors.webkitBoxShadow};
  box-shadow: ${(props) => props.theme.colors.boxShadow};
}
`;

export default GlobalStyle;
