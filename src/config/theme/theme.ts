import { characterSpacings } from './characterSpacings';
import { device } from './device';
import { fontSizes } from './fontSizes';
import { fontWeights } from './fontWeights';
import { lineHeights } from './lineHeights';
import { palette } from './palette';

declare module 'styled-components' {
   export interface DefaultTheme {
      device: typeof device;
      colors: typeof palette;
      fontSizes: typeof fontSizes;
      fontWeights: typeof fontWeights;
      lineHeights: typeof lineHeights;
      characterSpacings: typeof characterSpacings;
   }
}

export const Theme = {
   device,
   colors: palette,
   fontSizes,
   fontWeights,
   lineHeights,
   characterSpacings,
};
