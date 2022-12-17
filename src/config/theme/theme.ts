import { device } from './device';
import { fontSizes } from './fontSizes';
import { palette } from './palette';

declare module 'styled-components' {
   export interface DefaultTheme {
      device: typeof device;
      colors: typeof palette;
      fontSizes: typeof fontSizes;
      fontWeights: {
         light: number;
         medium: number;
         bold: number;
      };
   }
}

export const Theme = {
   device,
   colors: palette,
   fontSizes,
   fontWeights: {
      light: 300,
      medium: 400,
      bold: 500,
   },
};
