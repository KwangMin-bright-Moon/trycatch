import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: { [string]: string };
    fonts: { [string]: string };
  }
}
