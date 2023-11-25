import { TCFont } from './../styles/fonts';
import { TCLightPalette } from './../styles/colors';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof TCLightPalette;
    fonts: typeof TCFont;
  }
}
